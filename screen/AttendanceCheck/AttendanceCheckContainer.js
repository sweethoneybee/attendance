import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import * as FileSystem from "expo-file-system";
import XLSX from "xlsx";
import getEnvVars from "../../environment";
import AttendanceCheckPresenter from "./AttendanceCheckPresenter";
import ErrorHandler from "../../util/ErrorHandler";

const { getApiUrl } = getEnvVars();

const getCurrentDate = () => {
  let month, date, hour, min;
  month = String(new Date().getMonth() + 1);
  date = String(new Date().getDate());
  hour = String(new Date().getHours());
  min = String(new Date().getMinutes());

  let currentDate = Number(month + date + hour + min);
  return currentDate;
};

const parsingLectureNameToDate = (contentName) => {
  let parsedDate, key, startDate, endDate;
  key = contentName;
  while (key.match(/\/(.*)/)) {
    key = key.match(/\/(.*)/)[1];
  }
  parsedDate = key.substring(1);

  let s_month, s_date, s_hour, s_min, s_index;
  s_index = 5;
  s_month =
    (parsedDate[s_index] !== 0 ? parsedDate[s_index] : "") +
    parsedDate[s_index + 1];
  s_date =
    (parsedDate[s_index + 3] !== 0 ? parsedDate[s_index + 3] : "") +
    parsedDate[s_index + 4];
  s_hour =
    (parsedDate[s_index + 6] !== 0 ? parsedDate[s_index + 6] : "") +
    parsedDate[s_index + 7];
  s_min =
    (parsedDate[s_index + 9] !== 0 ? parsedDate[s_index + 9] : "") +
    parsedDate[s_index + 10];

  let e_month, e_date, e_hour, e_min;
  s_index += 19;
  e_month =
    (parsedDate[s_index] !== 0 ? parsedDate[s_index] : "") +
    parsedDate[s_index + 1];
  e_date =
    (parsedDate[s_index + 3] !== 0 ? parsedDate[s_index + 3] : "") +
    parsedDate[s_index + 4];
  e_hour =
    (parsedDate[s_index + 6] !== 0 ? parsedDate[s_index + 6] : "") +
    parsedDate[s_index + 7];
  e_min =
    (parsedDate[s_index + 9] !== 0 ? parsedDate[s_index + 9] : "") +
    parsedDate[s_index + 10];

  startDate = Number(s_month + s_date + s_hour + s_min);
  endDate = Number(e_month + e_date + e_hour + e_min);

  return { startDate, endDate };
};

const checkLectureIsAvailable = (contentName, currentDate) => {
  const { startDate, endDate } = parsingLectureNameToDate(contentName);

  if (currentDate >= startDate && currentDate <= endDate) return 1;
  else if (currentDate < startDate) return 2;
  else return 3;
};
const makeAttendanceData = async (
  classList,
  studentId,
  storedSemester,
  attendanceDataOfClasses
) => {
  let keyCount = 0;
  for (let classId in classList) {
    const className = classList[classId];
    try {
      await FileSystem.downloadAsync(
        encodeURI(getApiUrl(studentId, classId, storedSemester)),
        FileSystem.documentDirectory + classId
      );
    } catch (error) {
      error.reason = "블랙보드에 연결할 수 없음";
      throw error;
    }

    let xlsFile;
    try {
      xlsFile = await FileSystem.readAsStringAsync(
        FileSystem.documentDirectory + classId
      );
    } catch (error) {
      error.reason = "출석정보 파싱 실패";
      throw error;
    }

    let [absentCount, canTakeCount, soonCount, timeoverCount] = [0, 0, 0, 0];
    const lectures = [];
    const lectureXls = [];
    const xls = XLSX.read(xlsFile, { type: "string" });
    xls.SheetNames.forEach((sheetName) => {
      lectureXls.push(XLSX.utils.sheet_to_json(xls.Sheets[sheetName]));
    });

    let currentDate = getCurrentDate();
    lectureXls.forEach((xlsPage) => {
      xlsPage.forEach((oneLectureObj) => {
        let lecture = {
          name: oneLectureObj["컨텐츠명"],
          contentTime: oneLectureObj["컨텐츠시간"],
          passedTime: oneLectureObj["학습한시간"],
        };

        let isAvailable = 0; // 이미 수강완료
        if (oneLectureObj["온라인출석상태(P/F)"] === "F") {
          lecture.check = false;
          absentCount += 1;

          isAvailable = checkLectureIsAvailable(lecture.name, currentDate); // 1: 수강가능, 2: 예정, 3: 기간만료
          if (isAvailable === 1) canTakeCount += 1;
          else if (isAvailable === 2) soonCount += 1;
          else if (isAvailable === 3) timeoverCount += 1;
        } else {
          lecture.check = true;
        }

        lecture.isAvailable = isAvailable;
        lectures.push(lecture);
      });
    });

    let pass = absentCount === 0 ? true : false;
    attendanceDataOfClasses.push({
      className,
      classId,
      lectures,
      absentCount,
      canTakeCount,
      soonCount,
      timeoverCount,
      pass,
      key: keyCount,
    });
    keyCount += 1;
  }
};

export default ({ navigation, route }) => {
  const [classes, setClasses] = useState({
    loading: true,
    studentId: "",
  });
  const [attendanceDataOfClasses, setAttendanceDataOfClasses] = useState([]);
  const [semester, setSemester] = useState("");

  const setRenderingData = async () => {
    let classList, studentId, storedSemester, attendanceDataOfClasses;
    attendanceDataOfClasses = Array();
    try {
      classList = await AsyncStorage.getItem("ClassList");
      classList = classList !== null ? JSON.parse(classList) : null;

      studentId = await AsyncStorage.getItem("StudentId");
      studentId =
        studentId !== null ? JSON.parse(studentId) : "입력된 학번 없음";

      storedSemester = await AsyncStorage.getItem("Semester");
      setSemester(storedSemester);
    } catch (error) {
      ErrorHandler({ errorMessage: "출석정보 가져오던 중 에러 발생" });
    }

    if (classList !== null && studentId !== null) {
      try {
        await makeAttendanceData(
          classList,
          studentId,
          storedSemester,
          attendanceDataOfClasses
        );
      } catch (error) {
        if (!error.reason) {
          console.log("에러: " + error);
          ErrorHandler({
            errorMessage: "출석확인 페이지 알 수 없는 에러 발생",
          });
        } else {
          ErrorHandler({
            errorMessage: error.reason,
            messageTail: "\n페이지를 아래로 당겨서 새로고침 해보세요",
            confirmOnPress: () => {},
          });
        }
      }

      setClasses({
        loading: false,
        attendanceDataOfClasses,
        studentId,
      });
      setAttendanceDataOfClasses(attendanceDataOfClasses);
    } else {
      setClasses({
        loading: false,
        studentId,
      });
      setAttendanceDataOfClasses(attendanceDataOfClasses);
    }
  };

  useEffect(() => {
    setRenderingData();
  }, []);

  useEffect(() => {}, []);
  return (
    <AttendanceCheckPresenter
      navigation={navigation}
      route={route}
      refreshFn={setRenderingData}
      {...classes}
      attendanceDataOfClasses={attendanceDataOfClasses}
      setAttendanceDataOfClasses={setAttendanceDataOfClasses}
      semester={semester}
    />
  );
};

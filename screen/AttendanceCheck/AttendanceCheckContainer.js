import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import * as FileSystem from "expo-file-system";
import XLSX from "xlsx";
import getEnvVars from "../../environment";
import AttendanceCheckPresenter from "./AttendanceCheckPresenter";
import ErrorHandler from "../../util/ErrorHandler";

const { getApiUrl } = getEnvVars();

const getCurrentDate = () => {
  let month, date, hours, min;
  month = new Date().getMonth();
  date = new Date().getDate();
  hours = new Date().getHours();
  min = new Date().getMinutes();

  let currentDate = [month, date, hours, min];
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
  s_month = Number(
    (parsedDate[s_index] !== 0 ? parsedDate[s_index] : "") +
      parsedDate[s_index + 1]
  );
  s_date = Number(
    (parsedDate[s_index + 3] !== 0 ? parsedDate[s_index + 3] : "") +
      parsedDate[s_index + 4]
  );
  s_hour = Number(
    (parsedDate[s_index + 6] !== 0 ? parsedDate[s_index + 6] : "") +
      parsedDate[s_index + 7]
  );
  s_min = Number(
    (parsedDate[s_index + 9] !== 0 ? parsedDate[s_index + 9] : "") +
      parsedDate[s_index + 10]
  );

  let e_month, e_date, e_hour, e_min;
  s_index += 19;
  e_month = Number(
    (parsedDate[s_index] !== 0 ? parsedDate[s_index] : "") +
      parsedDate[s_index + 1]
  );
  e_date = Number(
    (parsedDate[s_index + 3] !== 0 ? parsedDate[s_index + 3] : "") +
      parsedDate[s_index + 4]
  );
  e_hour = Number(
    (parsedDate[s_index + 6] !== 0 ? parsedDate[s_index + 6] : "") +
      parsedDate[s_index + 7]
  );
  e_min = Number(
    (parsedDate[s_index + 9] !== 0 ? parsedDate[s_index + 9] : "") +
      parsedDate[s_index + 10]
  );

  startDate = [s_month, s_date, s_hour, s_min];
  endDate = [e_month, e_date, e_hour, e_min];

  return { startDate, endDate };
};

const checkLectureIsAvailable = (contentName, currentDate) => {
  const { startDate, endDate } = parsingLectureNameToDate(contentName);
  let index = 0;

  // 인덱스 증가시켜나가면서 배열끼리 비교. 3가지 경우가 있음
  // 인덱스가 4인 경우, 수강가능기간에 포함. return 1.
  // 인덱스가 4보다 작은 경우, 날짜 초과 or 아직 안됨
  // 이 경우, 해당 인덱스에서 start, end를 비교해서 알아봐야함.
  // 아직 수강 가능 날짜가 안되었으면 return 2.
  // 이미 날짜 초과되었으면 return 3.

  return 1;
  return 2;
  return 3;
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

          let isAvailable = checkLectureIsAvailable(lecture.name, currentDate); // 1: 수강가능, 2: 예정, 3: 기간만료
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

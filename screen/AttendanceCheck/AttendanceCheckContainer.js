import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import * as FileSystem from "expo-file-system";
import XLSX from "xlsx";
import getEnvVars from "../../environment";
import AttendanceCheckPresenter from "./AttendanceCheckPresenter";
import ErrorHandler from "../../util/ErrorHandler";

const { getApiUrl } = getEnvVars();

const makeAttendanceData = async (classList, studentId) => {
  for (let classId in classList) {
    const className = classList[classId];
    try {
      await FileSystem.downloadAsync(
        encodeURI(getApiUrl(studentId, classId)),
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

    let absentCount = 0;
    const lectures = [];
    const lectureXls = [];
    const xls = XLSX.read(xlsFile, { type: "string" });
    xls.SheetNames.forEach((sheetName) => {
      lectureXls.push(XLSX.utils.sheet_to_json(xls.Sheets[sheetName]));
    });

    let i = 0;
    lectureXls.forEach((xlsPage) => {
      xlsPage.forEach((oneLectureObj) => {
        let lecture = {
          name: oneLectureObj["컨텐츠명"],
          contentTime: oneLectureObj["컨텐츠시간"],
          passedTime: oneLectureObj["학습한시간"],
          key: i,
        };
        if (oneLectureObj["온라인출석상태(P/F)"] === "F") {
          lecture.check = false;
          absentCount += 1;
        } else {
          lecture.check = true;
        }
        lectures.push(lecture);
        i += 1;
      });
    });

    let pass = absentCount === 0 ? true : false;
    return {
      className,
      classId,
      lectures,
      absentCount,
      pass,
    };
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
    let classList, studentId, attendanceDataOfClasses;
    attendanceDataOfClasses = Array();
    try {
      classList = await AsyncStorage.getItem("ClassList");
      classList = classList !== null ? JSON.parse(classList) : null;

      studentId = await AsyncStorage.getItem("StudentId");
      studentId =
        studentId !== null ? JSON.parse(studentId) : "입력된 학번 없음";

      const storedSemester = await AsyncStorage.getItem("Semester");
      setSemester(storedSemester);
    } catch (error) {
      ErrorHandler({ errorMessage: "출석정보 가져오던 중 에러 발생" });
    }

    if (classList !== null && studentId !== null) {
      try {
        attendanceDataOfClasses.push(
          await makeAttendanceData(classList, studentId)
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
      attendanceDataOfClasses.map((value, i) => {
        value.key = i;
      });
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

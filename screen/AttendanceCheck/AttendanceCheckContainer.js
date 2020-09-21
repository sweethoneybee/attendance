import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import * as FileSystem from "expo-file-system";
import XLSX from "xlsx";
import getEnvVars from "../../environment";

import AttendanceCheckPresenter from "./AttendanceCheckPresenter";

const { getApiUrl } = getEnvVars();

const makeAttendanceData = async (
  classList,
  studentId,
  attendanceDataOfClasses
) => {
  console.log("makeAttendanceData함수 호출");
  classList.forEach(async (className, classId) => {
    await FileSystem.downloadAsync(
      encodeURI(getApiUrl(studentId, classId)),
      FileSystem.documentDirectory + classId
    );

    const xlsFile = await FileSystem.readAsStringAsync(
      FileSystem.documentDirectory + classId
    );

    let absentCount = 0;
    const lectures = [];
    const lectureXls = [];
    const xls = XLSX.read(xlsFile, { type: "string" });
    xls.SheetNames.forEach((sheetName) => {
      lectureXls.push(XLSX.utils.sheet_to_json(xls.Sheets[sheetName]));
    });

    lectureXls.forEach((xlsPage) => {
      xlsPage.forEach((oneLectureObj) => {
        let lecture = { name: oneLectureObj["컨텐츠명"] };
        if (oneLectureObj["온라인출석상태(P/F)"] === "F") {
          lecture.check = false;
          absentCount += 1;
        } else {
          lecture.check = true;
        }
        lectures.push(lecture);
      });
    });

    let pass = absentCount === 0 ? true : false;
    attendanceDataOfClasses.push({
      className,
      lectures,
      absentCount,
      pass,
    });
  });
};

export default () => {
  const [refreshing, setRefreshing] = useState(false);
  const [classes, setClasses] = useState({
    loading: true,
    attendanceDataOfClasses: [],
  });

  const setRenderingData = async () => {
    let classList, studentId, attendanceDataOfClasses;
    attendanceDataOfClasses = [];
    try {
      classList = await AsyncStorage.getItem("ClassList");
      classList = classList !== null ? JSON.parse(classList) : null;

      studentId = await AsyncStorage.getItem("StudentId");
      studentId =
        studentId !== null ? JSON.parse(studentId) : "입력된 학번 없음";
    } catch (err) {
      console.error("ERR_ATTENDANCE_CHECK_ASYNC_STORAGE_GET_ITEM", err);
    }

    if (classList !== null && studentId !== null) {
      makeAttendanceData(classList, studentId, attendanceDataOfClasses);
      setClasses({
        loading: false,
        attendanceDataOfClasses,
      });
    } else {
      console.log("아무 강의도 등록되지 않았음");
      setClasses({
        loading: false,
        attendanceDataOfClasses,
      });
    }
  };

  useEffect(() => {
    setRenderingData();
  }, []);
  return (
    <AttendanceCheckPresenter refreshFn={makeAttendanceData} {...classes} />
  );
};

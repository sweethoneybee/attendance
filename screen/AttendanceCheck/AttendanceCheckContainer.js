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
  for (let classId in classList) {
    const className = classList[classId];
    console.log("수업이름: " + className);
    console.log("강의 아이디: " + classId);
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
        console.log("등록한 lecture name: " + lecture.name);
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
      classId,
      lectures,
      absentCount,
      pass,
    });
  }
};

export default ({ navigation, route }) => {
  const [classes, setClasses] = useState({
    loading: true,
    studentId: "",
  });
  const [attendanceDataOfClasses, setAttendanceDataOfClasses] = useState([]);

  const setRenderingData = async () => {
    let classList, studentId, attendanceDataOfClasses;
    attendanceDataOfClasses = Array();
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
      await makeAttendanceData(classList, studentId, attendanceDataOfClasses);
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
      console.log("아무 강의도 등록되지 않았음");
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
    />
  );
};

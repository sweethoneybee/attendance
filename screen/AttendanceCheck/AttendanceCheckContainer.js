import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import * as FileSystem from "expo-file-system";
import XLSX from "xlsx";
import getEnvVars from "../../environment";

import AttendanceCheckPresenter from "./AttendanceCheckPresenter";

const { getApiUrl } = getEnvVars();
export default () => {
  const [refreshing, setRefreshing] = useState(false);
  const [attendanceInfo, setAttendanceInfo] = useState({
    loading: true,
    renderingInfo = []
  });

  const getData = async () => {
    let classes, studentId, renderingInfo;
    renderingInfo = [];
    try {
      classes = await AsyncStorage.getItem("Classes");
      classes = classes !== null ? JSON.parse(classes) : null;

      studentId = await AsyncStorage.getItem("StudentId");
      studentId =
        studentId !== null ? JSON.parse(studentId) : "입력된 학번 없음";
    } catch (err) {
      console.error("ERR_ATTENDANCE_CHECK_ASYNC_STORAGE_GET_ITEM", err);
    }

    if (classes !== null) {
      getAttendanceData(classes, studentId, renderingInfo);
    }
    if (classList !== null) {
      const { className, absentCount, lectureCount } = classList;
      absentCount.forEach((absent) => {
        if (absent === 0) passed.push("😉");
        else passed.push("😱");
      });

      setAttendanceInfo({
        loading: false,
        renderingInfo
      });
    } else {
      console.log("아무 강의도 없음!");
      setAttendanceInfo({
        loading: false,
      });
    }
  };

  useEffect(() => {
    // getData();
  }, []);
  return <AttendanceCheckPresenter />;
};

const getAttendanceData = async (classes, studentId, renderingInfo) => {
  classes.forEach(async (classId, name) => {
    await FileSystem.downloadAsync(
      encodeURI(getApiUrl(studentId, id)),
      FileSystem.documentDirectory + "classId"
    );

    const xlsFile = await FileSystem.readAsStringAsync(
      FileSystem.documentDirectory + "classId"
    );

    let absentCount = 0;
    const lectures = [];
    const attendanceData = [];
    const xls = XLSX.read(xlsFile, { type: "string" });
    xls.SheetNames.forEach((sheetName) => {
      attendanceData.push(XLSX.utils.sheet_to_json(xls.Sheets[sheetName]));
    });

    attendanceData.forEach((page) => {
      page.forEach((lecture) => {
        let tmpObj = { name: lecture["컨텐츠명"] };
        if (lecture["온라인출석상태(P/F)"] === "F") {
          tmpObj.check = false;
          absentCount += 1;
        } else {
          tmpObj.check = true;
        }
        lectures.push(tmpObj);
      });
    });

    let pass = absentCount === 0 ? true : false;
    renderingInfo.push({
      className: name,
      lectures,
      absentCount,
      pass,
    });
  });
};

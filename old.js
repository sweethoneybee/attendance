import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import * as FileSystem from "expo-file-system";
import XLSX from "xlsx";
import getEnvVars from "./environment";

const { getApiUrl } = getEnvVars();

const userInput = (setFunc, placeHolder) => {
  return (
    <View>
      <TextInput
        placeholder={placeHolder}
        style={{ fontSize: 18, textAlign: "right" }}
        onSubmitEditing={({ nativeEvent: { text } }) => {
          if (text) {
            setFunc(text);
          }
        }}
        autoFocus
      />
    </View>
  );
};

const getData = async (requestUrl) => {
  await FileSystem.downloadAsync(
    encodeURI(requestUrl),
    FileSystem.documentDirectory + "hiasd"
  );

  const xlsFile = await FileSystem.readAsStringAsync(
    FileSystem.documentDirectory + "hiasd"
  );
  // console.log(xlsFile);

  let lectureCount = 0;
  let absentCount = 0;
  const attendanceData = [];
  const xls = XLSX.read(xlsFile, { type: "string" });
  xls.SheetNames.forEach((sheetName) => {
    attendanceData.push(XLSX.utils.sheet_to_json(xls.Sheets[sheetName]));
  });

  const absentData = [];
  attendanceData.forEach((page) => {
    lectureCount += page.length;
    absentData.push(
      page.filter((lecture) => {
        if (lecture["온라인출석상태(P/F)"] === "F") {
          absentCount += 1;
          return true;
        }
      })
    );
  });

  console.log("결석: " + absentCount);
  console.log("전체강의: " + lectureCount);
  console.log(
    `수업이름 >  [${lectureCount - absentCount} / ${lectureCount}] ` +
      (absentCount === 0 ? "😉" : "😱")
  );
  absentData.forEach((page) => {
    page.forEach((lecture) => {
      console.log(lecture);
    });
  });
  attendanceData.forEach((page) => {
    page.forEach((lecture) => {
      console.log(lecture);
    });
  });
};
export default function App() {
  // const studentId = "";
  // const haksuId = "";
  // const classId = "";
  const [studentId, setStudentId] = useState("2016047883");
  const [haksuId, setHaksuId] = useState("ITE2037");
  const [classId, setClassId] = useState("11821");
  const [canRequest, setCanRequest] = useState(false);

  if (
    studentId !== undefined &&
    haksuId !== undefined &&
    classId !== undefined &&
    canRequest === false
  ) {
    console.log("데이터 가져온다!");

    setCanRequest(true);
    getData(getApiUrl(studentId, haksuId + classId));
  }

  console.log("studentId: " + studentId);
  console.log("haksuId: " + haksuId);
  console.log("classId: " + classId);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      {userInput(setStudentId, "학번")}
      {userInput(setHaksuId, "학수번호")}
      {userInput(setClassId, "수업번호")}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

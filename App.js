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

  const excel = await FileSystem.readAsStringAsync(
    FileSystem.documentDirectory + "hiasd"
  );
  console.log(excel);
  const data = XLSX.read(excel, { type: "string" });

  data.SheetNames.forEach((sheetName) => {
    var rowObj = XLSX.utils.sheet_to_json(data.Sheets[sheetName]);
    console.log(JSON.stringify(rowObj));
  });
};
export default function App() {
  // const studentId = "";
  // const haksuId = "";
  // const classId = "";
  const [studentId, setStudentId] = useState();
  const [haksuId, setHaksuId] = useState();
  const [classId, setClassId] = useState();
  const [canRequest, setCanRequest] = useState(false);

  if (
    studentId !== undefined &&
    haksuId !== undefined &&
    classId !== undefined &&
    canRequest === false
  ) {
    console.log("데이터 가져온다!");

    setCanRequest(true);
    getData(getApiUrl(studentId, haksuId, classId));
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

import React, { useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import WriteStudentIdPresenter from "./WriteStudentIdPresenter";
import CreateTwoButtonAlert from "../../component/CreateTwoButtonAlert";
const createOneButtonAlert = () => {
  Alert.alert("알람이름", "알람 메시지", [
    // { text: "버튼텍스트", onPress: () => console.log("버튼 눌림") },
    {
      text: "확인",
      onPress: () => console.log("확인 눌림"),
    },
    {
      text: "취소",
      onPress: () => console.log("취소 눌림"),
      style: "destructive",
    },
  ]);
};

export default ({ navigation, route }) => {
  const [studentId, setStudentId] = useState("학번 10글자");
  const onPress = async () => {
    console.log("학번수정하기 버튼 눌림");
    // await AsyncStorage.setItem("StudentId", studentId);
    setStudentId("학번 10글자");

    // 학번 수정 완료 팝업 메시지 띄우기
    // CreateTwoButtonAlert({
    //   title: "타이뜰",
    //   message: "메세지/",
    //   confirmMessage: "확인",
    //   confirmOnPress: () => console.log("확ㅇ;ㅣㄴ"),
    //   denyMessage: "거절",
    //   denyOnPress: () => console.log("거절"),
    // });
    CreateTwoButtonAlert({});
    console.log("학번수정완료");
    navigation.navigate("Tabs");
  };
  return (
    <WriteStudentIdPresenter
      onChangeText={setStudentId}
      value={studentId}
      onPress={onPress}
    />
  );
};

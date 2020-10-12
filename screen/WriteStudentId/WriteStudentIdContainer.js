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

  const confirmOnPress = () => {
    // await AsyncStorage.setItem("StudentId", studentId);
    console.log("학번수정완료");
    setStudentId("학번 10글자");
    navigation.navigate("Tabs")
  }
  const denyOnPress = () => {
    // do nothing
  }
  const onPress = async () => {
    console.log("학번수정하기 버튼 눌림");
    CreateTwoButtonAlert({
        title: studentId, 
        message: "위의 학번으로 수정하시겠습니까?\n(수정 시 수업목록이 초기화됩니다)",
        confirmMessage: "좋아요", 
        denyMessage: "싫어요",
        confirmOnPress,
        denyOnPress
      });
  };
  return (
    <WriteStudentIdPresenter
      onChangeText={setStudentId}
      value={studentId}
      onPress={onPress}
    />
  );
};

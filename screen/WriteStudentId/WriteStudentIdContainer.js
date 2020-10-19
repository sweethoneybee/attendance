import React, { useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import WriteStudentIdPresenter from "./WriteStudentIdPresenter";
import CreateTwoButtonAlert from "../../component/CreateTwoButtonAlert";

export default ({ navigation, route }) => {
  const [studentId, setStudentId] = useState("10글자");

  const confirmOnPress = async () => {
    await AsyncStorage.setItem("StudentId", studentId);
    await AsyncStorage.setItem("ClassList", JSON.stringify({}));
    setStudentId("10글자");
    navigation.navigate("Tabs");
  };
  const denyOnPress = () => {
    // do nothing
  };
  const onPress = () => {
    console.log("학번수정하기 버튼 눌림");
    if (studentId.match(/\d{10}/) === null) {
      Alert.alert("잘못된 학번", "학번 양식에 맞게 적어주세요", [
        {
          text: "힝 알겠어요",
        },
      ]);
      return;
    }
    CreateTwoButtonAlert({
      title: studentId,
      message:
        "위의 학번으로 수정하시겠습니까?\n(수정 시 수업목록이 초기화됩니다)",
      confirmMessage: "좋아요",
      denyMessage: "싫어요",
      confirmOnPress,
      denyOnPress,
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

import React, { useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import WriteStudentIdPresenter from "./WriteStudentIdPresenter";
export default ({ navigation, route }) => {
  const [studentId, setStudentId] = useState("학번 10글자");
  const onPress = async () => {
    console.log("학번수정하기 버튼 눌림");
    await AsyncStorage.setItem("StudentId", studentId);
    setStudentId("학번 10글자");
    // 학번 수정 완료 팝업 메시지 띄우기
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

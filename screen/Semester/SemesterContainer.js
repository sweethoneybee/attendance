import React, { useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import SemesterPresenter from "./SemesterPresenter";
import CreateTwoButtonAlert from "../../component/CreateTwoButtonAlert";
import ErrorHandler from "../../util/ErrorHandler";

export default ({ navigation, route }) => {
  const [semester, setSemester] = useState("숫자 한 개(1 or 2)");

  const confirmOnPress = async () => {
    try {
      await AsyncStorage.setItem("Semester", semester);
      await AsyncStorage.setItem("ClassList", JSON.stringify({}));
    } catch (error) {
      ErrorHandler({
        errorMessage: "학기를 수정 중 에러가 발생했습니다",
        messageTail: "",
        confirmOnPress: () => {},
      });
    }
    setSemester("숫자 한 개(1 or 2)");
    navigation.navigate("Tabs");
  };
  const denyOnPress = () => {
    // do nothing
  };
  const onPress = () => {
    if (semester.match(/[12]/) === null || semester.length !== 1) {
      Alert.alert("잘못된 학기", "학기 양식에 맞게 적어주세요", [
        {
          text: "힝 알겠어요",
        },
      ]);
      return;
    }
    CreateTwoButtonAlert({
      title: semester + "학기",
      message:
        "위의 학기로 적용하시겠습니까?\n(수정 시 수업목록이 초기화됩니다)",
      confirmMessage: "좋아요",
      denyMessage: "싫어요",
      confirmOnPress,
      denyOnPress,
    });
  };
  return (
    <SemesterPresenter
      onChangeText={setSemester}
      value={semester}
      onPress={onPress}
    />
  );
};

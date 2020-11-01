import React from "react";
import SettingPresenter from "./SettingPresenter";
import AsyncStorage from "@react-native-community/async-storage";
import CreateTwoButtonAlert from "../../component/CreateTwoButtonAlert";
export default ({ navigation, route }) => {
  const confirmOnPress = async () => {
    await AsyncStorage.removeItem("StudentId");
    await AsyncStorage.removeItem("ClassList");
  };
  const denyOnPress = () => {};
  const resetClick = () => {
    CreateTwoButtonAlert({
      title: "학번, 수업목록 초기화",
      message: "초기화 하시겠습니까?",
      confirmMessage: "좋아요",
      denyMessage: "싫어요",
      confirmOnPress,
      denyOnPress,
    });
  };

  return <SettingPresenter navigation={navigation} resetClick={resetClick} />;
};

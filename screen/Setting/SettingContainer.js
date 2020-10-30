import React from "react";
import SettingPresenter from "./SettingPresenter";
import AsyncStorage from "@react-native-community/async-storage";
import RNRestart from "react-native-restart";

export default ({ navigation, route }) => {
  const resetClick = async () => {
    await AsyncStorage.removeItem("StudentId");
    await AsyncStorage.removeItem("ClassList");
    console.log("리스타트 클릭");
    // console.log(typeof RNRestart);
    RNRestart.Restart();
  };

  return <SettingPresenter navigation={navigation} resetClick={resetClick} />;
};

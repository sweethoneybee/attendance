import { StackActions } from "@react-navigation/native";
import React, { useState } from "react";

import ClassListPresenter from "./ClassListPresenter";
export default ({ navigation, route }) => {
  const onClick = () => {
    console.log("수업목록 버튼 클릭");
  };

  return <ClassListPresenter onClick={onClick} />;
};

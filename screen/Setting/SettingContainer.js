import React from "react";

import SettingPresenter from "./SettingPresenter";
export default ({ navigation, route }) => {
  console.log("이름: " + route.name);
  const onClick = () => {
    console.log("수업목록 버튼 클릭");
  };

  return <SettingPresenter onClick={onClick} />;
};

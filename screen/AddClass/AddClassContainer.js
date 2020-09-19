import React from "react";

import AddClassPresenter from "./AddClassPresenter";
export default ({ navigation, route }) => {
  console.log("이름: " + route.name);
  const onClick = () => {
    console.log("수업목록 버튼 클릭");
  };

  return <AddClassPresenter onClick={onClick} />;
};

import React, { useState } from "react";
import AddClassPresenter from "./AddClassPresenter";

export default ({ navigation, route }) => {
  const [haksuNumber, setHaksuNumber] = useState("학수번호");
  const [classNumber, setClassNumber] = useState("수업번호");
  const [className, setClassName] = useState("수업이름");
  console.log("이름: " + route.name);
  const onClick = () => {
    console.log("수업목록 버튼 클릭");
  };

  return (
    <AddClassPresenter
      onClick={onClick}
      haksuNumber={haksuNumber}
      setHaksuNumber={setHaksuNumber}
      classNumber={classNumber}
      setClassNumber={setClassNumber}
      className={className}
      setClassName={setClassName}
    />
  );
};

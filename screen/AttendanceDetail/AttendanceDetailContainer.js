import React from "react";
import AttendanceDetailPresenter from "./AttendanceDetailPresenter";

export default ({
  navigation,
  route: {
    params: { classInfo },
  },
}) => {
  return <AttendanceDetailPresenter {...classInfo} />;
};

import React from "react";
import AttendancePresenter from "./AttendancePresenter";

export default ({
  navigation,
  route: {
    params: { classInfo },
  },
}) => {
  return <AttendancePresenter classInfo={classInfo} />;
};

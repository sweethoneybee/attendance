import React, { useState } from "react";

import WriteStudentIdPresenter from "./WriteStudentIdPresenter";
export default ({ navigation, route }) => {
  const [studentId, setStudentId] = useState("학번초기값");

  return (
    <WriteStudentIdPresenter onChangeText={setStudentId} value={studentId} />
  );
};

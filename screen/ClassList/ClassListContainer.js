import React, { useState } from "react";

import ClassListPresenter from "./ClassListPresenter";
export default () => {
  const [refreshing, setRefreshing] = useState(false);
  const [classes, setClasses] = useState({
    loading: true,
    name: [],
  });
  return <ClassListPresenter />;
};

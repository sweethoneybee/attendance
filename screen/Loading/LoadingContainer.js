import React from "react";
import LoadingPresenter from "./LoadingPresenter";

export default ({ startAsync, onFinish, onError }) => {
  
  return <LoadingPresenter children={children} />;
};

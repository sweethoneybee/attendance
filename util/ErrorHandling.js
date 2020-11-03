import Restart from "./Restart";
import OneButtonAlert from "../component/CreateOneButtonAlert";

export default ({
  title = "에러",
  errorMessage = "알 수 없는 에러 발생 앱을 재시작합니다",
}) => {
  const confirmOnpress = () => {
    Restart();
  };
  OneButtonAlert({ title, message: errorMessage, confirmOnpress });
};

import Restart from "./Restart";
import OneButtonAlert from "../component/CreateOneButtonAlert";

export default ({
  title = "에러",
  errorMessage = "알 수 없는 에러",
  messageTail = "\n 앱을 재시작합니다",
  confirmOnPress = () => {
    Restart();
  },
}) => {
  OneButtonAlert({
    title,
    message: errorMessage + messageTail,
    confirmOnPress,
  });
};

import { Alert } from "react-native";

export default ({
  title = "알람타이틀",
  message = "알람 메시지",
  confirmMessage = "확인",
  confirmOnPress = () => {},
  denyMessage = "취소",
  denyOnPress = () => {},
}) => {
  console.log("알람버튼");
  Alert.alert(
    title,
    message,
    [
      {
        text: confirmMessage,
        onPress: confirmOnPress,
      },
      {
        text: denyMessage,
        onPress: denyOnPress,
        style: "destructive",
      },
    ],
    { cancelable: false }
  );
};

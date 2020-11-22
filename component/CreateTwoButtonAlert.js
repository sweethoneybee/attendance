import { Alert } from "react-native";

export default ({
  title = "알람타이틀",
  message = "알람 메시지",
  confirmMessage = "확인",
  confirmOnPress = () => {},
  denyMessage = "취소",
  denyOnPress = () => {},
}) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: denyMessage,
        onPress: denyOnPress,
        style: "destructive",
      },
      {
        text: confirmMessage,
        onPress: confirmOnPress,
      },
    ],
    { cancelable: false }
  );
};

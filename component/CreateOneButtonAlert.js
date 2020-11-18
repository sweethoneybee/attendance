import { Alert } from "react-native";

export default ({
  title = "알람타이틀",
  message = "알람 메시지",
  confirmMessage = "확인",
  confirmOnPress = () => {},
}) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: confirmMessage,
        onPress: confirmOnPress,
      },
    ],
    { cancelable: false }
  );
};

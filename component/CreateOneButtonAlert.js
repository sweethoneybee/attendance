import { Alert } from "react-native";

export default ({
  title = "알람타이틀",
  message = "알람 메시지",
  confirmMessage = "확인",
  confirmOnPress = () => console.log("확인 눌림"),
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
    ],
    { cancelable: false }
  );
};

import { Alert } from "react-native";

export default ({
  title = "알람타이틀",
  message = "알람 메시지",
  confirmMessage = "확인",
  confirmOnPress = () => console.log("확인 눌림"),
  denyMessage = "취소",
  denyOnPress = () => console.log("취소 눌림"),
}) => {
  console.log("알람버튼");
  Alert.alert(
    title,
    message,
    [
      // { text: "버튼텍스트", onPress: () => console.log("버튼 눌림") },
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

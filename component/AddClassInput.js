import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default ({
  title,
  onChangeText,
  value,
  maxLength = 20,
  inputStyle = styles.input,
  feedBack = "잘못된 형식을 입력했습니다",
  isValidText,
}) => {
  const [changingFeedBack, setChangingFeedBack] = useState(feedBack);
  const [changeFontColor, setChangeFontColor] = useState(false);
  return (
  <View style={styles.mainContainer}>
    <Text style={styles.inputTitle}>{title}</Text>
    <TextInput
      style={inputStyle}
      onChangeText={(text) => {
        console.log("여기서 텍스트:"+ text);
        onChangeText(text);
        if (isValidText(text) === true) {
          setChangingFeedBack("좋아요!");
          setChangeFontColor(true);
        }
        else {
          setChangingFeedBack(feedBack);
          setChangeFontColor(false);
        }
        console.log(text);
      }}
      placeholder={value}
      autoCorrect={false}
      maxLength={maxLength}
      autoCapitalize={"characters"}
    />
    <Text style={changeFontColor ? {...styles.feedBack, color: "#0984e3"} : styles.feedBack }>{changingFeedBack}</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    // width: "100%",
    // height: "100%",
    marginBottom: "5%"
  },
  inputTitle: {
    fontSize: 24,
    fontFamily: Platform.OS === "ios" ? "GodoM_otf" : "GodoM_ttf",
    paddingLeft: 5,
    paddingBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 1.5,
    padding: 10,
    borderRadius: 10,
    fontFamily: Platform.OS === "ios" ? "GodoM_otf" : "GodoM_ttf",
  },
  feedBack: {
    fontSize: 12,
    paddingTop: "1%",
    paddingLeft: "3%",
    color: "red",
    opacity:0.9,
    fontFamily: Platform.OS === "ios" ? "Maple_otf" : "Maple_ttf",
  }
});

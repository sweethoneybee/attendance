import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default ({
  title,
  onChangeText,
  value,
  maxLength = 20,
  inputStyle,
  feedBack = "잘못된 형식을 입력했습니다",
  feedBackStyle,
  isValidText,
  keyboardType,
}) => {
  const [changingFeedBack, setChangingFeedBack] = useState(feedBack);
  const [changeFontColor, setChangeFontColor] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.inputTitle}>{title}</Text>
      <TextInput
        style={{ ...styles.input, ...inputStyle }}
        onChangeText={(text) => {
          onChangeText(text);
          if (isValidText(text) === true) {
            setChangingFeedBack("좋아요!");
            setChangeFontColor(true);
          } else {
            setChangingFeedBack(feedBack);
            setChangeFontColor(false);
          }
          // console.log(text);
        }}
        placeholder={value}
        autoCorrect={false}
        maxLength={maxLength}
        autoCapitalize={"characters"}
        keyboardType={keyboardType}
      />
      <Text
        style={
          changeFontColor
            ? { ...styles.feedBack, ...feedBackStyle, color: "#0984e3" }
            : { ...styles.feedBack, ...feedBackStyle }
        }
      >
        {changingFeedBack}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // width: "100%",
    height: "23%",
    // marginBottom: "5%",
    // backgroundColor: "blue"
  },
  inputTitle: {
    fontSize: 20,
    fontFamily: Platform.OS === "ios" ? "GodoM_otf" : "GodoM_ttf",
    paddingLeft: "4%",
  },
  input: {
    height: "120%",
    borderBottomWidth: 1.2,
    paddingLeft: 10,
    borderRadius: 10,
    fontFamily: Platform.OS === "ios" ? "GodoM_otf" : "GodoM_ttf",
    fontSize: 20,
    marginTop: "2%",
    // backgroundColor: "red"
  },
  feedBack: {
    fontSize: 10,
    paddingTop: "1%",
    paddingLeft: "3%",
    color: "red",
    opacity: 0.9,
    fontFamily: Platform.OS === "ios" ? "Maple_otf" : "Maple_ttf",
  },
});

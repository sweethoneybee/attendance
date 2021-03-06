import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import BasicButton from "../../component/BasicButton";
import Input from "../../component/AddClassInput";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

export default ({ onChangeText, value, onPress }) => {
  return (
    <View style={styles.main}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>학번</Text>
        <Input
          title={""}
          onChangeText={onChangeText}
          value={value}
          maxLength={10}
          feedBack={'"숫자 10자"로 적어주세요'}
          isValidText={(text) => (text.match(/\d{10}/) !== null ? true : false)}
          inputStyle={styles.input}
          feedBackStyle={{ marginLeft: "5%" }}
          keyboardType={"number-pad"}
        />
      </View>
      <BasicButton style={styles.button} onPress={onPress}>
        <View
          style={{
            borderBottomWidth: 2,
            borderColor: "black",
          }}
        >
          <Text style={styles.buttonText}>{"적용하기"}</Text>
        </View>
      </BasicButton>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: HEIGHT,
    width: WIDTH,
  },
  title: {
    fontFamily: Platform.OS === "ios" ? "GodoM_otf" : "GodoM_ttf",
    fontSize: 38,
    marginLeft: "8%",
    marginTop: "20%",
  },
  button: {
    alignItems: "center",
    borderRadius: 10,
    width: "25%",
    height: "10%",
    paddingTop: "2%",
    marginLeft: "37%",
    padding: 0,
  },
  buttonText: {
    fontFamily: Platform.OS === "ios" ? "GodoM_otf" : "GodoM_ttf",
    fontSize: 20,
    borderBottomWidth: 2,
  },
  inputContainer: {
    width: "100%",
    height: "30%",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 0.7,
    width: "80%",
    height: "40%",
    marginLeft: "5%",
    fontSize: 20,
  },
});

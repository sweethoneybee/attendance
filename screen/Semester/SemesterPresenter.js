import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import BasicButton from "../../component/BasicButton";
import Input from "../../component/AddClassInput";

export default ({ onChangeText, value, onPress }) => {
  return (
    <View style={styles.main}>
      <View style={{ height: "25%" }} />
      <Text style={styles.title}>현재 학기</Text>
      <Input
        title={""}
        onChangeText={onChangeText}
        value={value}
        maxLength={1}
        feedBack={"숫자 한 개만 적어주세요(1 or 2)"}
        isValidText={(text) =>
          text.match(/[12]/) !== null && text.length === 1 ? true : false
        }
        inputStyle={styles.input}
        feedBackStyle={{ marginLeft: "5%" }}
        keyboardType={"number-pad"}
      />
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
    height: "100%",
    width: "100%",
  },
  title: {
    fontFamily: Platform.OS === "ios" ? "GodoM_otf" : "GodoM_ttf",
    fontSize: 38,
    marginLeft: "8%",
  },
  button: {
    alignItems: "center",
    // backgroundColor: "#3498db",
    borderRadius: 10,
    width: "25%",
    height: "5%",
    paddingTop: "2%",
    marginLeft: "37%",
    marginTop: "2%",
    padding: 0,
  },
  buttonText: {
    fontFamily: Platform.OS === "ios" ? "GodoM_otf" : "GodoM_ttf",
    fontSize: 20,
    borderBottomWidth: 27,
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 0.7,
    width: "80%",
    height: 40,
    // marginTop: "5%",
    // marginBottom: "2%",
    marginLeft: "5%",
    fontSize: 20,
  },
});

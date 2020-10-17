import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import BasicButton from "../../component/BasicButton";
import Input from "../../component/AddClassInput";

export default ({ onChangeText, value, onPress }) => {
  return (
    <View style={styles.main}>
      <View style={{ height: "25%" }} />
      <Text style={styles.title}>학번</Text>
      {/* <TextInput
        style={styles.input}
        onChangeText={(text) => {
          onChangeText(text);
          console.log(text);
        }}
        placeholder={value}
        autoCorrect={false}
        maxLength={10}
      /> */}
      <Input
          title={""}
          onChangeText={onChangeText}
          value={value}
          maxLength={10}
          feedBack={"\"숫자 5자\"로 적어주세요"}
          isValidText={
            (text) => (text.match(/\d{5}/) !== null ? true : false)
          }
          inputStyle={styles.input}
          /*
           **  regex
           **  \d{5}
           */
        />
      <BasicButton style={styles.button} onPress={onPress}>
        <View style={{
          borderBottomWidth: 2,
          borderColor: "black"
        }}>
          <Text style={styles.buttonText}>{"수정하기"}</Text>
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
    marginLeft: "5%",
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
    padding: 0
  },
  buttonText: {
    fontFamily: Platform.OS === "ios" ? "GodoM_otf" : "GodoM_ttf",
    fontSize: 20,
    borderBottomWidth: 27
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

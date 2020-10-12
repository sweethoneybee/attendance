import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import BasicButton from "../../component/BasicButton";

export default ({ onChangeText, value, onPress }) => {
  return (
    <View style={styles.main}>
      <View style={{ height: "25%" }} />
      <Text style={styles.title}>학번</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          onChangeText(text);
          console.log(text);
        }}
        placeholder={value}
        autoCorrect={false}
        maxLength={10}
      />
      <BasicButton buttonStyle={styles.button} onPress={onPress}>
        <Text>{"완료"}</Text>
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
    backgroundColor: "#3498db",
    borderRadius: 10,
    width: "25%",
    height: "5%",
    paddingTop: "2%",
    marginLeft: "37%",
    marginTop: "2%",
  },
  input: {
    borderColor: "black",
    borderBottomWidth: 0.7,
    width: "80%",
    height: 40,
    marginTop: "5%",
    marginBottom: "2%",
    marginLeft: "5%",
    fontSize: 30,
  },
});

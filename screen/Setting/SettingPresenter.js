import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import BasicButton from "../../component/BasicButton";

export default ({ navigation, resetClick }) => {
  return (
    <ScrollView style={{ width: "100%", height: "100%" }}>
      <Text style={styles.buttonTitle}>수정</Text>
      <BasicButton
        style={styles.button}
        onPress={() => {
          console.log("임시 온프레스");
        }}
      >
        <Text style={styles.buttonText}>{"현재 학기"}</Text>
      </BasicButton>
      <BasicButton
        style={styles.button}
        onPress={() => {
          navigation.navigate("WriteStudentId");
        }}
      >
        <Text style={styles.buttonText}>{"나의 학번"}</Text>
      </BasicButton>
      <Text style={styles.buttonTitle}>개발자</Text>
      <BasicButton
        style={styles.button}
        onPress={() => {
          navigation.navigate("Github");
        }}
      >
        <Text style={styles.buttonText}>{"깃허브"}</Text>
      </BasicButton>
      <BasicButton
        style={styles.button}
        onPress={() => {
          navigation.navigate("Explanation");
        }}
      >
        <Text style={styles.buttonText}>{"정보 가져오는 방법"}</Text>
      </BasicButton>
      <Text style={styles.buttonTitle}>나가기</Text>
      <BasicButton style={styles.button} onPress={resetClick}>
        <Text style={{ ...styles.buttonText, color: "red" }}>{"리셋"}</Text>
      </BasicButton>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: { width: "100%", height: "100%" },
  button: {
    alignItems: "flex-start",
    padding: 0,
    backgroundColor: "white",
    height: "15%",
    marginTop: "0.4%",
    paddingLeft: "5%",
  },
  buttonTitle: {
    color: "grey",
    marginTop: "5%",
    marginBottom: "1%",
    // marginLeft: "2%",
    paddingLeft: "5%",
    fontSize: 13,
  },
  buttonText: {
    fontFamily: Platform.OS === "ios" ? "GodoM_otf" : "GodoM_ttf",
    fontSize: 18,
    paddingTop: "3%",
  },
});

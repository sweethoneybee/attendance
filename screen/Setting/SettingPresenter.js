import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import BasicButton from "../../component/BasicButton";

export default ({ onClick }) => {
  return (
    <ScrollView style={{ width: "100%", height: "100%" }}>
      <Text style={styles.buttonTitle}>수정</Text>
      <BasicButton
        buttonStyle={styles.button}
        onPress={() => {
          console.log("임시 온프레스");
        }}
      >
        <Text style={styles.buttonText}>{"현재 학기"}</Text>
      </BasicButton>
      <BasicButton
        buttonStyle={styles.button}
        onPress={() => {
          console.log("임시 온프레스");
        }}
      >
        <Text style={styles.buttonText}>{"나의 학번"}</Text>
      </BasicButton>
      <Text style={styles.buttonTitle}>개발자</Text>
      <BasicButton
        buttonStyle={styles.button}
        onPress={() => {
          console.log("임시 온프레스");
        }}
      >
        <Text style={styles.buttonText}>{"깃헙"}</Text>
      </BasicButton>
      <BasicButton
        buttonStyle={styles.button}
        onPress={() => {
          console.log("임시 온프레스");
        }}
      >
        <Text style={styles.buttonText}>{"개인정보"}</Text>
      </BasicButton>
      <Text style={styles.buttonTitle}>나가기</Text>
      <BasicButton
        buttonStyle={styles.button}
        onPress={() => {
          console.log("임시 온프레스");
        }}
      >
        <Text style={{ ...styles.buttonText, color: "red" }}>{"리셋"}</Text>
      </BasicButton>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: { width: "100%", height: "100%" },
  button: {
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

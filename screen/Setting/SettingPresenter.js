import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import BasicButton from "../../component/BasicButton";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

export default ({ navigation, resetClick }) => {
  return (
    <View style={styles.main}>
      <Text style={styles.buttonTitle}>수정</Text>
      <BasicButton
        style={styles.button}
        onPress={() => {
          navigation.navigate("Semester");
        }}
      >
        <Text style={styles.buttonText}>{"학기"}</Text>
      </BasicButton>
      <BasicButton
        style={styles.button}
        onPress={() => {
          navigation.navigate("WriteStudentId");
        }}
      >
        <Text style={styles.buttonText}>{"학번"}</Text>
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
        <Text style={styles.buttonText}>{"사용법 및 FAQ"}</Text>
      </BasicButton>
      <Text style={styles.buttonTitle}>나가기</Text>
      <BasicButton style={styles.button} onPress={resetClick}>
        <Text style={{ ...styles.buttonText, color: "red" }}>{"리셋"}</Text>
      </BasicButton>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: WIDTH,
    height: HEIGHT,
  },
  button: {
    alignItems: "flex-start",
    padding: 0,
    backgroundColor: "white",
    height: "5.5%",
    marginTop: "0.4%",
    paddingLeft: "5%",
  },
  buttonTitle: {
    color: "grey",
    marginTop: "5%",
    marginBottom: "1%",
    paddingLeft: "5%",
    fontSize: 13,
  },
  buttonText: {
    fontFamily: Platform.OS === "ios" ? "GodoM_otf" : "GodoM_ttf",
    fontSize: 18,
    paddingTop: "3%",
  },
});

import React from "react";
import { Text, StyleSheet } from "react-native";
import ScreenCotainer from "../../component/ScreenContainer";

export default ({}) => (
  <ScreenCotainer title={""}>
    <Text style={styles.content}>1. 수업번호, 학수번호, 학번을 받아서</Text>
    <Text style={styles.content}>2. 출석정보를 가져와서</Text>
    <Text style={styles.content}>3. 보여줍니다</Text>
  </ScreenCotainer>
);

const styles = StyleSheet.create({
  content: {
    fontFamily: Platform.OS === "ios" ? "GodoM_otf" : "GodoM_ttf",
    fontSize: 14,
    padding: "5%",
  },
});

import React from "react";
import { Text, StyleSheet } from "react-native";
import ScreenCotainer from "../../component/ScreenContainer";

export default ({}) => (
  <ScreenCotainer title={""}>
    <Text style={styles.content}>1. 수업번호와 학수번호로 수업을 특정짓고</Text>
    <Text style={styles.content}>2. 학번으로 학생을 특정짓고</Text>
    <Text style={styles.content}>
      3. 출석정보를 블랙보드에서 액셀파일로 다운 받아
    </Text>
    <Text style={styles.content}>4. 여기에서 보여줍니다</Text>
  </ScreenCotainer>
);

const styles = StyleSheet.create({
  content: {
    fontFamily: Platform.OS === "ios" ? "GodoM_otf" : "GodoM_ttf",
    fontSize: 14,
    padding: "5%",
  },
});

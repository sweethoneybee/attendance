import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";
import ScreenCotainer from "../../component/ScreenContainer";
import * as WebBrower from "expo-web-browser";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

export default ({ githubLink }) => (
  <ScreenCotainer style={styles.mainContainer} title={"개발 소스코드 확인"}>
    <Text style={styles.content}>꿀벌의달콤한여행</Text>
    <Text
      onPress={() => {
        WebBrower.openBrowserAsync(githubLink);
      }}
      style={styles.link}
    >
      https://github.com/sweethoneybee/attendance
    </Text>
    <Text style={{ ...styles.link, fontSize: 12 }}>(클릭해서 들어가기)</Text>
  </ScreenCotainer>
);

const styles = StyleSheet.create({
  mainContainer: {
    width: WIDTH,
    height: HEIGHT,
  },
  content: {
    fontFamily: Platform.OS === "ios" ? "GodoM_otf" : "GodoM_ttf",
    fontSize: 22,
    textAlign: "center",
    marginTop: "5%",
  },
  link: {
    fontFamily: Platform.OS === "ios" ? "GodoM_otf" : "GodoM_ttf",
    fontSize: 16,
    textAlign: "center",
    marginTop: "2%",
  },
});

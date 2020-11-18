import React from "react";
import { StyleSheet, View, Text, ScrollView, Dimensions } from "react-native";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

export default ({ className, classId, lectures, absentCount, pass }) => {
  return (
    <View stlye={styles.main}>
      <ScrollView style={{}}>
        <View style={{ ...styles.titleContainer }}>
          <Text style={styles.title}>[{className}]</Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                ...styles.subTitle,
                color: "blue",
                paddingLeft: "1.5%",
              }}
            >
              {lectures.length}
            </Text>
            <Text style={{ ...styles.subTitle }}>{" 개 중 "}</Text>
            <Text style={{ ...styles.subTitle, color: "red" }}>
              {lectures.length - absentCount}
            </Text>
            <Text style={{ ...styles.subTitle }}>{" 개 수강 완료"}</Text>
          </View>
        </View>
        {lectures
          .slice(0)
          .reverse()
          .map((lecture) => {
            return (
              <View
                style={
                  lecture.check === true
                    ? { ...styles.infoContainer }
                    : { ...styles.infoContainer, backgroundColor: "#ff7979" }
                }
              >
                <Text style={styles.info}>
                  {lecture.name.length > 50
                    ? lecture.name.slice(0, 50) + "\n" + lecture.name.slice(50)
                    : lecture.name}
                  {/* {lecture.name} */}
                </Text>
                <Text style={styles.info}>
                  {lecture.passedTime !== undefined
                    ? lecture.contentTime +
                      " 중 " +
                      lecture.passedTime +
                      " 만큼 수강"
                    : "미수강. " + lecture.contentTime + " 만큼 수강해야 함"}
                </Text>
                <Text
                  style={{
                    ...styles.info,
                    ...styles.isPassed,
                  }}
                >
                  출석인정: {lecture.check === true ? "🔆" : "❌"}
                </Text>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: WIDTH,
    height: HEIGHT,
  },
  titleContainer: {
    margin: "4%",
  },
  title: {
    fontFamily: Platform.OS === "ios" ? "Maple_otf" : "Maple_ttf",
    fontSize: 19,
    marginBottom: "2%",
  },
  subTitle: {
    fontFamily: Platform.OS === "ios" ? "Maple_otf" : "Maple_ttf",
    fontSize: 14,
  },
  infoContainer: {
    marginTop: "0%",
    borderColor: "white",
    borderTopWidth: 1,
    backgroundColor: "#6ab04c",
    opacity: 0.95,
    padding: "2%",
  },
  info: {
    fontFamily: Platform.OS === "ios" ? "Maple_otf" : "Maple_ttf",
    fontSize: 12,
    fontWeight: "900",
    color: "white",
    // opacity: 0.9,
  },
  isPassed: {
    textAlign: "right",
    fontSize: 15,
    position: "absolute",
    top: "70%",
    left: "80%",
  },
});

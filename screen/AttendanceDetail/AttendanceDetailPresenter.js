import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import ScrollContainer from "../../component/ScrollContainer";
export default ({ className, classId, lectures, absentCount, pass }) => {
  const presentLecture = (lecture) => {
    return (
      <Text>
        {lecture["컨텐츠명"]} {lecture["온라인출석상태"]}
      </Text>
    );
  };

  return (
    <View stlye={styles.main}>
      <ScrollView style={{}}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {className} ({lectures.length - absentCount} / {lectures.length})
          </Text>
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

{
  // <View>
  //     <Text>
  //       여기는 상세 출석페이지 입니다. 수업 이름은 {className} 입니다. 총
  //       강의수는 {lectures.length}이며, 아직 듣지 않은 강의 수는 {absentCount}
  //       입니다.
  //     </Text>
  //   </View>
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
  },
  titleContainer: {
    margin: "4%",
  },
  title: {
    fontFamily: Platform.OS === "ios" ? "Maple_otf" : "Maple_ttf",
    fontSize: 20,
    textAlign: "center",
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

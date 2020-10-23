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
        <Text style={styles.title}>
          {className} ({lectures.length - absentCount} / {lectures.length})
        </Text>
        {lectures.map((lecture) => {
          return (
            <View style={styles.infoContainer}>
              <Text style={styles.info}>{lecture.name}</Text>
              <Text>동영상길이: {lecture.contentTime}</Text>
              <Text>수강한 시간: {lecture.passedTime}</Text>
              <Text>출석인정: {lecture.check === true ? "O" : "X"}</Text>
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
  title: {
    fontFamily: Platform.OS === "ios" ? "Maple_otf" : "Maple_ttf",
    fontSize: 28,
    textAlign: "center",
  },
  infoContainer: {
    marginTop: "1%",
    borderTopWidth: 1,
  },
  info: {
    fontFamily: Platform.OS === "ios" ? "Maple_otf" : "Maple_ttf",
  },
});

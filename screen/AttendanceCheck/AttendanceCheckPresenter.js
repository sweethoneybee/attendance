import React, { useState, useEffect } from "react";
import { Text, Platform, StyleSheet } from "react-native";
import ScrollContainer from "../../component/ScrollContainer";
import ClassContainer from "../../component/ClassContainer";
import AddClass from "../../component/AddClass";

export default ({
  navigation,
  route,
  refreshFn,
  studentId = "로딩중",
  loading,
  attendanceDataOfClasses,
}) => {
  console.log("Presenter 시작");
  console.log(JSON.stringify(refreshFn));
  console.log(loading);

  return (
    <>
      <ScrollContainer refreshFn={refreshFn} loading={loading}>
        <Text style={styles.title}>{studentId}</Text>
        {attendanceDataOfClasses.length === 0 ? (
          <Text>텅텅 빔 </Text>
        ) : (
          attendanceDataOfClasses.map((classData) => (
            <ClassContainer key={classData.className} {...classData} />
          ))
        )}
      </ScrollContainer>
      <AddClass
        buttonText={"+"}
        onPress={() => {
          console.log("야호");
          navigation.navigate("AddClass");
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: Platform.OS === "ios" ? "Maple_otf" : "Maple_ttf",
    fontSize: 26,
    textAlign: "center",
  },
});
// return (
//   <ScrollView
//     style={{
//       // marginTop: 0,
//       marginBottom: 40,
//     }}
//     contentContainerStyle={{ padding: 10 }}
//     showsVerticalScrollIndicator={true}
//   >
//     <Text
//       style={{
//         textAlign: "center",
//         fontFamily: "Maple_ttf",
//         fontSize: 24,
//       }}
//     >
//       출석확인 😱
//     </Text>
//     <Text>하이</Text>
//   </ScrollView>
// );

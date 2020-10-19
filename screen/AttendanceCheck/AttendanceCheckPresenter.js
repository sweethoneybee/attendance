import React, { useState, useEffect } from "react";
import { Text, Platform, StyleSheet } from "react-native";
import ScrollContainer from "../../component/ScrollContainer";
import ClassContainer from "../../component/ClassContainer";
import AddClassButton from "../../component/AddClassButton";
import { SwipeListView } from "react-native-swipe-list-view";

export default ({
  navigation,
  route,
  refreshFn,
  studentId = "로딩중",
  loading,
  attendanceDataOfClasses,
}) => {
  console.log("AttendanceCheck Presenter 시작");

  return (
    <>
      <ScrollContainer refreshFn={refreshFn} loading={loading}>
        <Text style={styles.title}>{studentId}</Text>
        {attendanceDataOfClasses.length === 0 ? (
          <Text>아직 수업이 등록되지 않았습니다 </Text>
        ) : (
          attendanceDataOfClasses.map((classData) => (
            <ClassContainer key={classData.className} {...classData} />
          ))
        )}
      </ScrollContainer>
      <AddClassButton
        buttonText={"+"}
        onPress={() => {
          navigation.navigate("AddClass", { refreshFn });
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

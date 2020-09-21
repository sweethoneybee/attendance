import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  Platform,
} from "react-native";
import ScrollContainer from "../../component/ScrollContainer";
import ClassContainer from "../../component/ClassContainer";

export default ({
  refreshFn,
  studentId = "로딩중",
  loading,
  attendanceDataOfClasses,
}) => {
  console.log("Presenter 시작");
  console.log(JSON.stringify(refreshFn));
  console.log(loading);

  return (
    <ScrollContainer refreshFn={refreshFn} loading={loading}>
      <>
        <Text
          style={{
            fontFamily: Platform.OS === "ios" ? "Maple_otf" : "Maple_ttf",
            fontSize: 26,
            textAlign: "center",
          }}
        >
          {studentId}
        </Text>
        {attendanceDataOfClasses.length === 0 ? (
          <Text>텅텅 빔 </Text>
        ) : (
          attendanceDataOfClasses.map((classData) => (
            <ClassContainer key={classData.className} {...classData} />
          ))
        )}
      </>
    </ScrollContainer>
  );
};

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

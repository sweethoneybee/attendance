import React from "react";
import { View, Text } from "react-native";

export default ({ classInfo }) => {
  return (
    <View>
      <Text>
        여기는 상세 출석페이지 입니다. 수업 이름은 {classInfo.className} 입니다.
        총 강의수는 {classInfo.lectures.length}이며, 아직 듣지 않은 강의 수는{" "}
        {classInfo.absentCount}입니다.
      </Text>
    </View>
  );
};

import React from "react";
import { View, Text, ScrollView } from "react-native";

export default ({ refreshFn, loading, attendanceDataOfClasses }) => {
  return (
    <View>
      <View style={{ height: "100%", backgroundColor: "white" }}>
        <ScrollView
          style={{
            // marginTop: 0,
            marginBottom: 40,
          }}
          contentContainerStyle={{ padding: 10 }}
          showsVerticalScrollIndicator={true}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Maple_ttf",
              fontSize: 24,
            }}
          >
            출석확인 😱
          </Text>
          <Text>하이</Text>
        </ScrollView>
      </View>
    </View>
  );
};

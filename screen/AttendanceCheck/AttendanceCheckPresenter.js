import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

export default ({ refreshFn, loading, attendanceDataOfClasses }) => {
  console.log("Presenter 시작");
  console.log(JSON.stringify(refreshFn));
  refreshFn();
  console.log(loading);
  console.log(attendanceDataOfClasses);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };
  return (
    <View>
      <View style={{ height: "100%", backgroundColor: "white" }}>
        <ScrollView
          refreshControl={
            <RefreshControl
              onRefresh={onRefresh}
              refreshing={refreshing}
              tintColor="white"
            />
          }
          style={{
            // marginTop: 0,
            marginBottom: 40,
          }}
          contentContainerStyle={{ padding: 10 }}
          showsVerticalScrollIndicator={true}
        >
          {loading ? (
            <ActivityIndicator color="white" size="small" />
          ) : (
            <Text> 하이요</Text>
          )}
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

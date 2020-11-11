import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Dimensions,
} from "react-native";
import ScrollContainer from "../../component/ScrollContainer";
import AddClassButton from "../../component/AddClassButton";
import { SwipeListView } from "react-native-swipe-list-view";
import AsyncStorage from "@react-native-community/async-storage";
import ErrorHandler from "../../util/ErrorHandler";
import CreateTwoButtonAlert from "../../component/CreateTwoButtonAlert";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

export default ({
  navigation,
  route,
  refreshFn,
  studentId = "로딩중",
  loading,
  attendanceDataOfClasses,
  setAttendanceDataOfClasses,
  semester,
}) => {
  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = async (rowMap, rowKey) => {
    let classId;
    closeRow(rowMap, rowKey);
    const newData = [...attendanceDataOfClasses];
    const prevIndex = attendanceDataOfClasses.findIndex((item) => {
      item.key === rowKey;
      classId = item.classId;
    });
    newData.splice(prevIndex, 1);

    let classList;
    try {
      classList = await AsyncStorage.getItem("ClassList");
      classList = classList !== null ? JSON.parse(classList) : {};
      delete classList[classId];
      await AsyncStorage.setItem("ClassList", JSON.stringify(classList));
    } catch (error) {
      ErrorHandler({
        errorMessage: "삭제 실패",
        messageTail: "다시 시도해보세요",
        confirmOnPress: () => {},
      });
    }

    setAttendanceDataOfClasses(newData);
  };

  const onRowDidOpen = (rowKey) => {};

  const renderItem = (data) => (
    <TouchableHighlight
      onPress={() => {
        navigation.navigate("AttendanceDetail", { classInfo: data.item });
      }}
      style={styles.rowFront}
      underlayColor={"#dfe4ea"}
    >
      <View style={{ paddingVertical: "1.5%" }}>
        <Text style={styles.lectureTitle}>[{data.item.className}]</Text>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              ...styles.lectureData,
              color: "blue",
              paddingLeft: "6%",
            }}
          >
            {data.item.lectures.length}
          </Text>
          <Text style={{ ...styles.lectureData }}>{" 개 중 "}</Text>
          <Text style={{ ...styles.lectureData, color: "red" }}>
            {data.item.lectures.length - data.item.absentCount}
          </Text>
          <Text style={{ ...styles.lectureData }}>{" 개 수강 완료"}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <Text>😉</Text>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => {
          const confirmOnPress = () => deleteRow(rowMap, data.item.key);
          CreateTwoButtonAlert({
            title: "수업을 삭제합니다\n",
            message: `[${data.item.className}]`,
            confirmMessage: "좋아요",
            confirmOnPress,
            denyMessage: "싫어요",
          });
        }}
      >
        <Text style={styles.backTextWhite}>삭제</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <ScrollContainer refreshFn={refreshFn} loading={loading}>
        {studentId === "" ? (
          <Text style={styles.studentId}>
            ["설정-나의 학번"에서 학번을 등록해주세요!]
          </Text>
        ) : (
          <Text style={styles.studentId}>
            {studentId} - {semester}학기
          </Text>
        )}
        {attendanceDataOfClasses.length === 0 ? (
          <Text style={styles.directive}>
            [오른쪽 아래 버튼을 눌러 수업을 등록해주세요!]
          </Text>
        ) : (
          <SwipeListView
            data={attendanceDataOfClasses}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-75}
            previewRowKey={"0"}
            previewOpenValue={-40}
            previewOpenDelay={3000}
            onRowDidOpen={onRowDidOpen}
          />
        )}
      </ScrollContainer>
      <AddClassButton
        buttonText={"+"}
        onPress={() => {
          navigation.navigate("AddClass", { refreshFn });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    flex: 1,
    width: WIDTH,
    height: HEIGHT,
  },
  backTextWhite: {
    color: "#FFF",
  },
  rowFront: {
    alignItems: "flex-start",
    backgroundColor: "white",
    borderBottomColor: "black",
    justifyContent: "center",
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: "blue",
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: "red",
    right: 0,
  },
  studentId: {
    fontFamily: Platform.OS === "ios" ? "Maple_otf" : "Maple_ttf",
    fontSize: 26,
    paddingTop: "5%",
    paddingLeft: "5%",
    marginBottom: "3%",
  },
  directive: {
    fontFamily: Platform.OS === "ios" ? "Maple_otf" : "Maple_ttf",
    fontSize: 15,
    paddingLeft: "5%",
  },
  lectureTitle: {
    fontFamily: Platform.OS === "ios" ? "Maple_otf" : "Maple_ttf",
    paddingLeft: "5%",
    paddingVertical: "2%",
    fontSize: 19,
  },
  lectureData: {
    fontFamily: Platform.OS === "ios" ? "Maple_otf" : "Maple_ttf",
    fontSize: 16,
  },
});

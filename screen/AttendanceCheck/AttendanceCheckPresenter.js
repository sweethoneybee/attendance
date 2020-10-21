import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from "react-native";
import ScrollContainer from "../../component/ScrollContainer";
import ClassContainer from "../../component/ClassContainer";
import AddClassButton from "../../component/AddClassButton";
import { SwipeListView } from "react-native-swipe-list-view";
import AsyncStorage from "@react-native-community/async-storage";

export default ({
  navigation,
  route,
  refreshFn,
  studentId = "로딩중",
  loading,
  attendanceDataOfClasses,
  setAttendanceDataOfClasses,
}) => {
  // const [attendanceDataOfClasses, setattendanceDataOfClasses] = useState(
  //   // Array(5)
  //   //   .fill("")
  //   //   .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
  //   attendanceDataOfClasses
  // );

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

    let classList = await AsyncStorage.getItem("ClassList");
    classList = classList !== null ? JSON.parse(classList) : {};
    delete classList[classId];
    await AsyncStorage.setItem("ClassList", JSON.stringify(classList));

    setAttendanceDataOfClasses(newData);
  };

  const onRowDidOpen = (rowKey) => {
    console.log("This row opened", rowKey);
  };

  const renderItem = (data) => (
    <TouchableHighlight
      onPress={() => console.log("You touched me")}
      style={styles.rowFront}
      underlayColor={"#AAA"}
    >
      <View>
        <Text>
          수업이름: {data.item.className}. {data.item.lectures.length} 개 중{" "}
          {data.item.lectures.length - data.item.absentCount}개 수강완료
        </Text>
      </View>
    </TouchableHighlight>
  );

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <Text>😉</Text>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteRow(rowMap, data.item.key)}
      >
        <Text style={styles.backTextWhite}>삭제</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollContainer refreshFn={refreshFn} loading={loading}>
        {studentId === "" ? (
          <Text style={styles.title}>
            ["설정-나의 학번"에서 학번을 등록해주세요!]
          </Text>
        ) : (
          <Text style={styles.title}>{studentId}</Text>
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
            leftOpenValue={75}
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
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  backTextWhite: {
    color: "#FFF",
  },
  rowFront: {
    alignItems: "flex-start",
    backgroundColor: "#CCA",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 50,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#DDD",
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
  title: {
    fontFamily: Platform.OS === "ios" ? "Maple_otf" : "Maple_ttf",
    fontSize: 26,
    textAlign: "center",
  },
  directive: {
    fontFamily: Platform.OS === "ios" ? "Maple_otf" : "Maple_ttf",
    fontSize: 15,
    textAlign: "center",
  },
});
// const styles = StyleSheet.create({
//   title: {
//     fontFamily: Platform.OS === "ios" ? "Maple_otf" : "Maple_ttf",
//     fontSize: 26,
//     textAlign: "center",
//   },
//   classContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginVertical: 50,
//     flexWrap: "wrap",
//   },
//   switch: {
//     alignItems: "center",
//     borderWidth: 2,
//     borderColor: "black",
//     marginVertical: 2,
//     paddingVertical: 10,
//     // width: Dimensions.get("window").width / 3,
//     backgroundColor: "blue",
//   },
// });

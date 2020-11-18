import React from "react";
import { ScrollView, View, Text, StyleSheet, Dimensions } from "react-native";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

export default ({}) => (
  <ScrollView style={styles.mainCotainer}>
    <View stlye={styles.textContainer}>
      <Text style={styles.title}>#사용법</Text>
      <Text style={styles.content}>
        1. '출석확인' 탭에서 오른쪽 밑에 '+' 버튼을 누릅니다
      </Text>
      <Text style={styles.content}>
        2. 양식에 맞게 학수번호, 수업번호, 수업이름을 적고 '수업 추가' 버튼을
        누릅니다
      </Text>
      <Text style={styles.content}>
        3. 이제 '출석확인' 탭에서 출석 정보를 확인할 수 있습니다.
      </Text>
      <Text style={styles.content}>
        4. '출석확인' 탭을 아래로 당기면 새로고침을 할 수 있습니다.
      </Text>
      <Text style={styles.content}>
        5. 등록한 수업을 삭제하려면, 해당 수업을 왼쪽으로 슬라이드 해서 삭제할
        수 있습니다.
      </Text>
    </View>
    <View stlye={styles.textContainer}>
      <Text style={styles.title}>
        #수업번호, 학수번호는 어떻게 알 수 있나요?
      </Text>
      <Text style={styles.content}>
        {"> "}'포탈 - MY홈 - 내강의실'에서 확인할 수 있습니다
      </Text>
      <Text style={styles.content}>
        {"> "}또는 '블랙보드 - 코스'에 들어가보면 '202010HYITE203711821'
        이런식으로 적혀있는데, HY 뒤에 적힌 7자리가 학수번호(ITE2037), 나머지
        5자리가 수업번호(11821)입니다.
      </Text>
    </View>
    <View stlye={styles.textContainer}>
      <Text style={styles.title}>#동작원리</Text>
      <Text style={styles.content}>
        {"> "}'블랙보드 - 코스 - 아무수업 - 코스 및 교육기관 도구 보기 - 온라인
        출석 조회 - 엑셀다운로드'를 통해 출석정보를 가져옵니다.
      </Text>
      <Text style={styles.content}>
        {"> "}엑셀파일의 용량은 작기 때문에 출석조회시 데이터 걱정은 안하셔도
        됩니다(44개의 동영상강의 출석정보가 12.2kb){" "}
      </Text>
    </View>
    <View stlye={styles.textContainer}>
      <Text style={styles.title}>
        #수업을 등록했는데 출석정보가 뜨지 않아요
      </Text>
      <Text style={styles.content}>
        {"> "}학수번호, 수업번호, 학번, 학기를 다시 확인해주세요
      </Text>
      <Text style={styles.content}>
        {"> "}블랙보드로 출석확인을 하지 않는 수업의 경우, 출석정보를 확인할 수
        없습니다
      </Text>
    </View>
    <View stlye={styles.textContainer}>
      <Text style={styles.title}>#앱다운로드해주셔서 감사합니다</Text>
      <Text style={styles.content}>
        {"> "}앱스토어, 플레이스토어에 좋은 평 남겨주시는 게 저에겐 많은 도움이
        됩니다. 😊.
      </Text>
      <Text style={styles.content}>
        {"> "}의견, 버그발견, 뭐든지 리뷰 남겨주시면 감사하겠습니다. 😉.
      </Text>
    </View>
    <View stlye={styles.textContainer}>
      <Text style={styles.title}>#추가 문의</Text>
      <Text style={styles.content}>{"> "}이메일: jsjphone8@gmail.com</Text>
      <Text style={styles.content}>{"> "}카카오톡ID: jsjphone</Text>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  mainCotainer: {
    backgroundColor: "white",
    height: HEIGHT,
    width: WIDTH,
  },
  textContainer: {
    backgroundColor: "red",
  },
  title: {
    fontFamily: Platform.OS === "ios" ? "GodoM_otf" : "GodoM_ttf",
    fontSize: 16,
    paddingHorizontal: "5%",
    marginTop: "3%",
  },
  content: {
    fontFamily: Platform.OS === "ios" ? "GodoM_otf" : "GodoM_ttf",
    fontSize: 12,
    paddingHorizontal: "5%",
    marginTop: "1%",
  },
});

import Constants from "expo-constants";

const ENV = {
  dev: {
    getApiUrl: (studentId, classId) => {
      return `https://learn.hanyang.ac.kr/webapps/bbgs-OnlineAttendance-BB5a998b8c44671/excel?selectedUserId=${studentId}&crs_batch_uid=202010HY${classId}&title=2016047883&column=사용자명,위치,컨텐츠명,학습한시간,학습인정시간,컨텐츠시간,온라인출석진도율,온라인출석상태(P/F)`;
    },
  },
  staging: {
    getApiUrl: (studentId, classId) => {
      return `https://learn.hanyang.ac.kr/webapps/bbgs-OnlineAttendance-BB5a998b8c44671/excel?selectedUserId=${studentId}&crs_batch_uid=202010HY${classId}&title=2016047883&column=사용자명,위치,컨텐츠명,학습한시간,학습인정시간,컨텐츠시간,온라인출석진도율,온라인출석상태(P/F)`;
    },
  },
  prod: {
    getApiUrl: (studentId, classId) => {
      return `https://learn.hanyang.ac.kr/webapps/bbgs-OnlineAttendance-BB5a998b8c44671/excel?selectedUserId=${studentId}&crs_batch_uid=202010HY${classId}&title=2016047883&column=사용자명,위치,컨텐츠명,학습한시간,학습인정시간,컨텐츠시간,온라인출석진도율,온라인출석상태(P/F)`;
    },
  },
};
const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  if (__DEV__) {
    return ENV.dev;
  } else if (env === "staging") {
    return ENV.staging;
  } else if (env === "prod") {
    return ENV.prod;
  }
};

export default getEnvVars;

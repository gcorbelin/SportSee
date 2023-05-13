import {
  user,
  userSessions,
  userPerformance,
  userActivity,
} from "./mockedDatas";

export const fetchUser = async () => {
  if (process.env.NODE_ENV === "production") {
    const response = await fetch(
      `${process.env.API_URL}/${process.env.USER_ID}`
    );
    const datas = await response.json();
    return datas.data as Object;
  } else {
    return user.data as Object;
  }
};

export const fetchSessions = async () => {
  if (process.env.NODE_ENV === "production") {
    const response = await fetch(
      `${process.env.API_URL}/${process.env.USER_ID}/average-sessions`
    );
    const datas = await response.json();
    return datas.data;
  } else {
    return userSessions.data;
  }
};

export const fetchPerformance = async () => {
  if (process.env.NODE_ENV === "production") {
    const response = await fetch(
      `${process.env.API_URL}/${process.env.USER_ID}/performance`
    );
    const datas = await response.json();
    return datas.data;
  } else {
    return userPerformance.data;
  }
};

export const fetchActivity = async () => {
  if (process.env.NODE_ENV === "production") {
    const response = await fetch(
      `${process.env.API_URL}/${process.env.USER_ID}/activity`
    );
    const datas = await response.json();
    return datas.data;
  } else {
    return userActivity.data;
  }
};

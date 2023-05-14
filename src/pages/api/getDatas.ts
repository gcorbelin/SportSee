import { User } from "@/models/user";
import { UserActivity } from "@/models/activity";

import {
  user,
  userSessions,
  userPerformance,
  userActivity,
} from "./mockedDatas";
import { UserSessions } from "@/models/session";
import { UserStats } from "@/models/stats";

export const fetchUser = async () => {
  if (process.env.NODE_ENV === "production") {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_USER_ID}`
    );
    const datas = await response.json();
    if (datas.data.score) {
      datas.data.todayScore = datas.data.score;
    }
    return datas.data as User;
  } else {
    return user.data as User;
  }
};

export const fetchSessions = async () => {
  if (process.env.NODE_ENV === "production") {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_USER_ID}/average-sessions`
    );
    const datas = await response.json();
    return datas.data as UserSessions;
  } else {
    return userSessions.data as UserSessions;
  }
};

export const fetchStats = async () => {
  if (process.env.NODE_ENV === "production") {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_USER_ID}/performance`
    );
    const datas = await response.json();
    return datas.data as UserStats;
  } else {
    return userPerformance.data as UserStats;
  }
};

export const fetchActivity = async () => {
  if (process.env.NODE_ENV === "production") {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_USER_ID}/activity`
    );
    const datas = await response.json();
    return datas.data as UserActivity;
  } else {
    return userActivity.data as UserActivity;
  }
};

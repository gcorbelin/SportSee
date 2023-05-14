import { plainToInstance } from "class-transformer";
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
    return plainToInstance(User, datas.data as object);
  } else {
    return plainToInstance(User, user.data as object);
  }
};

export const fetchSessions = async () => {
  if (process.env.NODE_ENV === "production") {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_USER_ID}/average-sessions`
    );
    const datas = await response.json();
    return plainToInstance(UserSessions, datas.data as object);
  } else {
    return plainToInstance(UserSessions, userSessions.data as object);
  }
};

export const fetchStats = async () => {
  if (process.env.NODE_ENV === "production") {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_USER_ID}/performance`
    );
    const datas = await response.json();
    return plainToInstance(UserStats, datas.data as object);
  } else {
    return plainToInstance(UserStats, userPerformance.data as object);
  }
};

export const fetchActivity = async () => {
  if (process.env.NODE_ENV === "production") {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_USER_ID}/activity`
    );
    const datas = await response.json();
    return plainToInstance(UserActivity, datas.data as object);
  } else {
    return plainToInstance(UserActivity, userActivity.data as object);
  }
};

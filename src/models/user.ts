export type UserInfos = { firstName: string; lastName: string; age: number };

export type UserKeyDatas = {
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;
};

export type User = {
  id: number;
  userInfos: UserInfos;
  todayScore: number;
  keyData: UserKeyDatas;
};

import { Type } from "class-transformer";

export class UserInfos {
  firstName: string;

  lastName: string;

  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

export class UserKeyDatas {
  calorieCount: number;

  proteinCount: number;

  carbohydrateCount: number;

  lipidCount: number;

  constructor(
    calorieCount: number,
    proteinCount: number,
    carbohydrateCount: number,
    lipidCount: number
  ) {
    this.calorieCount = calorieCount;
    this.proteinCount = proteinCount;
    this.carbohydrateCount = carbohydrateCount;
    this.lipidCount = lipidCount;
  }
}

export class User {
  id: number;

  @Type(() => UserInfos)
  userInfos: UserInfos;

  todayScore: number;

  @Type(() => UserKeyDatas)
  keyData: UserKeyDatas;

  constructor(
    id: number,
    userInfos: UserInfos,
    todayScore: number,
    keyData: UserKeyDatas
  ) {
    this.id = id;
    this.userInfos = userInfos;
    this.todayScore = todayScore;
    this.keyData = keyData;
  }
}

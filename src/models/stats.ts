import { Type } from "class-transformer";

export class Stat {
  value: number;

  kind: number;

  constructor(value: number, kind: number) {
    this.value = value;
    this.kind = kind;
  }
}

export type Kind = {
  "1": string;
  "2": string;
  "3": string;
  "4": string;
  "5": string;
  "6": string;
};

export class UserStats {
  userId: number;

  kind: Kind;

  @Type(() => Stat)
  data: Stat[];

  constructor(userId: number, kind: Kind, data: Stat[]) {
    this.userId = userId;
    this.kind = kind;
    this.data = data;
  }
}

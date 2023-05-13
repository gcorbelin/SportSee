export type Stat = {
  value: number;
  kind: number;
};

export type Kind = {
  "1": string;
  "2": string;
  "3": string;
  "4": string;
  "5": string;
  "6": string;
};

export type UserStats = {
  userId: number;
  kind: Kind;
  data: Stat[];
};

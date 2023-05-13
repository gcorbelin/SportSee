export type Activity = {
  day: string;
  kilogram: number;
  calories: number;
};

export type UserActivity = {
  userId: number;
  sessions: Activity[];
};

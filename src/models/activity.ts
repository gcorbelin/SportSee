import { Type } from "class-transformer";

export class Activity {
  day: string;

  kilogram: number;

  calories: number;

  constructor(day: string, kilogram: number, calories: number) {
    this.day = day;
    this.kilogram = kilogram;
    this.calories = calories;
  }
}

export class UserActivity {
  userId: number;

  @Type(() => Activity)
  sessions: Activity[];

  constructor(userId: number, sessions: Activity[]) {
    this.userId = userId;
    this.sessions = sessions;
  }
}

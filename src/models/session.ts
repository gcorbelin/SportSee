import { Type } from "class-transformer";

export class UserSessions {
  userId: number;

  @Type(() => Session)
  sessions: Session[];

  constructor(userId: number, sessions: Session[]) {
    this.userId = userId;
    this.sessions = sessions;
  }
}

export class Session {
  day: number;

  sessionLength: number;

  constructor(day: number, sessionLength: number) {
    this.day = day;
    this.sessionLength = sessionLength;
  }
}

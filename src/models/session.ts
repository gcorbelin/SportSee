export type Session = {
  day: number;
  sessionLength: number;
};

export type UserSessions = {
  userId: number;
  sessions: Session[];
};

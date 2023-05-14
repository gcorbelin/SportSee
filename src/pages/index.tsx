import Layout from "@/components/Layout/Layout";
import DataBlock, { Colors } from "@/components/DataBlock/DataBlock";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import {
  fetchUser,
  fetchActivity,
  fetchStats,
  fetchSessions,
} from "./api/getDatas";
import { User } from "@/models/user";
import { UserActivity } from "@/models/activity";
import { UserSessions } from "@/models/session";
import { UserStats } from "@/models/stats";
import Daily from "@/components/Daily/Daily";
import Sessions from "@/components/Sessions/Sessions";
import CharacterStats from "@/components/CharacterStats/CharacterStats";
import Objective from "@/components/Objective/Objective";

export default function Home() {
  const [user, setUser] = useState<User>();
  const [userActivity, setUserActivity] = useState<UserActivity>();
  const [userSessions, setUserSessions] = useState<UserSessions>();
  const [userPerformance, setUserPerformance] = useState<UserStats>();

  useEffect(() => {
    fetchUser().then((response) => setUser(response));
    fetchActivity().then((response) => setUserActivity(response));
    fetchSessions().then((response) => setUserSessions(response));
    fetchStats().then((response) => setUserPerformance(response));
  }, []);

  return (
    <Layout
      title="Page d'accueil"
      description="Votre tableau de bord pour suivre vos objectifs"
    >
      <div className={styles.dashboard}>
        <div className={styles.title}>
          <h1>
            Bonjour{" "}
            <span className={styles["title-name"]}>
              {user && user.userInfos.firstName}
            </span>
          </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div className={styles["home-wrapper"]}>
          <div className={styles["home-main"]}>
            {userActivity && <Daily activity={userActivity.sessions} />}
            <div className={styles["home-main-secondary"]}>
              {userSessions && <Sessions sessions={userSessions.sessions} />}
              {userPerformance && <CharacterStats datas={userPerformance} />}
              {user && <Objective score={user.todayScore} />}
            </div>
          </div>
          <div className={styles["home-aside"]}>
            {user && (
              <>
                <DataBlock
                  color={Colors.red}
                  img="/assets/energy.svg"
                  data={`${user.keyData.calorieCount}kCal`}
                  label="Calories"
                  key="calories"
                />
                <DataBlock
                  color={Colors.blue}
                  img="/assets/chicken.svg"
                  data={`${user.keyData.proteinCount}g`}
                  label="Protéines"
                  key="proteines"
                />
                <DataBlock
                  color={Colors.yellow}
                  img="/assets/apple.svg"
                  data={`${user.keyData.carbohydrateCount}g`}
                  label="Glucides"
                  key="glucides"
                />
                <DataBlock
                  color={Colors.pink}
                  img="/assets/cheeseburger.svg"
                  data={`${user.keyData.lipidCount}g`}
                  label="Lipides"
                  key="lipides"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

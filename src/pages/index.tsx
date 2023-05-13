import dynamic from "next/dynamic";
import Layout from "@/components/Layout/Layout";
import DataBlock from "@/components/DataBlock/DataBlock";
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

// Daily component contains the recharts chart
const Daily = dynamic(() => import("@/components/Daily/Daily"), {
  ssr: false,
});

// Objective component contains the recharts chart
const Objective = dynamic(() => import("@/components/Objective/Objective"), {
  ssr: false,
});

// CharacterStats component contains the recharts chart
const CharacterStats = dynamic(
  () => import("@/components/CharacterStats/CharacterStats"),
  {
    ssr: false,
  }
);

// Session component contains the recharts chart
const Session = dynamic(() => import("@/components/Session/Session"), {
  ssr: false,
});

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
              {userSessions && <Session sessions={userSessions.sessions} />}
              {userPerformance && <CharacterStats datas={userPerformance} />}
              {user && <Objective score={user.todayScore} />}
            </div>
          </div>
          <div className={styles["home-aside"]}>
            {user && (
              <>
                <DataBlock
                  color="red"
                  img="/assets/energy.svg"
                  data={`${user.keyData.calorieCount}kCal`}
                  label="Calories"
                  key="calories"
                />
                <DataBlock
                  color="blue"
                  img="/assets/chicken.svg"
                  data={`${user.keyData.proteinCount}g`}
                  label="Protéines"
                  key="proteines"
                />
                <DataBlock
                  color="yellow"
                  img="/assets/apple.svg"
                  data={`${user.keyData.carbohydrateCount}g`}
                  label="Glucides"
                  key="glucides"
                />
                <DataBlock
                  color="pink"
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

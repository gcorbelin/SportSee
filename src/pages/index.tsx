import dynamic from "next/dynamic";
import Layout from "@/components/Layout/Layout";
import DataBlock from "@/components/DataBlock/DataBlock";
import styles from "@/styles/Home.module.css";
import utilsStyles from "@/styles/utils.module.css";
import {
  user,
  userSessions,
  userPerformance,
  userActivity,
} from "./api/mockedDatas";

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
              {user.data.userInfos.firstName}
            </span>
          </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div className={styles["home-wrapper"]}>
          <div className={styles["home-main"]}>
            <Daily activity={userActivity.data.sessions} />
            <div className={styles["home-main-secondary"]}>
              <Session sessions={userSessions.data.sessions} />
              <CharacterStats datas={userPerformance.data} />
              <Objective score={user.data.todayScore} />
            </div>
          </div>
          <div className={styles["home-aside"]}>
            <DataBlock
              color="red"
              img="/assets/energy.svg"
              data={`${user.data.keyData.calorieCount}kCal`}
              label="Calories"
              key="calories"
            />
            <DataBlock
              color="blue"
              img="/assets/chicken.svg"
              data={`${user.data.keyData.proteinCount}g`}
              label="Protéines"
              key="proteines"
            />
            <DataBlock
              color="yellow"
              img="/assets/apple.svg"
              data={`${user.data.keyData.carbohydrateCount}g`}
              label="Glucides"
              key="glucides"
            />
            <DataBlock
              color="pink"
              img="/assets/cheeseburger.svg"
              data={`${user.data.keyData.lipidCount}g`}
              label="Lipides"
              key="lipides"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

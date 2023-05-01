import dynamic from "next/dynamic";
import Layout from "@/components/Layout/Layout";
import DataBlock from "@/components/DataBlock/DataBlock";
import styles from "@/styles/Home.module.css";
import utilsStyles from "@/styles/utils.module.css";
import { user } from "./api/mockedDatas";

// Objective component contains the recharts chart
const Objective = dynamic(() => import("@/components/Objective/Objective"), {
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
            <div className={`${utilsStyles.block} ${styles["home-weight"]} `}>
              Activité quotidienne
            </div>
            <div className={styles["home-main-secondary"]}>
              <div
                className={`${utilsStyles.block} ${utilsStyles["block--theme-1"]} ${styles["home-aside-block"]}`}
              >
                Objectifs
              </div>
              <div
                className={`${utilsStyles.block} ${utilsStyles["block--background-4"]} ${styles["home-aside-block"]}`}
              >
                Radar
              </div>
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

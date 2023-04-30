import { Inter } from "next/font/google";
import Layout from "@/components/Layout/Layout";
import styles from "@/styles/Home.module.css";
import utilsStyles from "@/styles/utils.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout
      title="Page d'accueil"
      description="Votre tableau de bord pour suivre vos objectifs"
    >
      <div className={styles.dashboard}>
        <div className={styles.title}>
          <h1>
            Bonjour <span className={styles["title-name"]}>[Prénom]</span>
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
              <div
                className={`${utilsStyles.block} ${styles["home-aside-block"]}`}
              >
                KPI
              </div>
            </div>
          </div>
          <div className={styles["home-aside"]}>
            <div className={utilsStyles.block}>Calories</div>
            <div className={utilsStyles.block}>Protéines</div>
            <div className={utilsStyles.block}>Glucides</div>
            <div className={utilsStyles.block}>Lipides</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

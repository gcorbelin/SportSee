import { PieChart, Pie, ResponsiveContainer } from "recharts";
import styles from "@/styles/Objective.module.css";
import utilsStyles from "@/styles/utils.module.css";

interface ObjectiveProps {
  score: number;
}

export default function Objective({ score }: ObjectiveProps) {
  const objectifDatas = [
    {
      name: "score",
      value: score,
      fill: "#ff0000",
    },
    {
      name: "",
      value: 1 - score,
      fill: "transparent",
    },
  ];

  return (
    <div
      className={`${utilsStyles.block} ${utilsStyles["block-chart"]} ${styles.objective}`}
    >
      <div className={styles.title}>Score</div>
      <div className={styles.score}>
        <strong>{score * 100}%</strong> de votre objectif
      </div>
      <ResponsiveContainer>
        <PieChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <Pie
            data={objectifDatas}
            dataKey="value"
            cx="50%"
            cy="50%"
            amplitude={1}
            outerRadius={90}
            innerRadius={80}
            cornerRadius={10}
            startAngle={90}
            endAngle={450}
          ></Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

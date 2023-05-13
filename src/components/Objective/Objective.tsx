import { PieChart, Pie, Text } from "recharts";
import AutoSizer from "react-virtualized-auto-sizer";
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
      <AutoSizer className={styles["objective-chart"]}>
        {({ width, height }) => (
          <>
            <PieChart
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              width={width}
              height={height}
            >
              <text
                x={"50%"}
                y={"50%"}
                style={{ translate: "(-50%, -50%)" }}
                textAnchor="middle"
                alignmentBaseline="middle"
              >
                <tspan fontWeight={"bold"} fontSize={"26px"}>
                  {score * 100}%
                </tspan>{" "}
                <tspan
                  dy={"1em"}
                  dx={0}
                  x={"50%"}
                  fill="#74798C"
                  fontWeight={"500"}
                >
                  de votre objectif
                </tspan>
              </text>
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
          </>
        )}
      </AutoSizer>
    </div>
  );
}

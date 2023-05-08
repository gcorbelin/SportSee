import {
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { CharacterStat } from "@/models/characterStats";
import styles from "@/styles/CharacterStats.module.css";
import utilsStyles from "@/styles/utils.module.css";

interface CharacterStatsProps {
  datas: CharacterStat;
}

export default function CharacterStats({ datas }: CharacterStatsProps) {
  const data = [];
  for (let i = 1; i <= 6; i++) {
    const stat = datas.data.find((elem) => elem.kind === i);
    data.push({
      subject: datas.kind[i],
      value: stat?.value,
    });
  }

  return (
    <div
      className={`${utilsStyles.block} ${utilsStyles["block-chart"]} ${utilsStyles["no-padding"]} ${utilsStyles["block--background-4"]} ${styles.session}`}
    >
      <ResponsiveContainer width={"99%"} height={260}>
        <RadarChart data={data}>
          <PolarGrid radialLines={false} stroke="#fff" />
          <PolarAngleAxis
            dataKey="subject"
            stroke="#fff"
            tickLine={false}
            fontSize={12}
          />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from "recharts";
import { Session } from "@/models/session";
import styles from "@/styles/Session.module.css";
import utilsStyles from "@/styles/utils.module.css";

interface SessionProps {
  sessions: Session[];
}

export default function Session({ sessions }: SessionProps) {
  const ticks = ["L", "M", "M", "J", "V", "S", "D"];

  const renderTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return <div className={styles.tooltip}>{payload[0].value} min</div>;
    }
  };

  return (
    <div
      className={`${utilsStyles.block} ${utilsStyles["block-chart"]} ${utilsStyles["block--theme-1"]} ${styles.session}`}
    >
      <div className={styles.title}>Durée moyenne des sessions</div>
      <ResponsiveContainer>
        <LineChart
          data={sessions}
          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
        >
          <defs>
            <linearGradient id="myGradient">
              <stop
                offset="0%"
                style={{ stopColor: "#fff", stopOpacity: 0.4 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#fff", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#fff" }}
            tickFormatter={(tick) => ticks[tick - 1]}
            interval="preserveStartEnd"
            minTickGap={0}
            opacity={0.5}
            style={{ fontSize: "12px" }}
          />
          <Tooltip content={renderTooltip} cursor={false} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            dot={false}
            stroke="url(#myGradient)"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

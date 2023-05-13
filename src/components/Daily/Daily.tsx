import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import AutoSizer from "react-virtualized-auto-sizer";
import { Activity } from "@/models/activity";
import styles from "@/styles/Daily.module.css";
import utilsStyles from "@/styles/utils.module.css";

interface DailyProps {
  activity: Activity[];
}

export default function Daily({ activity }: DailyProps) {
  const kgMin = activity.reduce((prev, curr) =>
    prev.kilogram < curr.kilogram ? prev : curr
  );
  const kgMax = activity.reduce((prev, curr) =>
    prev.kilogram > curr.kilogram ? prev : curr
  );
  const calMin = activity.reduce((prev, curr) =>
    prev.calories < curr.calories ? prev : curr
  );
  const calMax = activity.reduce((prev, curr) =>
    prev.calories > curr.calories ? prev : curr
  );

  const renderTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.tooltip}>
          {payload[0].value} kg <br />
          {payload[1].value} Kcal
        </div>
      );
    }
  };

  return (
    <div className={`${utilsStyles.block} ${styles.daily} `}>
      <AutoSizer>
        {({ width, height }) => (
          <BarChart width={width} height={height} data={activity}>
            <CartesianGrid
              vertical={false}
              strokeDasharray="2 2"
              stroke="#DEDEDE"
            />
            <XAxis
              dataKey="day"
              tickLine={false}
              stroke="#9B9EAC"
              axisLine={{ stroke: "#DEDEDE" }}
              tickFormatter={(tick, index) => `${index + 1}`}
            />
            <YAxis
              dataKey="kilogram"
              orientation="right"
              axisLine={false}
              tickLine={false}
              domain={[kgMin.kilogram - 3, kgMax.kilogram + 3]}
              stroke="#9B9EAC"
              yAxisId={"kilogram"}
            />
            <YAxis
              dataKey="calories"
              orientation="right"
              axisLine={false}
              tickLine={false}
              domain={[calMin.kilogram - 30, calMax.kilogram + 30]}
              stroke="#9B9EAC"
              yAxisId={"calories"}
              hide
            />
            <Tooltip
              content={renderTooltip}
              cursor={{ fill: "#C4C4C4", opacity: 0.5 }}
            />
            <Legend
              verticalAlign="top"
              align="right"
              height={36}
              iconType="circle"
              iconSize={8}
              formatter={(value) => {
                return <span className={styles.legend}>{value}</span>;
              }}
            />
            <Bar
              dataKey="kilogram"
              barSize={6}
              fill="#E60000"
              radius={[10, 10, 0, 0]}
              yAxisId={"kilogram"}
              name="Poids (kg)"
            />
            <Bar
              dataKey="calories"
              barSize={6}
              fill="#282D30"
              radius={[10, 10, 0, 0]}
              yAxisId={"calories"}
              name="Calories brûlées (kCal)"
            />
          </BarChart>
        )}
      </AutoSizer>
    </div>
  );
}

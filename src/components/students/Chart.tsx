"use client"

import {
   ResponsiveContainer,
   LineChart,
   CartesianGrid,
   XAxis,
   YAxis,
   Tooltip,
   Line,
   Legend,
} from "recharts"

export interface ChartItem {
   month: string
   myScore: number
   avgScore: number
   year: number
}

interface IProps {
   chartData: ChartItem[]
   year: number
}

const Chart: React.FC<IProps> = ({ chartData, year }) => {
   return (
      <ResponsiveContainer>
         <LineChart data={chartData.filter((data) => data.year === year)}>
            <CartesianGrid vertical={false} strokeDasharray={"2 2"} />
            <XAxis dataKey={"month"} />
            <YAxis hide />
            <Tooltip
               contentStyle={{
                  backgroundColor: "#242730",
                  color: "white",
                  borderRadius: "10px",
                  opacity: "95%",
               }}
            />
            <Legend />
            <Line
               type="monotone"
               dataKey="myScore"
               stroke="rgb(59 130 246)"
               dot={false}
               strokeWidth={4}
               name="نمره من"
            />
            <Line
               type="monotone"
               dataKey="avgScore"
               stroke="rgb(126 34 206)"
               dot={false}
               strokeWidth={4}
               name="نمره میانگین"
            />
         </LineChart>
      </ResponsiveContainer>
   )
}

export default Chart

"use client"

import {
   ResponsiveContainer,
   LineChart,
   CartesianGrid,
   XAxis,
   YAxis,
   Tooltip,
   Line,
} from "recharts"

export interface ChartItem {
   month: string
   score: number
}

interface IProps {
   chartData: ChartItem[]
}

const Chart: React.FC<IProps> = ({ chartData }) => {
   return (
      <ResponsiveContainer>
         <LineChart data={chartData}>
            <CartesianGrid vertical={false} strokeDasharray={"2 2"} />
            <XAxis dataKey={"month"} />
            <YAxis />
            <Tooltip />
            <Line
               type="monotone"
               dataKey={"score"}
               stroke="#8884d8"
               fill="#8884d8"
               dot={false}
               strokeWidth={4}
            />
         </LineChart>
      </ResponsiveContainer>
   )
}

export default Chart

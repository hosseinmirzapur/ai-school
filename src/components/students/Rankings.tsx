"use client"

import React from "react"
import {
   Legend,
   PolarAngleAxis,
   PolarGrid,
   Radar,
   RadarChart,
   ResponsiveContainer,
   Tooltip,
} from "recharts"

export interface IRanking {
   subject: string
   myGrade: number
   average: number
}

interface IProps {
   chartData: IRanking[]
}

const Rankings: React.FC<IProps> = ({ chartData }) => {
   return (
      <ResponsiveContainer>
         <RadarChart cx={"50%"} cy={"50%"} data={chartData}>
            <PolarGrid />
            <PolarAngleAxis dataKey={"subject"} className="text-xl font-bold" />
            <Radar
               name="نمره من"
               dataKey={"myGrade"}
               fill="#4ade80"
               fillOpacity={0.6}
            />
            <Radar
               name="معدل پایه"
               dataKey={"average"}
               fill="#60a5fa"
               fillOpacity={0.4}
            />
            <Legend />
            <Tooltip
               contentStyle={{
                  backgroundColor: "#242730",
                  color: "white",
                  borderRadius: "10px",
                  opacity: "95%",
               }}
            />
         </RadarChart>
      </ResponsiveContainer>
   )
}

export default Rankings

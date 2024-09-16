"use client"

import Bar from "./Bar"
import { barColor, barWidth, persianDate } from "./utils"

export interface Subject {
   title: string
   duration: number // in seconds
}

export interface DailySchedule {
   day: "saturday" | "sunday" | "monday" | "tuesday" | "wednesday" | "thursday"
   subjects: Subject[]
}

interface IProps {
   chartData: DailySchedule[]
}

const WeeklyChart: React.FC<IProps> = ({ chartData }) => {
   return (
      <div className="flex flex-col w-11/12 md:w-10/12 mx-auto h-full">
         {chartData.map((data, index) => (
            <div key={index} className="lg:grid grid-cols-10 gap-5">
               <div className="flex items-center justify-center text-[#6A2E7ECC] opacity-80 text-xl col-span-1">
                  {persianDate(data.day)}
               </div>
               <div
                  className={`
                     flex
                     items-center
                     border-t-1
                     border-black
                     border-opacity-20
                     gap-1
                     md:gap-3
                     lg:gap-5
                     h-[100px]
                     md:h-[90px]
                     w-full
                     col-span-9
                  `}
               >
                  {data.subjects.map((subject, index) => {
                     const { bgColor, textColor } = barColor()
                     const width = barWidth(subject.duration)

                     return (
                        <Bar
                           key={index}
                           subject={subject}
                           bgColor={bgColor}
                           textColor={textColor}
                           width={width}
                        />
                     )
                  })}
               </div>
            </div>
         ))}
      </div>
   )
}

export default WeeklyChart

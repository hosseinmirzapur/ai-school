"use client"

import { FaArrowUp } from "react-icons/fa"
import WeeklyChart, { DailySchedule } from "./WeeklyChart"

const weeklySchedule: DailySchedule[] = [
   {
      day: "saturday",
      subjects: [
         {
            title: "زبان انگلیسی",
            duration: 2700,
         },
         {
            title: "علوم",
            duration: 3600,
         },
         {
            title: "مطالعات اجتماعی",
            duration: 3000,
         },
      ],
   },
   {
      day: "sunday",
      subjects: [
         {
            title: "زبان انگلیسی",
            duration: 2700,
         },
         {
            title: "ریاضی",
            duration: 3600,
         },
         {
            title: "مطالعات اجتماعی",
            duration: 2400,
         },
      ],
   },
   {
      day: "monday",
      subjects: [
         {
            title: "زبان انگلیسی",
            duration: 2100,
         },
         {
            title: "علوم",
            duration: 3600,
         },
         {
            title: "فارسی",
            duration: 3000,
         },
      ],
   },
   {
      day: "tuesday",
      subjects: [
         {
            title: "ریاضی",
            duration: 2700,
         },
         {
            title: "علوم",
            duration: 1800,
         },
         {
            title: "مطالعات اجتماعی",
            duration: 3000,
         },
      ],
   },
   {
      day: "wednesday",
      subjects: [
         {
            title: "زبان انگلیسی",
            duration: 2700,
         },
         {
            title: "علوم",
            duration: 1800,
         },
         {
            title: "مطالعات اجتماعی",
            duration: 3000,
         },
      ],
   },
   {
      day: "thursday",
      subjects: [
         {
            title: "ریاضی",
            duration: 2700,
         },
         {
            title: "فارسی",
            duration: 3600,
         },
         {
            title: "علوم",
            duration: 3000,
         },
      ],
   },
]

const ScheduleContainer = () => {
   return (
      <div className="flex w-full items-center h-full lg:h-[100vh] py-5 md:py-3 lg:py-0">
         <div
            className="
               flex
               flex-col
               gap-10
               w-11/12
               md:w-10/12
               lg:w-9/12
               mx-auto
               h-full
               lg:h-[700px]
               rounded-[40px]
               bg-[#EDFBFF]
               shadow-md
            "
         >
            <div className="flex justify-between w-10/12 mx-auto pt-[40px]">
               <div className="text-3xl font-bold">برنامه هفتگی</div>
               <div>
                  <FaArrowUp className="rotate-[-45deg]" size={40} />
               </div>
            </div>
            <WeeklyChart chartData={weeklySchedule} />
         </div>
      </div>
   )
}

export default ScheduleContainer

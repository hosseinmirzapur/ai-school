"use client"

import { chartData, notifications } from "./data"
import Header from "./Header"
import HomeCard from "./HomeCard"
import EducationYear from "./EducationYear"
import { useState } from "react"
import ChartCard from "./ChartCard"
import { useRouter } from "next/navigation"

const RightSide = () => {
   // ** States and variables
   const [year, setYear] = useState<number>(1403)
   const { push } = useRouter()

   return (
      <div
         className="
            lg:col-span-2
            col-span-full
            flex
            flex-col
            space-y-28
            h-full
         "
      >
         <Header notifications={notifications} />

         {/* Middle Content */}
         <div
            className="
               flex
               flex-wrap
               gap-5
               justify-center
            "
         >
            <HomeCard
               backgroundSrc="/assets/background.jpg"
               iconSrc="/assets/clock.png"
               text="میزان فعالیت"
               onClick={() => push("#")}
            />
            <HomeCard
               backgroundSrc="/assets/background-2.jpg"
               iconSrc="/assets/globe.png"
               text="از من بپرس"
               onClick={() => push("/chat")}
            />
            <HomeCard
               backgroundSrc="/assets/background-3.jpg"
               iconSrc="/assets/books-on-eachother.png"
               text="منابع آموزشی"
               onClick={() => push("/sources")}
            />
         </div>
         <div className="flex flex-col gap-5 items-center lg:items-start">
            <EducationYear year={year} setYear={setYear} />
            <ChartCard chartData={chartData} year={year} />
         </div>
      </div>
   )
}

export default RightSide

"use client"

import Chart, { ChartItem } from "@/components/students/Chart"
import Chat from "./Chat"
import HomeCard from "./HomeCard"
import Notifications, { INotification } from "./Notifications"
import Search from "./Search"
import ProfileCard, { IProfile } from "@/components/students/ProfileCard"
import Rankings, { IRanking } from "@/components/students/Rankings"
import { Card, CardBody } from "@nextui-org/react"
import EducationYear from "./EducationYear"
import { useState } from "react"

const rankings: IRanking[] = [
   {
      id: 1,
      fullName: "ali momeni",
      rank: 1,
   },
   {
      id: 2,
      fullName: "reza ahmadi",
      rank: 2,
   },
   {
      id: 3,
      fullName: "morteza pashaei",
      rank: 3,
   },
   {
      id: 4,
      fullName: "mohammad motamedi",
      rank: 4,
   },
   {
      id: 5,
      fullName: "ebrahim hatefi",
      rank: 5,
   },
]

const notifications: INotification[] = [
   {
      id: 1,
      text: "خوش اومدی! امیدوارم روز قشنگی داشته باشی",
      type: "system",
      seen: true,
   },
   {
      id: 2,
      text: "یادت باشه فردا تکالیف فارسی رو انجام داده باشی!",
      type: "teacher",
      seen: false,
   },
]

const profile: IProfile = {
   classNumber: "دوم",
   email: "annie_leonchart@gmail.com",
   fullName: "Annie Leonchart",
}

const chartData: ChartItem[] = [
   {
      month: "مهر",
      myScore: 15,
      avgScore: 13,
      year: 1402,
   },
   {
      month: "آبان",
      myScore: 12.5,
      avgScore: 15,
      year: 1402,
   },
   {
      month: "آذر",
      myScore: 20,
      avgScore: 18.5,
      year: 1402,
   },
   {
      month: "دی",
      myScore: 17,
      avgScore: 19.5,
      year: 1402,
   },
   {
      month: "بهمن",
      myScore: 18.75,
      avgScore: 18.25,
      year: 1402,
   },
   {
      month: "اسفند",
      myScore: 20,
      avgScore: 12.75,
      year: 1402,
   },
   {
      month: "فروردین",
      myScore: 15.25,
      avgScore: 13,
      year: 1403,
   },
   {
      month: "اردیبهشت",
      myScore: 13,
      avgScore: 16.75,
      year: 1403,
   },
   {
      month: "خرداد",
      myScore: 12,
      avgScore: 7,
      year: 1403,
   },
   {
      month: "تیر",
      myScore: 11,
      avgScore: 13.5,
      year: 1403,
   },
   {
      month: "مرداد",
      myScore: 16,
      avgScore: 15,
      year: 1403,
   },
   {
      month: "شهریور",
      myScore: 19.5,
      avgScore: 18.75,
      year: 1403,
   },
]

const HomeContainer = () => {
   // ** states & variables
   const [year, setYear] = useState<number>(1403)

   return (
      <div className="flex flex-col md:grid grid-cols-1 lg:grid-cols-3 w-full mx-auto h-full md:h-[100vh]">
         <div className="flex flex-col lg:col-span-2 gap-10 mx-auto w-11/12">
            {/* Header Section */}
            <div className="flex justify-between pt-10 mx-auto w-11/12 gap-5 md:gap-2 lg:gap-0">
               <div className="flex gap-2">
                  <Notifications notifications={notifications} />
                  <Chat />
               </div>
               <div className="w-10/12 mx-auto">
                  <Search />
               </div>
            </div>

            <div className="grid grid-rows-2">
               {/* Home Cards Section */}
               <div
                  className="
                  flex
                  flex-col
                  w-full
                  md:w-11/12
                  mx-auto
                  md:grid
                  md:grid-cols-2
                  lg:flex
                  lg:flex-row
                  lg:w-11/12
                  items-center
                  justify-center
                  gap-4
               "
               >
                  <HomeCard
                     backgroundSrc="/assets/background.jpg"
                     iconSrc="/assets/clock.png"
                     text="میزان فعالیت"
                  />
                  <HomeCard
                     backgroundSrc="/assets/background-2.jpg"
                     iconSrc="/assets/globe.png"
                     text="از من بپرس"
                  />
                  <HomeCard
                     backgroundSrc="/assets/background-3.jpg"
                     iconSrc="/assets/books-on-eachother.png"
                     text="منابع آموزشی"
                  />
               </div>

               {/* Chart Section */}
               <div className="flex flex-col w-11/12 mx-auto justify-center gap-3">
                  <EducationYear setYear={setYear} year={year} />
                  <Card className="h-[350px] w-[95%] mx-auto">
                     <CardBody>
                        <Chart chartData={chartData} year={year} />
                     </CardBody>
                  </Card>
               </div>
            </div>
         </div>
         <div className="grid grid-rows-3 lg:col-span-1">
            <ProfileCard profile={profile} />
            <div className="lg:flex flex-col gap-4 row-span-2 pt-5 md:hidden">
               <Rankings rankings={rankings} />
            </div>
         </div>
      </div>
   )
}

export default HomeContainer

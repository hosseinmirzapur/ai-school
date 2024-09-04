"use client"

import Chart, { ChartItem } from "@/components/students/Chart"
import Chat from "./Chat"
import HomeCard from "./HomeCard"
import Notifications, { INotification } from "./Notifications"
import Search from "./Search"
import ProfileCard, { IProfile } from "@/components/students/ProfileCard"
import Rankings, { IRanking } from "@/components/students/Rankings"
import { Card, CardBody } from "@nextui-org/react"

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
      score: 15,
   },
   {
      month: "آبان",
      score: 12.5,
   },
   {
      month: "آذر",
      score: 20,
   },
   {
      month: "دی",
      score: 17,
   },
   {
      month: "بهمن",
      score: 18.75,
   },
   {
      month: "اسفند",
      score: 20,
   },
   {
      month: "فروردین",
      score: 15.25,
   },
   {
      month: "اردیبهشت",
      score: 13,
   },
   {
      month: "خرداد",
      score: 12,
   },
   {
      month: "تیر",
      score: 11,
   },
   {
      month: "مرداد",
      score: 16,
   },
   {
      month: "شهریور",
      score: 19.5,
   },
]

const HomeContainer = () => {
   return (
      <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-3 gap-3 w-11/12 mx-auto">
         <div className="flex flex-col col-span-2 gap-5">
            {/* Header Section */}
            <div className="flex justify-between pt-10">
               <div className="flex gap-3 px-4">
                  <Notifications notifications={notifications} />
                  <Chat />
               </div>
               <div className="w-9/12">
                  <Search />
               </div>
            </div>

            {/* Home Cards Section */}
            <div
               className="
                  md:grid
                  lg:grid-cols-3
                  flex
                  flex-col
                  justify-center
                  items-center
                  gap-x-44
                  lg:gap-x-0
                  gap-y-20
                  pt-12
                  px-4
                  md:pr-4
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
            <Card className="min-h-[400px] w-[800px] mx-auto">
               <CardBody className="w-full">
                  <Chart chartData={chartData} />
               </CardBody>
            </Card>
         </div>
         <div className="grid grid-rows-3 col-span-1">
            <ProfileCard profile={profile} />
            <div className="lg:flex flex-col gap-4 row-span-2 pt-5 md:hidden">
               <Rankings rankings={rankings} />
            </div>
         </div>
      </div>
   )
}

export default HomeContainer

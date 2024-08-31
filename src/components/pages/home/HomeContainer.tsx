"use client"

import Chart from "@/components/students/Chart"
import Chat from "./Chat"
import HomeCard from "./HomeCard"
import Notifications, { INotification } from "./Notifications"
import Search from "./Search"
import ProfileCard from "@/components/students/ProfileCard"
import { IFolder } from "@/components/students/Folder"
import Folder from "@/components/students/Folder"

const folders: IFolder[] = [
   {
      id: 1,
      folderTitle: "زبان انگلیسی",
   },
   {
      id: 2,
      folderTitle: "علوم",
   },
   {
      id: 3,
      folderTitle: "ریاضی",
   },
   {
      id: 4,
      folderTitle: "فارسی",
   },
   {
      id: 5,
      folderTitle: "مطالعات اجتماعی",
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

const HomeContainer = () => {
   return (
      <div className="grid grid-cols-3 gap-3 w-10/12 mx-auto">
         <div className="col-span-2 gap-5">
            <div className="flex justify-between py-10">
               <div className="flex gap-3 px-2">
                  <Notifications notifications={notifications} />
                  <Chat />
               </div>
               <div className="w-9/12">
                  <Search />
               </div>
            </div>
            <div className="flex gap-5 pt-12 px-2">
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
            <div>
               <Chart />
            </div>
         </div>
         <div className="col-span-1 flex flex-col gap-5">
            <div>
               <ProfileCard />
            </div>
            <div className="flex flex-col gap-4">
               {folders.map((folder) => (
                  <Folder folder={folder} key={folder.id} />
               ))}
            </div>
         </div>
      </div>
   )
}

export default HomeContainer

"use client"

import { Avatar, Divider } from "@nextui-org/react"
import { IProfile } from "../pages/home/data"

interface IProps {
   profile: IProfile
}

const ProfileCard: React.FC<IProps> = ({ profile }) => {
   return (
      <div className="hidden row-span-1 lg:flex flex-col justify-center">
         <div
            className="
               lg:flex
               flex-col
               gap-5 shadow-xl
               bg-gray-200
               rounded-[31px]
               p-10
               w-[400px]
               h-[300px]
               m-auto
               relative
               hidden
            "
         >
            <div className="flex justify-center">
               <Avatar
                  isBordered
                  src={profile.avatar || "/assets/avatar.png"}
                  className="
                     absolute
                     top-[-40px]
                     w-[130px]
                     h-[130px]
                     bg-gradient-to-br
                     from-blue-300
                     to-red-200
                     p-4
                  "
               />
            </div>
            <div className="flex flex-col justify-center items-center gap-2 pt-14">
               <div className="text-[#242730] text-2xl font-bold">
                  {profile.fullName || "هنوز ثبت نشده"}
               </div>
               <div className="text-2xl text-[#959BA5]">{profile.email}</div>
            </div>
            <div className="flex gap-10 justify-center">
               <div className="text-[#959BA5] text-4xl">کلاس</div>
               <Divider orientation="vertical" className="h-[60px]" />
               <div className="text-[#959BA5] text-4xl">
                  {profile.classNumber}
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProfileCard

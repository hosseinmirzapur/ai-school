"use client"

import {
   Avatar,
   Divider,
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@nextui-org/react"
import { IProfile } from "../pages/home/data"

interface IProps {
   profile: IProfile
}

const ProfileCard: React.FC<IProps> = ({ profile }) => {
   return (
      <Popover placement="bottom" showArrow arrowSize={32}>
         <PopoverTrigger>
            <Avatar
               isBordered
               color="secondary"
               src={profile.avatar || "/assets/avatar.png"}
               className="
                  w-32
                  h-32
                  object-cover
                  bg-gradient-to-br
                  from-blue-300
                  to-red-200
                  p-4
               "
            />
         </PopoverTrigger>
         <PopoverContent>
            <div
               className="
                  grid
                  grid-rows-3
                  w-[300px]
                  h-[200px]
                  place-items-center
                  rounded-3xl
                  z-30
               "
            >
               <div className="text-[#242730] text-xl font-bold">
                  {profile.fullName || "هنوز ثبت نشده"}
               </div>
               <div className="text-xl text-[#959BA5]">{profile.email}</div>
               <div className="flex gap-10 justify-center">
                  <div className="text-[#959BA5] text-2xl">کلاس</div>
                  <Divider orientation="vertical" className="h-[60px]" />
                  <div className="text-[#959BA5] text-2xl">
                     {profile.classNumber}
                  </div>
               </div>
            </div>
         </PopoverContent>
      </Popover>
   )
}

export default ProfileCard

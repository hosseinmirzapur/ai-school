"use client"

import ProfileCard from "@/components/students/ProfileCard"
import { profile, rankings } from "./data"
import Rankings from "@/components/students/Rankings"

const LeftSide = () => {
   return (
      <div className="col-span-1 grid grid-rows-2">
         <div>
            Profile
            {/* <ProfileCard profile={profile} /> */}
         </div>
         <div>
            rankings
            {/* <Rankings chartData={rankings} /> */}
         </div>
      </div>
   )
}

export default LeftSide

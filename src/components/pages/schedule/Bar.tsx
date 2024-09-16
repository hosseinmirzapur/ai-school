"use client"

import {
   Popover,
   PopoverContent,
   PopoverTrigger,
   Tooltip,
} from "@nextui-org/react"
import { Subject } from "./WeeklyChart"

interface IProps {
   subject: Subject
   bgColor: string
   textColor: string
   width: number
}

const Bar: React.FC<IProps> = ({ subject, bgColor, textColor, width }) => {
   return (
      <Popover showArrow color="secondary">
         <PopoverTrigger>
            <div
               className="flex items-center justify-center h-20 md:h-14 p-2 rounded-[8px] cursor-pointer"
               style={{
                  backgroundColor: bgColor,
                  color: textColor,
                  width,
               }}
            >
               <span className="flex justify-center items-center text-xl md:text-lg mx-auto">
                  {subject.title}
               </span>
            </div>
         </PopoverTrigger>
         <PopoverContent>
            <span>{`${subject.duration / 60} دقیقه`}</span>
         </PopoverContent>
      </Popover>
   )
}

export default Bar

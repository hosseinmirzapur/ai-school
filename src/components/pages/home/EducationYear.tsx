"use client"

import { Dispatch, SetStateAction, useState } from "react"
import { GoChevronLeft, GoChevronRight } from "react-icons/go"

interface IProps {
   setYear: Dispatch<SetStateAction<number>>
   year: number
}

const EducationYear: React.FC<IProps> = ({ setYear, year }) => {
   // functions
   const increment = () => setYear((year) => year + 1)
   const decrement = () => setYear((year) => year - 1)

   return (
      <div className="flex justify-between w-11/12">
         <div className="flex gap-3 items-center font-bold transition-all duration-300">
            <GoChevronRight
               size={20}
               className="hover:cursor-pointer hover:animate-pulse"
               onClick={increment}
            />
            <span className="transition-all duration-300">{year}</span>
            <GoChevronLeft
               size={20}
               className="hover:cursor-pointer hover:animate-pulse"
               onClick={decrement}
            />
         </div>
         <div className="text-2xl font-bold">سال تحصیلی</div>
      </div>
   )
}

export default EducationYear

"use client"

import SubjectBooks from "./SubjectBooks"
import { subjectBooks } from "./data"

const SourcesContainer = () => {
   return (
      <div
         className="
            flex
            w-full
            items-center
            h-full
            py-[54px]
         "
      >
         <div
            className="
               bg-gradient-to-tr
               from-blue-200
               to-red-200
               w-11/12
               lg:py-10
               py-5
               h-auto
               lg:h-[100vh]
               mx-auto
               rounded-3xl
               shadow-md
               flex
               flex-col
               justify-center
               items-center
               gap-10
            "
         >
            <div
               className="
                  flex
                  justify-center
                  text-[50px]
                  md:text-[57px]
                  lg:text-[64px]
                  text-[#4B185C]
                  font-bold
                  text-center
               "
            >
               منابع آموزشی
            </div>
            <SubjectBooks data={subjectBooks} />
         </div>
      </div>
   )
}

export default SourcesContainer

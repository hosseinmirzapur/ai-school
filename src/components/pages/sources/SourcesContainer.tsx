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
            min-h-[100vh]
            py-[54px]
         "
      >
         <div
            className="
               bg-gradient-to-tr
               from-blue-200
               to-red-200
               w-11/12
               h-full
               min-h-[100vh]
               mx-auto
               rounded-3xl
               shadow-md
               flex
               flex-col
               items-center
               justify-evenly
               gap-10
               py-10
               lg:py-0
            "
         >
            <div
               className="
                  flex
                  justify-center
                  text-[50px]
                  text-[#4B185C]
                  font-bold
                  w-full
                  h-full
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

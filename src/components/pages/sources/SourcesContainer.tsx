"use client"

import SubjectBooks, { ISubjectBook } from "./SubjectBooks"

const subjectBooks: ISubjectBook[] = [
   {
      title: "ریاضی",
      imageSrc: "/assets/math.png",
   },
   {
      title: "علوم تجربی",
      imageSrc: "/assets/science.png",
   },
   {
      title: "فارسی",
      imageSrc: "/assets/literature.png",
   },
   {
      title: "مطالعات اجتماعی",
      imageSrc: "/assets/social.png",
   },
   {
      title: "زبان انگلیسی",
      imageSrc: "/assets/english.png",
   },
]

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
               w-[95%]
               lg:py-10
               py-5
               h-auto
               lg:h-[100vh]
               mx-auto
               rounded-[24px]
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

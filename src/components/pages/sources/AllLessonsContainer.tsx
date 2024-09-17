"use client"

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react"
import { GoChevronLeft } from "react-icons/go"
import { subjectBooks } from "./data"
import { useRouter } from "next/navigation"
import LessonBox from "./LessonBox"

interface IProps {
   source: string
}

const AllLessonsContainer: React.FC<IProps> = ({ source }) => {
   // ** States and variables
   const { back } = useRouter()
   const book = subjectBooks.find((book) => book.id == source)

   if (book) {
      return (
         <div
            className="
               flex
               w-full
               h-full
               min-h-[100vh]
               py-[54px]
            "
         >
            <div
               className="
                  grid
                  grid-rows-1
                  space-y-10
                  lg:grid-rows-5
                  lg:space-y-0
                  bg-gradient-to-tr
                  from-blue-200
                  to-red-200
                  w-11/12
                  lg:py-10
                  mx-auto
                  rounded-3xl
                  shadow-md
                  py-10
               "
            >
               {/* Breadcrumbs */}
               <div className="w-10/12 mx-auto flex items-center row-span-1">
                  <Breadcrumbs
                     size="lg"
                     separator={<GoChevronLeft size={22} />}
                  >
                     <BreadcrumbItem href="/sources">
                        <span className="text-lg">منابع آموزشی</span>
                     </BreadcrumbItem>
                     <BreadcrumbItem>
                        <span className="text-lg">{book.title}</span>
                     </BreadcrumbItem>
                  </Breadcrumbs>
               </div>

               {/* Lessons Container */}
               <div
                  className="
                        w-full
                        md:w-11/12
                        mx-auto
                        flex
                        flex-col
                        md:flex-row
                        flex-wrap
                        justify-center
                        items-center
                        gap-10
                        row-span-2
                     "
               >
                  {book.lessons.map((lesson, index) => (
                     <LessonBox key={index} lesson={lesson} book={book} />
                  ))}
               </div>
            </div>
         </div>
      )
   }
   back()
   return <></>
}

export default AllLessonsContainer

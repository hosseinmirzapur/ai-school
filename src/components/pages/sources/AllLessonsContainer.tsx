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
               <div className="w-11/12 mx-auto h-full space-y-10">
                  {/* Breadcrumbs */}
                  <div className="w-full flex gap-4 items-center">
                     <Breadcrumbs
                        className="text-[#4B185C]"
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
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-4
                        place-items-center
                        gap-10
                     "
                  >
                     {book.lessons.map((lesson, index) => (
                        <LessonBox key={index} lesson={lesson} book={book} />
                     ))}
                  </div>
               </div>
            </div>
         </div>
      )
   }
   back()
   return <></>
}

export default AllLessonsContainer

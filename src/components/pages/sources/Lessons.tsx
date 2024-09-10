"use client"

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react"
import { GoChevronLeft } from "react-icons/go"
import { subjectBooks } from "./data"
import { redirect, useRouter } from "next/navigation"

interface IProps {
   source: string
}

const Lessons: React.FC<IProps> = ({ source }) => {
   // ** States and variables
   const { back } = useRouter()
   const book = subjectBooks.find((book) => book.title == source)

   if (book) {
      return (
         <div className="w-11/12 lg:w-10/12 h-[100vh]">
            {/* Breadcrumbs */}
            <div className="w-full flex gap-4 items-center">
               <Breadcrumbs
                  className="text-[#4B185C]"
                  size="lg"
                  separator={<GoChevronLeft size={22} />}
               >
                  <BreadcrumbItem href="/sources">منابع آموزشی</BreadcrumbItem>
                  <BreadcrumbItem>{source}</BreadcrumbItem>
               </Breadcrumbs>
            </div>

            {/* Sources Container */}
            <div className="w-full"></div>
         </div>
      )
   }
   back()
   return <></>
}

export default Lessons

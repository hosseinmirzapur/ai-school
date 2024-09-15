"use client"

import Image from "next/image"

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react"

import { ILesson, ISubjectBook } from "../../data"

import { GoChevronLeft } from "react-icons/go"

interface IProps {
   source?: ISubjectBook
   lesson?: ILesson
}

const Top: React.FC<IProps> = ({ lesson, source }) => {
   return (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center row-span-1">
         {/* BreadCrumbs */}
         <Breadcrumbs
            separator={<GoChevronLeft size={18} />}
            className="p-4 md:p-2 lg:p-0"
            size="lg"
            color="secondary"
         >
            <BreadcrumbItem href="/sources">منابع آموزشی</BreadcrumbItem>
            <BreadcrumbItem href={`/sources/${source?.id}`}>
               {source?.title}
            </BreadcrumbItem>
            <BreadcrumbItem
               href={`/sources/${source?.id}/lessons/${lesson?.id}`}
            >
               {lesson?.name}
            </BreadcrumbItem>
            <BreadcrumbItem color="foreground">بازی</BreadcrumbItem>
         </Breadcrumbs>

         {/* Title */}
         <div className="text-xl font-bold hidden lg:block">بازی کن</div>

         {/* Book Icon */}
         <Image
            src={"/assets/books-on-eachother.png"}
            alt="books-on-eachother-icon"
            width={120}
            height={120}
         />
      </div>
   )
}

export default Top
"use client"

import Image from "next/image"
import Link from "next/link"

import { chunk } from "lodash"
import { ISubjectBook } from "./data"

interface IProps {
   data: ISubjectBook[]
}

const SubjectBooks: React.FC<IProps> = ({ data }) => {
   return (
      <div
         className="
            flex
            flex-col
            flex-wrap
            md:flex-row
            items-center
            justify-center
            gap-14
            w-10/12
            h-full
         "
      >
         {data.map((book, index) => (
            <Link
               key={index}
               className="
                  grid
                  grid-cols-2
                  md:w-[280px]
                  lg:w-[240px]
                  h-auto
                  rounded-[24px]
                  py-2
                  px-1
                  gap-[16px]
                  bg-white/60
                  shadow-md
                  shadow-[#3F27661A]
                  hover:scale-105
                  hover:shadow-lg
                  transition-all
                  cursor-pointer
               "
               href={`/sources/${book.id}`}
            >
               <div className="flex items-center justify-center text-lg font-[700]">
                  {book.title}
               </div>
               <div
                  className="
                           flex
                           justify-center
                           bg-gradient-to-r
                           from-red-200
                           to-blue-300
                           rounded-[16px]
                           p-3
                        "
               >
                  <Image
                     src={book.imageSrc}
                     alt={book.title}
                     width={80}
                     height={96}
                     draggable={false}
                  />
               </div>
            </Link>
         ))}
      </div>
   )

   // return (
   //    <div className="grid grid-cols-1 lg:flex flex-col gap-10 h-full items-center justify-center">
   //       {chunk(data, 3).map((chunk, index) => (
   //          <div
   //             key={index}
   //             className="flex flex-col justify-center items-center lg:flex-row lg:justify-evenly gap-10 lg:gap-16"
   //          >
   //             {chunk.map((book, index) => (
   //                <Link
   //                   key={index}
   //                   className="
   //                      grid
   //                      grid-cols-2
   //                      w-[300px]
   //                      md:w-[270px]
   //                      lg:w-[240px]
   //                      h-auto
   //                      rounded-[24px]
   //                      py-2
   //                      px-1
   //                      gap-[16px]
   //                      bg-white/60
   //                      shadow-md
   //                      shadow-[#3F27661A]
   //                      hover:scale-105
   //                      hover:shadow-lg
   //                      transition-all
   //                      cursor-pointer
   //                   "
   //                   href={`/sources/${book.id}`}
   //                >
   //                   <div className="flex items-center justify-center text-lg font-[700]">
   //                      {book.title}
   //                   </div>
   //                   <div
   //                      className="
   //                         flex
   //                         justify-center
   //                         bg-gradient-to-r
   //                         from-red-200
   //                         to-blue-300
   //                         rounded-[16px]
   //                         p-3
   //                      "
   //                   >
   //                      <Image
   //                         src={book.imageSrc}
   //                         alt={book.title}
   //                         width={80}
   //                         height={96}
   //                         draggable={false}
   //                      />
   //                   </div>
   //                </Link>
   //             ))}
   //          </div>
   //       ))}
   //    </div>
   // )
}

export default SubjectBooks

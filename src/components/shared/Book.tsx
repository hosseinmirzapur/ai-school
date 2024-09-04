"use client"

import Image from "next/image"
import React from "react"

const Book = () => {
   return (
      <Image
         src={"/assets/book.png"}
         alt="book-icon"
         width={100}
         height={100}
         className="
            absolute
            w-[85px]
            h-[85px]
            md:w-[100px]
            md:h-[100px]
            lg:w-[150px]
            lg:h-[150px]
            -bottom-14
            left-1
            md:-left-12
            lg:-bottom-20
            lg:-left-20
            z-20
            rotate-[130deg]
        "
         draggable={false}
      />
   )
}

export default Book

"use client"

import { blurDataUrl } from "@/utils"
import Image from "next/image"

const Pen = () => {
	return (
		<Image
			src={"/assets/pen.png"}
			alt="pen-icon"
			width={100}
			height={100}
			className="
            absolute
            w-[55px]
            h-[55px]
            md:w-[70px]
            md:h-[70px]
            lg:w-[130px]
            lg:h-[130px]
            -top-10
            -right-2
            md:-top-12
            md:-right-12
            lg:-top-24
            lg:-right-24
            z-20
         "
			draggable={false}
			placeholder="blur"
			blurDataURL={blurDataUrl}
		/>
	)
}

export default Pen

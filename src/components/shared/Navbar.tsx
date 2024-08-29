"use client"

import { useState } from "react"
import Link from "next/link"

import { IconType } from "react-icons"
import { BiSolidBook } from "react-icons/bi"
import { FaCalendarAlt } from "react-icons/fa"
import { MdMail } from "react-icons/md"
import { RiCompassFill, RiLogoutBoxFill } from "react-icons/ri"
import { TbHomeFilled } from "react-icons/tb"
import { Divider } from "@nextui-org/react"
import { PiGearSixFill } from "react-icons/pi"

interface NavbarItem {
   id: number
   title: string
   href: string
   Icon: IconType
}

const navbarItems: NavbarItem[] = [
   {
      id: 1,
      title: "خانه",
      href: "/",
      Icon: TbHomeFilled,
   },
   {
      id: 2,
      title: "جستجو",
      href: "#",
      Icon: RiCompassFill,
   },
   {
      id: 3,
      title: "منابع آموزشی",
      href: "#",
      Icon: BiSolidBook,
   },
   {
      id: 4,
      title: "برنامه هفتگی",
      href: "#",
      Icon: FaCalendarAlt,
   },
   {
      id: 5,
      title: "صندوق پیام",
      href: "#",
      Icon: MdMail,
   },
]

const secondNavbaritems: NavbarItem[] = [
   {
      id: 6,
      title: "تنظیمات",
      href: "#",
      Icon: PiGearSixFill,
   },
   {
      id: 7,
      title: "خروج",
      href: "#",
      Icon: RiLogoutBoxFill,
   },
]

const Navbar = () => {
   // ** states
   const [selected, setSelected] = useState(1)

   // ** functions
   const handleLink = (item: NavbarItem) => {
      setSelected(item.id)
   }

   const isActive = (item: NavbarItem) => {
      return selected == item.id
   }

   return (
      <div
         className="
            w-[272px]
            rounded-tr-[24px]
            rounded-br-[24px]
            bg-gradient-to-tr
            from-purple-600
            to-indigo-600
				flex
				justify-end
        	"
      >
         <div className="flex flex-col gap-8 mt-[100px] transition-all duration-400 ease-in-out">
            {navbarItems.map((item) => (
               <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => handleLink(item)}
                  className={`
							flex
							items-center
							h-[65px]
							bg-none
							w-[230px]
							px-5
							gap-[8px]
							rounded-r-full
						   ${isActive(item) ? "bg-white" : "bg-none"}
							transition-all
							duration-400
							ease-in-out
							hover:shadow-2xl
						`}
               >
                  <item.Icon
                     size={24}
                     className={`${
                        isActive(item) ? "text-black" : "text-white"
                     } transition-all duration-400 ease-in-out`}
                  />
                  <span
                     className={`${
                        isActive(item) ? "text-black" : "text-white"
                     } text-xl transition-all duration-400 ease-in-out`}
                  >
                     {item.title}
                  </span>
               </Link>
            ))}
            <Divider orientation="horizontal" className="text-white" />
            {secondNavbaritems.map((item) => (
               <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => handleLink(item)}
                  className={`
							flex
							items-center
							h-[65px]
							bg-none
							w-[230px]
							px-5
							gap-[8px]
							rounded-r-full
						   ${isActive(item) ? "bg-white" : "bg-none"}
							transition-all
							duration-400
							ease-in-out
							hover:shadow-2xl
						`}
               >
                  <item.Icon
                     size={24}
                     className={`${
                        isActive(item) ? "text-black" : "text-white"
                     } transition-all duration-400 ease-in-out`}
                  />
                  <span
                     className={`${
                        isActive(item) ? "text-black" : "text-white"
                     } text-xl transition-all duration-400 ease-in-out`}
                  >
                     {item.title}
                  </span>
               </Link>
            ))}
         </div>
      </div>
   )
}

export default Navbar

"use client"

import Link from "next/link"
import { useState } from "react"

import { IconType } from "react-icons"
import { BiSolidBook } from "react-icons/bi"
import { FaCalendarAlt } from "react-icons/fa"
import { MdMail } from "react-icons/md"
import { RiCompassFill, RiLogoutBoxFill } from "react-icons/ri"
import { TbHomeFilled } from "react-icons/tb"
import { PiGearSixFill } from "react-icons/pi"
import { AiOutlineExpandAlt, AiOutlineShrink } from "react-icons/ai"
import { Tooltip } from "@nextui-org/react"

interface NavbarItem {
   id: number
   title: string
   href: string
   Icon: IconType
}

export const navbarItems: NavbarItem[] = [
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

export const secondNavbarItems: NavbarItem[] = [
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
   const NavbarTooltip = ({
      item,
      expanded,
   }: {
      item: NavbarItem
      expanded: boolean
   }) => {}
   // ** states
   const [selected, setSelected] = useState(1)
   const [expanded, setExpanded] = useState(true)

   // ** functions
   const toggleExpansion = () => setExpanded(!expanded)

   const handleLink = (item: NavbarItem) => {
      setSelected(item.id)
   }

   const isActive = (item: NavbarItem) => {
      return selected == item.id
   }

   return (
      <div
         className={`
            ${expanded ? "md:w-[200px] lg:w-[272px]" : "w-[100px]"}
            rounded-tr-[24px]
            rounded-br-[24px]
            bg-gradient-to-tr
            from-purple-600
            to-indigo-600
				flex
            ${expanded ? "justify-end" : "justify-center"}
            gap-x-14
            relative
            transition-all
         `}
      >
         <Tooltip
            content={expanded ? "جمع کردن منو" : "باز کردن منو"}
            placement="right-end"
         >
            <div
               className={`
                  flex
                  text-black
                  bg-white
                  hover:bg-purple-600
                  hover:text-white
                  hover:shadow-2xl
                  transition-all
                  rounded-full
                  p-1
                  w-[32px]
                  h-[32px]
                  justify-center
                  items-center
                  absolute
                  top-5
                  ${expanded ? "left-5" : "left-auto"}
               `}
            >
               {expanded ? (
                  <AiOutlineShrink
                     size={28}
                     className="cursor-pointer"
                     onClick={toggleExpansion}
                  />
               ) : (
                  <AiOutlineExpandAlt
                     size={28}
                     className="cursor-pointer"
                     onClick={toggleExpansion}
                  />
               )}
            </div>
         </Tooltip>

         <div className="flex flex-col gap-6 mt-[80px] transition-all duration-400 ease-in-out">
            <hr className="text-white w-full h-[1px] opacity-50 mx-auto" />
            {navbarItems.map((item) => {
               if (expanded) {
                  return (
                     <Link
                        href={item.href}
                        onClick={() => handleLink(item)}
                        className={`
                           flex
                           items-center
                           ${expanded ? "" : "justify-center"}
                           h-[60px]
                           bg-none
                           ${
                              expanded
                                 ? "md:w-[180px] lg:w-[230px]"
                                 : "w-[60px]"
                           }
                           ${expanded ? "px-5" : "px-2"}
                           gap-[8px]
                           ${expanded ? "rounded-r-full" : "rounded-full"}
                           rounded-r-full
                           ${isActive(item) ? "bg-white" : "bg-none"}
                           transition-all
                           duration-400
                           ease-in-out
                           hover:shadow-2xl
                        `}
                     >
                        <item.Icon
                           size={32}
                           className={`${
                              isActive(item) ? "text-black" : "text-white"
                           } transition-all duration-400 ease-in-out`}
                        />
                        <span
                           className={`
                              ${isActive(item) ? "text-black" : "text-white"}
                              text-xl
                              transition-all
                              duration-400
                              ease-in-out
                              ${expanded ? "block" : "hidden"}
                              `}
                        >
                           {item.title}
                        </span>
                     </Link>
                  )
               }
               return (
                  <Tooltip
                     placement="right"
                     content={expanded ? "" : item.title}
                     key={item.id}
                     className="transition-all"
                  >
                     <Link
                        href={item.href}
                        onClick={() => handleLink(item)}
                        className={`
                           flex
                           items-center
                           ${expanded ? "" : "justify-center"}
                           h-[60px]
                           bg-none
                           ${
                              expanded
                                 ? "md:w-[180px] lg:w-[230px]"
                                 : "w-[60px]"
                           }
                           ${expanded ? "px-5" : "px-2"}
                           gap-[8px]
                           ${expanded ? "rounded-r-full" : "rounded-full"}
                           rounded-r-full
                           ${isActive(item) ? "bg-white" : "bg-none"}
                           transition-all
                           duration-400
                           ease-in-out
                           hover:shadow-2xl
                        `}
                     >
                        <item.Icon
                           size={32}
                           className={`${
                              isActive(item) ? "text-black" : "text-white"
                           } transition-all duration-400 ease-in-out`}
                        />
                        <span
                           className={`
                              ${isActive(item) ? "text-black" : "text-white"}
                              text-xl
                              transition-all
                              duration-400
                              ease-in-out
                              ${expanded ? "block" : "hidden"}
                           `}
                        >
                           {item.title}
                        </span>
                     </Link>
                  </Tooltip>
               )
            })}
            <hr className="text-white w-full h-[1px] opacity-50 mx-auto" />
            {secondNavbarItems.map((item) => {
               if (expanded) {
                  return (
                     <Link
                        href={item.href}
                        onClick={() => handleLink(item)}
                        className={`
                           flex
                           items-center
                           ${expanded ? "" : "justify-center"}
                           h-[60px]
                           bg-none
                           ${
                              expanded
                                 ? "md:w-[180px] lg:w-[230px]"
                                 : "w-[60px]"
                           }
                           ${expanded ? "px-5" : "px-2"}
                           gap-[8px]
                           ${expanded ? "rounded-r-full" : "rounded-full"}
                           rounded-r-full
                           ${isActive(item) ? "bg-white" : "bg-none"}
                           transition-all
                           duration-400
                           ease-in-out
                           hover:shadow-2xl
                        `}
                     >
                        <item.Icon
                           size={32}
                           className={`${
                              isActive(item) ? "text-black" : "text-white"
                           } transition-all duration-400 ease-in-out`}
                        />
                        <span
                           className={`
                              ${isActive(item) ? "text-black" : "text-white"}
                              text-xl
                              transition-all
                              duration-400
                              ease-in-out
                              ${expanded ? "block" : "hidden"}
                              `}
                        >
                           {item.title}
                        </span>
                     </Link>
                  )
               }
               return (
                  <Tooltip
                     placement="right"
                     content={expanded ? "" : item.title}
                     key={item.id}
                     className="transition-all"
                  >
                     <Link
                        href={item.href}
                        onClick={() => handleLink(item)}
                        className={`
                           flex
                           items-center
                           ${expanded ? "" : "justify-center"}
                           h-[60px]
                           bg-none
                           ${
                              expanded
                                 ? "md:w-[180px] lg:w-[230px]"
                                 : "w-[60px]"
                           }
                           ${expanded ? "px-5" : "px-2"}
                           gap-[8px]
                           ${expanded ? "rounded-r-full" : "rounded-full"}
                           rounded-r-full
                           ${isActive(item) ? "bg-white" : "bg-none"}
                           transition-all
                           duration-400
                           ease-in-out
                           hover:shadow-2xl
                        `}
                     >
                        <item.Icon
                           size={32}
                           className={`${
                              isActive(item) ? "text-black" : "text-white"
                           } transition-all duration-400 ease-in-out`}
                        />
                        <span
                           className={`
                              ${isActive(item) ? "text-black" : "text-white"}
                              text-xl
                              transition-all
                              duration-400
                              ease-in-out
                              ${expanded ? "block" : "hidden"}
                           `}
                        >
                           {item.title}
                        </span>
                     </Link>
                  </Tooltip>
               )
            })}
         </div>
      </div>
   )
}

export default Navbar

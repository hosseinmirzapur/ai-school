"use client"

import { useState } from "react"

import {
   Navbar,
   NavbarMenuToggle,
   NavbarMenu,
   NavbarMenuItem,
} from "@nextui-org/react"

import { navbarItems, secondNavbarItems } from "./Navbar"
import Link from "next/link"

const MobileNavbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)

   return (
      <Navbar onMenuOpenChange={setIsMenuOpen}>
         <NavbarMenuToggle className="lg:hidden" />
         <NavbarMenu className="lg:hidden">
            {navbarItems.map((item) => (
               <NavbarMenuItem key={item.id}>
                  <Link
                     href={item.href}
                     className={`
						flex
						items-center
						h-[65px]
						bg-none
						px-5
						gap-[8px]
						hover:bg-purple-500
                        hover:text-white
                        transition-all
					`}
                  >
                     <item.Icon size={24} />
                     <span className={`text-xl`}>{item.title}</span>
                  </Link>
               </NavbarMenuItem>
            ))}
            <hr className="text-white w-full h-[1px] opacity-50 mx-auto" />
            {secondNavbarItems.map((item) => (
               <NavbarMenuItem key={item.id}>
                  <Link
                     href={item.href}
                     className={`
							flex
							items-center
							h-[65px]
							bg-none
							px-5
							gap-[8px]
							hover:bg-purple-500
                            hover:text-white
                            transition-all
						`}
                  >
                     <item.Icon size={24} />
                     <span className={`text-xl`}>{item.title}</span>
                  </Link>
               </NavbarMenuItem>
            ))}
         </NavbarMenu>
      </Navbar>
   )
}

export default MobileNavbar

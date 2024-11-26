"use client"

import {
	Navbar,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Spinner,
} from "@nextui-org/react"

import { navbarItems } from "./Navbar"
import Link from "next/link"
import { useState } from "react"
import { useAuthStore } from "@/libs/store"
import { logoutStudent } from "@/libs/axios"
import { useRouter } from "next/navigation"
import { handleError } from "@/libs/axios/helper"
import { Toaster } from "react-hot-toast"

const MobileNavbar = () => {
	// ** States and variables
	const [waiting, setWaiting] = useState(false)
	const { logout } = useAuthStore()
	const router = useRouter()

	// ** Functions
	const handleLogout = async () => {
		setWaiting(true)
		try {
			await logoutStudent()
			logout()
			router.push("/auth")
		} catch (error) {
			handleError(error)
		} finally {
			setWaiting(false)
		}
	}
	return (
		<>
			<Navbar className="block md:hidden bg-purple-700 text-white">
				<NavbarMenuToggle className="lg:hidden font-bold" />
				<NavbarMenu className="lg:hidden">
					{waiting ? (
						<NavbarMenuItem>
							<Spinner size="lg" color="secondary" />
						</NavbarMenuItem>
					) : (
						<>
							{navbarItems.slice(0, 5).map((item) => (
								<NavbarMenuItem key={item.id}>
									<Link
										href={item.href}
										className={`flex items-center h-[65px] bg-none px-5 gap-[8px] rounded-2xl hover:bg-purple-500 hover:text-white transition-all`}
									>
										<item.Icon size={24} />
										<span className={`text-xl`}>{item.title}</span>
									</Link>
								</NavbarMenuItem>
							))}
							<hr className="text-white w-full h-[1px] opacity-50 mx-auto" />
							{navbarItems.slice(5).map((item) => (
								<NavbarMenuItem key={item.id}>
									<Link
										href={item.href}
										onClick={(e) => {
											if (item.href == "/logout") {
												e.preventDefault()
												handleLogout()
											}
										}}
										className={`flex items-center h-[65px] bg-none px-5 gap-[8px] rounded-2xl hover:bg-purple-500 hover:text-white transition-all`}
									>
										<item.Icon size={24} />
										<span className={`text-xl`}>{item.title}</span>
									</Link>
								</NavbarMenuItem>
							))}
						</>
					)}
				</NavbarMenu>
			</Navbar>
			<Toaster />
		</>
	)
}

export default MobileNavbar

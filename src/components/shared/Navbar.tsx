"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Spinner, Tooltip } from "@nextui-org/react"
import { usePathname, useRouter } from "next/navigation"
import { TbHomeFilled } from "react-icons/tb"
import { RiCompassFill, RiLogoutBoxFill } from "react-icons/ri"
import { BiSolidBook } from "react-icons/bi"
import { FaCalendarAlt } from "react-icons/fa"
import { MdMail } from "react-icons/md"
import { PiGearSixFill } from "react-icons/pi"
import { AiOutlineExpandAlt, AiOutlineShrink } from "react-icons/ai"
import { BsArrowLeft } from "react-icons/bs"
import { handleError } from "@/libs/axios/helper"
import { Toaster } from "react-hot-toast"
import { logoutStudent } from "@/libs/axios"
import { useAuthStore } from "@/libs/store"

export const navbarItems = [
	{ id: 1, title: "خانه", href: "/", Icon: TbHomeFilled },
	{ id: 2, title: "جستجو", href: "/search", Icon: RiCompassFill },
	{ id: 3, title: "منابع آموزشی", href: "/sources", Icon: BiSolidBook },
	{ id: 4, title: "برنامه هفتگی", href: "/schedule", Icon: FaCalendarAlt },
	{ id: 5, title: "صندوق پیام", href: "/notifications", Icon: MdMail },
	{ id: 6, title: "تنظیمات", href: "/settings", Icon: PiGearSixFill },
	{
		id: 7,
		title: "خروج",
		href: "/logout",
		Icon: RiLogoutBoxFill,
	},
]

const Navbar = () => {
	// ** States and variables
	const [selected, setSelected] = useState(0)
	const [expanded, setExpanded] = useState(true)
	const [waiting, setWaiting] = useState(false)
	const router = useRouter()
	const pathname = usePathname()
	const { logout } = useAuthStore()

	// ** Functions
	const toggleExpansion = () => setExpanded((prev) => !prev)

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

	useEffect(() => {
		const path = pathname || "/"
		const matchedItem = navbarItems.find((item) => item.href === path)
		setSelected(matchedItem?.id || 0)
	}, [pathname, router])

	const renderItem = ({
		id,
		title,
		href,
		Icon,
	}: (typeof navbarItems)[number]) => (
		<Tooltip
			key={id}
			content={expanded ? <BsArrowLeft size={20} /> : title}
			placement="right"
			color="secondary"
			radius="full"
		>
			<Link
				href={href}
				onClick={(e) => {
					if (href == "/logout") {
						e.preventDefault()
						handleLogout()
					}
				}}
				className={`flex items-center gap-2 h-[60px] w-[60px] mx-auto px-${
					expanded ? "5" : "2"
				} rounded-3xl transition-all ${
					expanded ? "justify-start w-full" : "justify-center"
				} ${
					selected === id
						? "bg-white text-black shadow-xl"
						: "text-white hover:shadow-2xl"
				}`}
			>
				<Icon size={32} />
				{expanded && <span className="text-xl">{title}</span>}
			</Link>
		</Tooltip>
	)

	return (
		<>
			<div
				className={`hidden min-h-screen relative md:flex flex-col gap-6 transition-all ${
					expanded ? "w-[272px]" : "w-[100px] justify-center"
				} bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-tr-2xl rounded-br-2xl`}
			>
				<Tooltip
					content={expanded ? "جمع کردن منو" : "باز کردن منو"}
					placement="right-end"
				>
					<div
						onClick={toggleExpansion}
						className="absolute top-5 left-5 p-2 rounded-full bg-white hover:bg-purple-600 cursor-pointer shadow-lg"
					>
						{expanded ? (
							<AiOutlineShrink size={28} />
						) : (
							<AiOutlineExpandAlt size={28} />
						)}
					</div>
				</Tooltip>

				<div
					className={`${
						expanded ? "mt-24 px-1" : "mt-0"
					} flex flex-col gap-7`}
				>
					{waiting ? (
						<Spinner color="secondary" size="lg" />
					) : (
						<>
							{navbarItems.slice(0, 5).map(renderItem)}
							<hr className="w-full border-white opacity-50" />
							{navbarItems.slice(5).map(renderItem)}
						</>
					)}
				</div>
			</div>
			<Toaster />
		</>
	)
}

export default Navbar

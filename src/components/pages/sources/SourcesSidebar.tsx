"use client"

import { Button, Tooltip } from "@nextui-org/react"
import Link from "next/link"
import { useState } from "react"
import { CiMenuFries } from "react-icons/ci"
import { MdOutlineClose, MdOutlineQuiz } from "react-icons/md"
import { TfiWrite } from "react-icons/tfi"

const SourcesSidebar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const navItems = [
		{ name: "تکالیف", icon: <TfiWrite size={30} />, href: "/homework" },
		{ name: "کوئیز", icon: <MdOutlineQuiz size={30} />, href: "/quiz" },
	]

	const toggleSidebar = () => setIsOpen(!isOpen)

	return (
		<div
			className={`flex flex-col justify-center items-center p-3 absolute z-20 right-0 top-0 rounded-tr-3xl bg-gradient-to-b from-secondary-100 to-primary-100 transition-all duration-800 ${
				isOpen
					? "w-full shadow-lg rounded-t-3xl gap-10"
					: "w-12 md:w-16 lg:w-20"
			}`}
		>
			<Tooltip
				content={isOpen ? "بستن منو" : "باز کردن منو"}
				placement="left-end"
			>
				<Button
					isIconOnly
					onClick={toggleSidebar}
					color="primary"
					variant="flat"
					size="sm"
				>
					{isOpen ? (
						<MdOutlineClose size={22} />
					) : (
						<CiMenuFries size={22} />
					)}
				</Button>
			</Tooltip>

			<nav className="grid grid-cols-2 w-11/12 mx-auto">
				{navItems.map((item) =>
					isOpen ? (
						<Link
							key={item.name}
							href={item.href}
							className="flex items-center justify-center p-2 gap-5 rounded hover:bg-primary-200 transition-all w-full"
						>
							{item.icon}
							<span>{item.name}</span>
						</Link>
					) : (
						<></>
					),
				)}
			</nav>
		</div>
	)
}

export default SourcesSidebar

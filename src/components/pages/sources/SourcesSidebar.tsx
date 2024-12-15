"use client"

import {
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
} from "@nextui-org/react"
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
		<>
			<Button
				onPress={toggleSidebar}
				color="primary"
				variant="flat"
				size="lg"
			>
				{isOpen ? <MdOutlineClose size={22} /> : <CiMenuFries size={22} />}
				<span>امتحانات و تکالیف</span>
			</Button>
			<Drawer
				isOpen={isOpen}
				onOpenChange={toggleSidebar}
				backdrop="blur"
				classNames={{
					base: "bg-gradient-to-bl from-secondary-200 to-primary-100",
				}}
				size="sm"
				radius="none"
			>
				<DrawerContent>
					{() => (
						<>
							<DrawerHeader>امتحانات و تکالیف</DrawerHeader>
							<DrawerBody className="pt-16 space-y-5">
								{navItems.map((item) =>
									isOpen ? (
										<Link
											key={item.name}
											href={item.href}
											className="flex items-center justify-start p-3 gap-5 rounded-xl bg-secondary-100 hover:bg-primary-200 transition-all w-full shadow-lg"
										>
											{item.icon}
											<span>{item.name}</span>
										</Link>
									) : (
										<></>
									),
								)}
							</DrawerBody>
						</>
					)}
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default SourcesSidebar

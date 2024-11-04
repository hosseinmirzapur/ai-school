"use client"

import { Button, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react"
import Link from "next/link"

interface Header {
	title: string
	href: string
}

const headers: Header[] = [
	{
		title: "درباره ما",
		href: "/about-us",
	},
	{
		title: "تماس با ما",
		href: "/contact-us",
	},
]

const DefaultHeader = () => {
	return (
		<Navbar
			className="w-full flex justify-end items-center pt-5 rounded-3xl bg-gray-100"
			position="static"
		>
			{/* Normal View */}
			<NavbarContent
				className="hidden md:flex space-x-16 gap-16"
				justify="end"
			>
				{headers.map((header, index) => (
					<NavbarItem key={index}>
						<Link href={header.href}>
							<Button
								color="secondary"
								variant="light"
								size="lg"
								className="text-lg font-bold"
							>
								{header.title}
							</Button>
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>
		</Navbar>
	)
}

export default DefaultHeader

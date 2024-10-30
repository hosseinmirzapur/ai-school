"use client"

import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react"
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
		<Navbar className="w-full flex justify-end items-center pt-5 rounded-3xl">
			{/* Normal View */}
			<NavbarContent
				className="hidden md:flex space-x-16 gap-16"
				justify="end"
			>
				{headers.map((header, index) => (
					<NavbarItem key={index}>
						<Link href={header.href} className="text-lg font-bold">
							{header.title}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>
		</Navbar>
	)
}

export default DefaultHeader

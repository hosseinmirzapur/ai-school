"use client"

import Link from "next/link"
import {
	Navbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/react"

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

const DefaultMobileHeader = () => {
	return (
		<Navbar className="md:hidden">
			{/* Mobile View */}
			<NavbarContent>
				<NavbarMenuToggle className="md:hidden" />
				<NavbarMenu className="space-y-5">
					{headers.map((header, index) => (
						<NavbarMenuItem
							key={index}
							className="
								flex justify-center items-center
								bg-secondary-100 hover:bg-secondary-200
								rounded-xl
								h-14
								cursor-pointer
							"
						>
							<Link href={header.href}>{header.title}</Link>
						</NavbarMenuItem>
					))}
				</NavbarMenu>
			</NavbarContent>
		</Navbar>
	)
}

export default DefaultMobileHeader

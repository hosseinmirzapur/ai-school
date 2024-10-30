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
				<NavbarMenu>
					{headers.map((header, index) => (
						<NavbarMenuItem key={index}>
							<Link href={header.href}>{header.title}</Link>
						</NavbarMenuItem>
					))}
				</NavbarMenu>
			</NavbarContent>
		</Navbar>
	)
}

export default DefaultMobileHeader

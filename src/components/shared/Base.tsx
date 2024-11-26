"use client"

import MobileNavbar from "./MobileNavbar"
import Navbar from "./Navbar"
import Pen from "./Pen"
import Book from "./Book"
import { useAuthStore } from "@/libs/store"
import AccessDenied from "./AccessDenied"

interface IProps {
	children: React.ReactNode
	needsAuth: boolean
}

const Base: React.FC<IProps> = ({ children, needsAuth }) => {
	// ** States and variables
	const { isAuthenticated } = useAuthStore()

	return (
		<>
			{/* Mobile Navbar */}
			<MobileNavbar />

			{/* Base Container */}
			<div className="flex justify-center w-11/12 md:w-10/12 mx-auto bg-gray-200 rounded-[24px] z-10 my-14 md:my-20 lg:my-32 relative min-h-screen h-full">
				{/* Corner Icons */}
				<Pen />
				<Book />

				{/* Main Navbar */}
				<Navbar />

				{/* Inside Components */}
				{needsAuth && isAuthenticated ? <>{children}</> : <AccessDenied />}
			</div>
		</>
	)
}

export default Base

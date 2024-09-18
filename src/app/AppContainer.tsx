"use client"

import { NextUIProvider } from "@nextui-org/react"
import { Toaster } from "react-hot-toast"

const AppContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<NextUIProvider>
			{children}
			<Toaster position="bottom-right" />
		</NextUIProvider>
	)
}

export default AppContainer

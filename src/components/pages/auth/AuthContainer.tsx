"use client"

import BagAndLaptop from "./BagAndLaptop"
import Entrypoint from "./Entrypoint"

const AuthContainer = () => {
	return (
		<div className="grid place-items-center lg:place-items-stretch lg:grid-cols-2 w-full">
			<Entrypoint />
			<BagAndLaptop />
		</div>
	)
}

export default AuthContainer

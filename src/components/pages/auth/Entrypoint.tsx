"use client"

import { Button } from "@nextui-org/react"
import { useState } from "react"
import LoginModal from "./LoginModal"
import { motion } from "framer-motion"

const Entrypoint = () => {
	// ** States and variables
	const [loginModal, setLoginModal] = useState(false)

	// ** Functions
	const toggleLoginModal = () => setLoginModal((prev) => !prev)

	return (
		<>
			<div className="flex flex-col justify-center w-10/12 mx-auto gap-10">
				<motion.div
					className="flex justify-start h-[80px] text-[50px] font-bold"
					initial={{
						x: 100,
						opacity: 0,
					}}
					animate={{
						x: 0,
						opacity: 1,
					}}
					transition={{
						duration: 0.8,
					}}
				>
					سامانه هوشمند
				</motion.div>
				<motion.div
					className="flex justify-end h-[150px] text-[96px] font-extrabold"
					initial={{
						x: -100,
						opacity: 0,
					}}
					animate={{
						x: 0,
						opacity: 1,
					}}
					transition={{
						duration: 0.8,
					}}
				>
					هوشیار
				</motion.div>
				<motion.div
					className="flex justify-center items-center h-[115px] pt-10 lg:pr-32"
					initial={{
						y: 100,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						duration: 0.8,
					}}
				>
					<Button
						size="lg"
						className="
                            h-[115px]
                            w-[283px]
                            bg-[#624BE1]
                            hover:bg-[#624BE1]/90
                            text-white
                            text-[50px]
                            font-bold
                        "
						variant="shadow"
						onPress={toggleLoginModal}
					>
						ورود
					</Button>
				</motion.div>
			</div>
			<LoginModal open={loginModal} toggleOpen={toggleLoginModal} />
		</>
	)
}

export default Entrypoint

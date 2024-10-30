"use client"

import useAuthStore from "@/libs/store/authStore"
import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
} from "@nextui-org/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { BiUser } from "react-icons/bi"
import { GoLock } from "react-icons/go"

interface IProps {
	open: boolean
	toggleOpen: () => void
}

const LoginModal: React.FC<IProps> = ({ open, toggleOpen }) => {
	// ** States and variables
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [waiting, setWaiting] = useState(false)
	const { login } = useAuthStore()
	const router = useRouter()

	// ** Functions
	const handleLogin = async () => {
		setWaiting(true)
		// first try to login via api then:
		login()
		router.push("/")
	}

	useEffect(() => {
		setUsername("")
		setPassword("")
	}, [open])

	return (
		<Modal
			isOpen={open}
			onOpenChange={toggleOpen}
			isDismissable={false}
			backdrop="blur"
			placement="center"
			classNames={{
				base: "bg-gradient-to-l from-[#624BE1] to-secondary-400 text-[#F2F0FB]",
				closeButton:
					"bg-secondary-100 hover:bg-secondary-200 active:bg-white/20 transition-all",
			}}
		>
			<ModalContent className="space-y-3">
				{(onClose) => (
					<>
						<ModalHeader className="flex justify-center items-center text-2xl font-bold">
							ورود به سامانه هوشیار
						</ModalHeader>
						<ModalBody className="flex flex-col gap-10 justify-center items-center">
							<Input
								dir={"ltr"}
								type="text"
								label={"نام کاربری"}
								isRequired
								color="primary"
								autoFocus
								startContent={<BiUser size={18} />}
								className="w-[80%]"
								errorMessage={"وارد کردن فیلد نام کاربری الزامی است"}
								isInvalid={username == ""}
								onValueChange={setUsername}
							/>
							<Input
								dir={"ltr"}
								type="password"
								label={"کلمه عبور"}
								isRequired
								color="primary"
								startContent={<GoLock size={18} />}
								className="w-[80%]"
								errorMessage={"وارد کردن فیلد کلمه عبور الزامی است"}
								isInvalid={password == ""}
								onValueChange={setPassword}
							/>
						</ModalBody>
						<ModalFooter className="flex justify-around">
							<Button
								onPress={handleLogin}
								color="secondary"
								variant="shadow"
								size="lg"
								isDisabled={username == "" || password == ""}
								isLoading={waiting}
							>
								ورود
							</Button>
							<Button
								onPress={onClose}
								color="danger"
								variant="shadow"
								size="lg"
							>
								لغو
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	)
}

export default LoginModal

"use client"

import { Button, Card } from "@nextui-org/react"
import { useRouter } from "next/navigation"
import { BsArrowReturnLeft } from "react-icons/bs"
import { TbUserCancel } from "react-icons/tb"

const AccessDenied = () => {
	const router = useRouter()

	return (
		<div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-blue-100 w-full px-5">
			<Card
				isHoverable
				className="cursor-pointer max-w-md p-14 bg-white shadow-xl rounded-xl text-center relative"
				classNames={{
					base: "bg-secondary-100",
				}}
			>
				<TbUserCancel
					size={30}
					className="absolute top-5 right-5"
					color="blue"
				/>
				<div>
					<h1 className="text-2xl font-bold text-blue-500 mb-4">
						دسترسی محدود!
					</h1>
				</div>
				<p className="text-gray-600 text-lg mb-6">
					قبل از دسترسی به این قسمت ابتدا باید وارد حساب کاربری خود شوید
				</p>
				<Button
					size="lg"
					variant="shadow"
					color="primary"
					className="w-full font-medium"
					onPress={() => router.push("/auth")}
					startContent={<BsArrowReturnLeft size={22} />}
				>
					بازگشت به صفحه ورود
				</Button>
			</Card>
		</div>
	)
}

export default AccessDenied

"use client"

import { useRouter } from "next/navigation"

import { BsChatTextFill } from "react-icons/bs"

const Chat = () => {
	const { push } = useRouter()

	const goChatPage = () => push("/chat")
	return (
		<div
			className="flex w-10 h-10 justify-center items-center bg-gray-100 rounded-full cursor-pointer hover:shadow-xl"
			dir="rtl"
			onClick={goChatPage}
		>
			<BsChatTextFill size={22} className="rotate-y-180" />
		</div>
	)
}

export default Chat

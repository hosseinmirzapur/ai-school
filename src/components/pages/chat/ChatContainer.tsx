"use client"

import { useEffect, useRef, useState } from "react"

import Bot from "./Bot"
import MessageInput from "./MessageInput"
import MessageList from "./MessageList"
import { IMessage } from "@/types"

const ChatContainer = () => {
	// ** States and variables
	const [chatMessages, setChatMessages] = useState<IMessage[]>([])
	const [appended, setAppended] = useState(false)
	const messageListRef = useRef<HTMLDivElement | null>(null)

	// ** Functions
	const toggleAppended = () => setAppended((curr) => !curr)
	const appendMessage = (message: IMessage) => {
		const newList = [...chatMessages, message]
		setChatMessages(newList)
		toggleAppended()
	}

	useEffect(() => {
		setChatMessages([])
	}, [])

	useEffect(() => {
		if (messageListRef.current) {
			messageListRef.current.scrollTo({
				top: messageListRef.current.scrollHeight,
				behavior: "smooth",
			})
		}
	}, [appended])
	return (
		<div className="w-full h-full py-20">
			<div
				className="
                    w-11/12
                    md:w-10/12
                    h-full
                    mx-auto
                    bg-gradient-to-tr
                    from-pink-400
                    to-purple-400
                    rounded-[24px]
                    relative
                    shadow-lg
                    pb-32
                "
			>
				<Bot />
				<MessageList
					messages={chatMessages}
					messageListRef={messageListRef}
				/>
				<MessageInput append={appendMessage} />
			</div>
		</div>
	)
}

export default ChatContainer

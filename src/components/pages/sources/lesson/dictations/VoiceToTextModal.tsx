"use client"

import { IDictation } from "@/types"
import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Radio,
	RadioGroup,
	Textarea,
} from "@nextui-org/react"
import { useState } from "react"
import DictationImageUpload from "./DictationImageUpload"
import { dictationSubmit } from "@/libs/axios"
import { handleError } from "@/libs/axios/helper"

interface IProps {
	open: boolean
	toggle: () => void
	dictation?: IDictation
	toggleChange: () => void
}

const VoiceToTextModal: React.FC<IProps> = ({
	open,
	toggle,
	dictation,
	toggleChange,
}) => {
	// ** States and variables
	const [sendType, setSendType] = useState<"text" | "image" | string>("text")
	const [text, setText] = useState("")
	const [waiting, setWaiting] = useState(false)

	// ** Functions
	const handleTextSubmit = async () => {
		setWaiting(false)

		if (text === "") return
		if (!dictation) return

		try {
			await dictationSubmit(dictation.id, { text })
			toggleChange()
			setWaiting(false)
			setText("")
			toggle()
		} catch (error) {
			if (error instanceof Error) {
				handleError(error)
			}
		}
	}

	return (
		<Modal
			isOpen={open}
			onOpenChange={toggle}
			placement="center"
			size="2xl"
			backdrop="blur"
			isDismissable={false}
			classNames={{
				base: "bg-gradient-to-l from-[#624BE1] to-secondary-400 text-[#F2F0FB]",
				closeButton:
					"bg-secondary-100 hover:bg-secondary-200 active:bg-white/20 transition-all",
			}}
		>
			<ModalContent>
				{() => (
					<>
						<ModalHeader className="flex items-center justify-center">
							{`ارسال جواب ${dictation?.title}`}
						</ModalHeader>
						<ModalBody className="flex flex-col gap-5">
							<RadioGroup
								label="نحوه ارسال تکلیف را مشخص کنید"
								orientation="horizontal"
								className="w-full"
								color="warning"
								classNames={{
									label: "text-white",
								}}
								value={sendType}
								onValueChange={setSendType}
							>
								<Radio
									value="text"
									classNames={{
										base: [
											"inline-flex m-0 hover:bg-content2 items-center justify-between",
											"max-w-[300px] gap-4",
										],
										label: "text-white",
									}}
								>
									متن
								</Radio>
								<Radio
									value="image"
									classNames={{
										base: [
											"inline-flex m-0 hover:bg-content2 items-center justify-between",
											"max-w-[300px] gap-4",
										],
										label: "text-white",
									}}
								>
									عکس
								</Radio>
							</RadioGroup>

							<div>
								{sendType == "text" ? (
									<Textarea
										isRequired={sendType === "text"}
										label="متن املا"
										labelPlacement="outside"
										classNames={{
											label: "text-white text-lg",
										}}
										variant="flat"
										size="lg"
										onValueChange={setText}
										value={text}
									/>
								) : (
									<DictationImageUpload dictationID={dictation?.id} />
								)}
							</div>
						</ModalBody>
						<ModalFooter>
							{sendType === "text" && (
								<Button
									color="secondary"
									isLoading={waiting}
									onPress={handleTextSubmit}
								>
									ارسال
								</Button>
							)}
							<Button color="danger" onPress={toggle}>
								لغو
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	)
}

export default VoiceToTextModal

"use client"

import { useState } from "react"

import { Button, Textarea } from "@nextui-org/react"

import { GrAttachment } from "react-icons/gr"
import { IoMdSend } from "react-icons/io"

import FileUploadButton from "./FileUploadButton"
import UploadedFile from "./UploadedFile"
import VoiceRecorder from "./VoiceRecorder"
import RecordedFile from "./RecordedFile"

import { IMessage } from "./data"

interface IProps {
	append: (message: IMessage) => void
}

const MessageInput: React.FC<IProps> = ({ append }) => {
	// ** states and variables
	const [inputTxt, setInputText] = useState("")
	const [inputFile, setInputFile] = useState<File | null>(null)
	const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null)

	// ** functions
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			setInputFile(file)
		}
	}

	const emptyTextInput = () => setInputText("")
	const emptyFileInput = () => setInputFile(null)
	const emptyVoice = () => setRecordedBlob(null)

	const fillRecordedBlob = (blob: Blob | null) => setRecordedBlob(blob)

	const addMessage = () => {
		const data: IMessage = {
			hasFile: false,
			role: "user",
		}
		if (inputTxt != "") {
			data.text = inputTxt
		}
		if (recordedBlob && recordedBlob.arrayBuffer.length != 0) {
			data.hasVoice = true
		}
		if (inputFile != null) {
			data.hasFile = true
		}

		if (data.text == null && (!data.hasVoice || !data.hasFile)) {
			return
		}

		// append the new message to the old list
		append(data)
		emptyTextInput()
		emptyFileInput()
		emptyVoice()
	}

	return (
		<div
			className="
				flex
				flex-col
				gap-2
				justify-center
				w-full
				px-4
				md:px-10
				lg:px-16
				mx-auto
				absolute
				bottom-10
			"
		>
			{recordedBlob ? (
				<RecordedFile blob={recordedBlob} />
			) : (
				<UploadedFile file={inputFile} empty={emptyFileInput} />
			)}

			<Textarea
				isInvalid={
					inputTxt == null && inputFile == null && recordedBlob == null
				}
				errorMessage="شما نمیتوانید پیام خالی ارسال کنید"
				onValueChange={(text) => setInputText(text)}
				value={inputTxt}
				minRows={1}
				radius="full"
				size="lg"
				dir={"rtl"}
				classNames={{
					innerWrapper: "items-center",
				}}
				onKeyDown={(e) => {
					if (e.ctrlKey && e.key == "Enter") {
						addMessage()
					}
				}}
				placeholder={recordedBlob == null ? "اینجا بنویسید..." : "صدای شما"}
				startContent={
					<>
						<Button
							size="md"
							isIconOnly
							color="secondary"
							variant="light"
							radius="full"
							onClick={addMessage}
							isDisabled={
								inputTxt == null &&
								inputFile == null &&
								recordedBlob == null
							}
						>
							<IoMdSend size={22} />
						</Button>
						<VoiceRecorder fillRecordedBlob={fillRecordedBlob} />
					</>
				}
				endContent={
					<FileUploadButton
						fileHandler={handleFileChange}
						hidden={
							(recordedBlob && recordedBlob.arrayBuffer.length != 0) ||
							recordedBlob != null
						}
					>
						<Button
							title="آپلود فایل"
							size="md"
							isIconOnly
							color="secondary"
							variant="shadow"
							radius="full"
							className="cursor-pointer"
						>
							<GrAttachment size={22} />
						</Button>
					</FileUploadButton>
				}
			/>
		</div>
	)
}

export default MessageInput

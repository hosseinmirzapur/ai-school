"use client"

import { useRef } from "react"
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@nextui-org/react"

import { AiFillFilePdf } from "react-icons/ai"
import { MdImage } from "react-icons/md"
import { PiMicrosoftWordLogoFill } from "react-icons/pi"

interface IProps {
	children: React.ReactNode
	fileHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
	hidden?: boolean
}

const FileUploadButton: React.FC<IProps> = ({
	children,
	fileHandler,
	hidden,
}) => {
	// ** states and variables
	const imageFileRef = useRef<HTMLInputElement | null>(null)
	const pdfFileRef = useRef<HTMLInputElement | null>(null)
	const wordFileRef = useRef<HTMLInputElement | null>(null)

	// ** functions
	const handleImage = () => {
		if (imageFileRef.current) {
			imageFileRef.current.accept = "image/*"
			imageFileRef.current.click()
		}
	}

	const handlePDF = () => {
		if (pdfFileRef.current) {
			pdfFileRef.current.accept = "application/pdf"
			pdfFileRef.current.click()
		}
	}

	const handleWord = () => {
		if (wordFileRef.current) {
			wordFileRef.current.accept = ".doc,.docx"
			wordFileRef.current.click()
		}
	}

	return hidden ? (
		<></>
	) : (
		<>
			<input hidden type="file" ref={imageFileRef} onChange={fileHandler} />
			<input hidden type="file" ref={pdfFileRef} onChange={fileHandler} />
			<input hidden type="file" ref={wordFileRef} onChange={fileHandler} />
			<Dropdown
				placement="top-start"
				className="bg-gradient-to-b from-blue-100 via-purple-200 to-blue-100"
			>
				<DropdownTrigger>{children}</DropdownTrigger>
				<DropdownMenu>
					<DropdownItem
						key="image"
						variant="shadow"
						color="warning"
						className="group"
						onPress={handleImage}
						startContent={
							<MdImage
								size={24}
								className="text-orange-400 group-hover:text-black"
							/>
						}
					>
						آپلود عکس
					</DropdownItem>
					<DropdownItem
						key="pdf"
						variant="shadow"
						color="danger"
						className="group"
						onPress={handlePDF}
						startContent={
							<AiFillFilePdf
								size={24}
								className="text-red-700 group-hover:text-default"
							/>
						}
					>
						آپلود pdf
					</DropdownItem>
					<DropdownItem
						key="word"
						variant="shadow"
						color="primary"
						className="group"
						onPress={handleWord}
						startContent={
							<PiMicrosoftWordLogoFill
								size={24}
								className="text-blue-800 group-hover:text-default"
							/>
						}
					>
						آپلود ورد
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</>
	)
}

export default FileUploadButton

"use client"

import { dictationSubmit } from "@/libs/axios"
import { useState, useRef } from "react"

interface IProps {
	dictationID?: string | number
}

const DictationImageUpload: React.FC<IProps> = ({ dictationID }) => {
	// ** States and variables
	const [selectedFile, setSelectedFile] = useState<File | null>(null)
	const [uploading, setUploading] = useState<boolean>(false)
	const inputRef = useRef<HTMLInputElement | null>(null)

	// ** Functions
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			setSelectedFile(event.target.files[0])
		}
	}

	const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault()
		if (event.dataTransfer.files) {
			setSelectedFile(event.dataTransfer.files[0])
		}
	}

	const handleUpload = async () => {
		if (dictationID) {
			if (!selectedFile) return

			const formData = new FormData()
			formData.append("image", selectedFile)

			setUploading(true)
			const res = await dictationSubmit(dictationID, formData)
			console.log(res.data.dictation)
		}
	}

	return (
		<div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg">
			<div
				className="border-2 border-dashed border-gray-400 p-8 w-full text-center cursor-pointer"
				onDragOver={(e) => e.preventDefault()}
				onDrop={handleDrop}
				onClick={() => inputRef.current?.click()}
			>
				{selectedFile ? (
					<p className="text-white">{selectedFile.name}</p>
				) : (
					<p className="text-gray-400">
						فایل مورد نظر خود را از این قسمت انتخاب کنید یا آن را در این
						قسمت رها کنید
					</p>
				)}
			</div>
			<input
				type="file"
				accept="image/*"
				ref={inputRef}
				onChange={handleFileChange}
				className="hidden"
			/>
			<button
				onClick={handleUpload}
				disabled={!selectedFile || uploading}
				className="mt-4 bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-500"
			>
				{uploading ? "در حال آپلود..." : "آپلود"}
			</button>
		</div>
	)
}

export default DictationImageUpload

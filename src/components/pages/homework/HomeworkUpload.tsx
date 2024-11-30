"use client"

import { IHomework } from "@/types"
import {
	Autocomplete,
	AutocompleteItem,
	Button,
	Card,
	CardBody,
	CardHeader,
	Input,
	Progress,
	Spinner,
} from "@nextui-org/react"
import { Upload, Trash2 } from "lucide-react"
import { useState } from "react"

interface IProps {
	homework: IHomework[]
}

const HomeworkUpload: React.FC<IProps> = ({ homework }) => {
	// ** States and variables
	const [file, setFile] = useState<File | null>(null)
	const [selectedHomework, setSelectedHomework] = useState("")
	const [uploadProgress, setUploadProgress] = useState(0)
	const [isUploading, setIsUploading] = useState(false)

	// ** Functions
	const handleUpload = () => {
		if (file) {
			setIsUploading(true)
			let progress = 0
			const interval = setInterval(() => {
				progress += 10
				setUploadProgress(progress)
				if (progress >= 100) {
					clearInterval(interval)
					setTimeout(() => {
						setIsUploading(false)
						setUploadProgress(0)
						setFile(null)
						setSelectedHomework("")
					}, 500)
				}
			}, 500)
		}
	}

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files[0]) {
			setFile(event.target.files[0])
		}
	}

	const clearFile = () => {
		setFile(null)
	}

	return (
		<Card>
			<CardHeader className="flex gap-3">
				<Upload size={24} className="text-purple-600" />
				<div className="flex flex-col">
					<p className="text-lg font-semibold">بارگذاری تکلیف</p>
					<p className="text-sm text-default-500">
						لطفاً تکلیف خود را انتخاب کرده و فایل مربوطه را بارگذاری کنید.
					</p>
				</div>
			</CardHeader>
			<CardBody className="flex flex-col gap-10">
				<Autocomplete
					label="تکلیف مورد نظر را انتخاب نمایید"
					className="max-w-md"
					listboxProps={{
						emptyContent: "تکلیفی یافت نشد",
					}}
					onValueChange={setSelectedHomework}
				>
					{homework.map((item, index) => (
						<AutocompleteItem key={index} value={`${item.id}`}>
							{item.title}
						</AutocompleteItem>
					))}
				</Autocomplete>

				<div className="flex flex-col gap-3 max-w-md">
					<Input
						type="file"
						onChange={handleFileChange}
						label="فایل تکلیف"
						radius="md"
						accept="application/pdf, image/png, image/jpg, image/jpeg, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
					/>
					{file && (
						<div className="flex justify-between items-center text-sm text-default-500 bg-default-100 rounded-md p-2">
							<span>{file.name}</span>
							<Button
								color="danger"
								variant="light"
								size="sm"
								isIconOnly
								onPress={clearFile}
							>
								<Trash2 size={16} />
							</Button>
						</div>
					)}
				</div>

				<Button
					color="primary"
					onPress={handleUpload}
					isDisabled={!file || !selectedHomework || isUploading}
					className="mb-4 flex items-center gap-2"
				>
					{isUploading && <Spinner size="sm" />}
					بارگذاری
				</Button>

				{uploadProgress > 0 && (
					<Progress
						aria-label="Uploading..."
						size="md"
						value={uploadProgress}
						color="success"
						showValueLabel={true}
						className="max-w-md"
					/>
				)}
			</CardBody>
		</Card>
	)
}

export default HomeworkUpload

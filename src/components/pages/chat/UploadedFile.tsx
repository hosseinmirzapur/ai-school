"use client"

import { Button, Chip, Tooltip } from "@nextui-org/react"

import { AiOutlineCloseCircle } from "react-icons/ai"
import { CiFileOn } from "react-icons/ci"

interface IProps {
	file?: File | null
	empty: () => void
}

interface TypeResolver {
	text: string
	color?:
		| "secondary"
		| "default"
		| "primary"
		| "success"
		| "warning"
		| "danger"
}

const UploadedFile: React.FC<IProps> = ({ file, empty }) => {
	// ** functions
	const typeResolver = (): TypeResolver | null => {
		if (file) {
			const type = file.type
			if (type.includes("image")) {
				return {
					text: "فایل عکس",
					color: "warning",
				}
			}
			if (type.includes("pdf")) {
				return {
					text: "PDF",
					color: "danger",
				}
			}
			if (type.includes("word")) {
				return {
					text: "فایل ورد",
					color: "primary",
				}
			}

			return {
				text: "نامشخص",
				color: "default",
			}
		}
		return null
	}

	return (
		<div className="w-full flex" dir="ltr">
			{file && (
				<div
					className="
                  grid
                  grid-rows-2
                  justify-center
                  w-[200px]
                  h-[100px]
                  shadow-lg
                  hover:shadow-2xl
                  rounded-xl
                  p-5
                  relative
                  opacity-80
                  bg-gradient-to-br
                  from-purple-300
                  to-blue-300
                  transition-all
                  cursor-pointer
               "
				>
					<div className="flex items-center justify-center">
						<Chip
							endContent={<CiFileOn size={24} />}
							color={typeResolver()?.color}
						>
							{typeResolver()?.text}
						</Chip>
					</div>
					<div className="flex justify-center items-center text-center">
						{file.name}
					</div>
					<Tooltip content="حذف عکس">
						<Button
							className="absolute top-2 right-2"
							isIconOnly
							radius="full"
							color="danger"
							variant="shadow"
							size="sm"
							onClick={empty}
						>
							<AiOutlineCloseCircle size={24} />
						</Button>
					</Tooltip>
				</div>
			)}
		</div>
	)
}

export default UploadedFile

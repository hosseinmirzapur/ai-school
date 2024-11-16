"use client"

import { IDictation } from "@/types"
import {
	Button,
	Chip,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@nextui-org/react"
import { CgMenuGridO } from "react-icons/cg"
import { LuMoreVertical } from "react-icons/lu"
import { MdHearing, MdVoiceChat } from "react-icons/md"

interface IProps {
	dictations: IDictation[]
	toggleVTT: () => void
	toggleDV: () => void
	selectDictation: (dictation: IDictation) => void
}

const DictationList: React.FC<IProps> = ({
	dictations,
	selectDictation,
	toggleDV,
	toggleVTT,
}) => {
	// ** Functions
	const handleDictationStatus = (status: string) => {
		switch (status) {
			case "scored":
				return "نمره داده شده"
			case "not_scored":
				return "در حال نمره دهی"
			case "undone":
				return "ارسال نشده"
			default:
				return "error"
		}
	}

	return (
		<Table
			color="primary"
			className="px-3"
			classNames={{
				wrapper: ["bg-primary-100"],
				th: ["bg-primary-100"],
			}}
		>
			<TableHeader>
				<TableColumn>#</TableColumn>
				<TableColumn>عنوان</TableColumn>
				<TableColumn>تاریخ ایجاد</TableColumn>
				<TableColumn>وضعیت ارسال</TableColumn>
				<TableColumn>
					<CgMenuGridO size={22} />
				</TableColumn>
			</TableHeader>
			<TableBody>
				{dictations.map((dictation, index) => (
					<TableRow key={index}>
						<TableCell>{index + 1}</TableCell>
						<TableCell>{dictation.title}</TableCell>
						<TableCell>{dictation.created_at.toString()}</TableCell>
						<TableCell>
							<Chip
								color={
									dictation.status === "undone"
										? "default"
										: dictation.status === "not_scored"
										? "warning"
										: "success"
								}
							>
								{handleDictationStatus(dictation.status)}
							</Chip>
						</TableCell>
						<TableCell>
							<Dropdown>
								<DropdownTrigger>
									<Button
										variant="ghost"
										color="secondary"
										endContent={<LuMoreVertical size={22} />}
									>
										عملیات
									</Button>
								</DropdownTrigger>
								<DropdownMenu>
									<DropdownItem
										startContent={<MdVoiceChat size={22} />}
										color="secondary"
										variant="faded"
										onPress={() => {
											selectDictation(dictation)
											toggleVTT()
										}}
										isReadOnly={dictation.status !== "undone"}
									>
										ارسال تکلیف
									</DropdownItem>
									<DropdownItem
										startContent={<MdHearing size={22} />}
										color="primary"
										variant="faded"
										onPress={() => {
											selectDictation(dictation)
											toggleDV()
										}}
									>
										شنیدن فایل صوتی
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}

export default DictationList

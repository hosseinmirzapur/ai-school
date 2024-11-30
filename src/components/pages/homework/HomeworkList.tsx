"use client"

import { IHomework } from "@/types"
import {
	Card,
	CardBody,
	CardHeader,
	Chip,
	Spinner,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@nextui-org/react"
import { Book } from "lucide-react"

interface IProps {
	homework: IHomework[]
	loading: boolean
}

const HomeworkList: React.FC<IProps> = ({ homework, loading }) => {
	return (
		<Card>
			<CardHeader className="flex gap-3">
				<Book size={24} className="text-purple-600" />
				<div className="flex flex-col">
					<p className="text-md">تکالیف من</p>
					<p className="text-small text-default-500">
						لیست تکالیف مشخص شده
					</p>
				</div>
			</CardHeader>
			<CardBody>
				{loading ? (
					<Spinner size="lg" color="secondary" />
				) : (
					<Table aria-label="Homework assignments table">
						<TableHeader>
							<TableColumn>درس</TableColumn>
							<TableColumn>عنوان</TableColumn>
							<TableColumn>مهلت ارسال</TableColumn>
							<TableColumn>وضعیت</TableColumn>
						</TableHeader>
						<TableBody emptyContent={"هنوز تکلیفی قرار داده نشده است"}>
							{homework.map((item) => (
								<TableRow key={item.id}>
									<TableCell>{item.subject}</TableCell>
									<TableCell>{item.title}</TableCell>
									<TableCell>{item.due_date}</TableCell>
									<TableCell>
										<Chip
											color={
												item.status === "graded"
													? "success"
													: item.status === "grading"
													? "warning"
													: "default"
											}
										>
											{item.status === "graded"
												? "تصحیح شده"
												: item.status === "grading"
												? "در حال بررسی"
												: "هنوز ارسال نشده"}
										</Chip>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				)}
			</CardBody>
		</Card>
	)
}

export default HomeworkList

"use client"

import { ISubmission } from "@/types"
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
	User,
} from "@nextui-org/react"
import { CheckCircle } from "lucide-react"

interface IProps {
	submissions: ISubmission[]
	loading: boolean
}

const HomeworkSubmissions: React.FC<IProps> = ({ submissions, loading }) => {
	return (
		<Card className="mt-8">
			<CardHeader className="flex gap-3">
				<CheckCircle size={24} className="text-purple-600" />
				<div className="flex flex-col">
					<p className="text-md">تکالیف ارسال شده</p>
					<p className="text-small text-default-500">
						بررسی وضعیت بررسی تکالیف
					</p>
				</div>
			</CardHeader>
			<CardBody>
				{loading ? (
					<Spinner color="secondary" size="lg" />
				) : (
					<Table aria-label="Submission results table" isStriped>
						<TableHeader>
							<TableColumn>درس</TableColumn>
							<TableColumn>تکلیف</TableColumn>
							<TableColumn>ارسال شده در</TableColumn>
							<TableColumn>نمره نهایی</TableColumn>
							<TableColumn>نظر استاد</TableColumn>
						</TableHeader>
						<TableBody>
							{submissions.map((submission, index) => (
								<TableRow key={`${index + 1}`}>
									<TableCell>
										<User
											avatarProps={{
												src: submission.lesson,
											}}
											name={submission.subject}
										>
											{submission.subject}
										</User>
									</TableCell>
									<TableCell>{submission.homework_title}</TableCell>
									<TableCell>{submission.submitted_at}</TableCell>
									<TableCell>
										{submission.grade ? (
											<Chip>{submission.grade}</Chip>
										) : (
											"نمره داده نشده"
										)}
									</TableCell>
									<TableCell>{submission.feedback || "-"}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				)}
			</CardBody>
		</Card>
	)
}

export default HomeworkSubmissions

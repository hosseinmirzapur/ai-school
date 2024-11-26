"use client"

import React, { useState } from "react"
import {
	Card,
	CardBody,
	CardHeader,
	Button,
	Input,
	Progress,
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	User,
	Chip,
	Breadcrumbs,
	BreadcrumbItem,
} from "@nextui-org/react"
import { Upload, Book, CheckCircle, ChevronLeft } from "lucide-react"

const homeworkData = [
	{
		id: 1,
		subject: "ریاضی",
		title: "تمرین جدول ضرب",
		dueDate: "1403/09/10 15:00",
		status: "not_started",
	},
	{
		id: 2,
		subject: "زبان انگلیسی",
		title: "تمرین Spelling",
		dueDate: "1403/09/11 15:00",
		status: "in_progress",
	},
	{
		id: 3,
		subject: "علوم",
		title: "چرخه حیات گیاهان",
		dueDate: "1403/09/12 18:00",
		status: "submitted",
	},
]

const HomeworkPage = () => {
	const [file, setFile] = useState<File | null>(null)
	const [uploadProgress, setUploadProgress] = useState(0)

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files[0]) {
			setFile(event.target.files[0])
		}
	}

	const handleUpload = () => {
		if (file) {
			// Simulate upload progress
			let progress = 0
			const interval = setInterval(() => {
				progress += 10
				setUploadProgress(progress)
				if (progress >= 100) {
					clearInterval(interval)
					setFile(null)
					setUploadProgress(0)
				}
			}, 500)
		}
	}

	return (
		<div className="container mx-auto p-4 space-y-10">
			<Breadcrumbs
				separator={<ChevronLeft size={22} />}
				color="secondary"
				size="lg"
				className="mt-5"
			>
				<BreadcrumbItem href="/" color="secondary" className="opacity-80">
					خانه
				</BreadcrumbItem>
				<BreadcrumbItem href="/sources">منابع آموزشی</BreadcrumbItem>
				<BreadcrumbItem>تکالیف من</BreadcrumbItem>
			</Breadcrumbs>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
						<Table aria-label="Homework assignments table">
							<TableHeader>
								<TableColumn>درس</TableColumn>
								<TableColumn>عنوان</TableColumn>
								<TableColumn>مهلت ارسال</TableColumn>
								<TableColumn>وضعیت</TableColumn>
							</TableHeader>
							<TableBody>
								{homeworkData.map((item) => (
									<TableRow key={item.id}>
										<TableCell>{item.subject}</TableCell>
										<TableCell>{item.title}</TableCell>
										<TableCell>{item.dueDate}</TableCell>
										<TableCell>
											<Chip
												color={
													item.status === "submitted"
														? "success"
														: item.status === "in_progress"
														? "warning"
														: "default"
												}
											>
												{item.status === "submitted"
													? "ارسال شده"
													: item.status === "in_progress"
													? "در حال بررسی"
													: "هنوز ارسال نشده"}
											</Chip>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</CardBody>
				</Card>

				<Card>
					<CardHeader className="flex gap-3">
						<Upload size={24} className="text-purple-600" />
						<div className="flex flex-col">
							<p className="text-md">بارگذاری تکلیف</p>
							<p className="text-small text-default-500">
								فایل نهایی تکلیف خود را بارگذاری نمایید
							</p>
						</div>
					</CardHeader>
					<CardBody>
						<Input
							type="file"
							onChange={handleFileChange}
							className="mb-4"
							placeholder="در این قسمت آپلود کنید"
						/>
						<Button
							color="primary"
							onPress={handleUpload}
							isDisabled={!file}
							className="mb-4"
						>
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
			</div>

			<Card className="mt-8">
				<CardHeader className="flex gap-3">
					<CheckCircle size={24} className="text-purple-600" />
					<div className="flex flex-col">
						<p className="text-md">تکالیف تصحیح شده</p>
						<p className="text-small text-default-500">
							بررسی وضعیت تصحیح تکالیف
						</p>
					</div>
				</CardHeader>
				<CardBody>
					<Table aria-label="Submission results table" isStriped>
						<TableHeader>
							<TableColumn>درس</TableColumn>
							<TableColumn>تکلیف</TableColumn>
							<TableColumn>ارسال شده در</TableColumn>
							<TableColumn>نمره نهایی</TableColumn>
							<TableColumn>نظر استاد</TableColumn>
						</TableHeader>
						<TableBody>
							<TableRow key="1">
								<TableCell>
									<User
										avatarProps={{
											src: "https://i.pravatar.cc/150?u=a04258114e29026708c",
										}}
										name="ریاضی"
									>
										ریاضی
									</User>
								</TableCell>
								<TableCell>تمرین جدول ضرب</TableCell>
								<TableCell>1403/09/10 12:12</TableCell>
								<TableCell>
									<Chip color="success" variant="flat">
										خیلی عالی
									</Chip>
								</TableCell>
								<TableCell className="truncate">
									کارت عالی بود! همه رو درست جواب دادی ماشالا
								</TableCell>
							</TableRow>
							<TableRow key="2">
								<TableCell>
									<User
										avatarProps={{
											src: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
										}}
										name="زبان انگلیسی"
									>
										زبان انگلیسی
									</User>
								</TableCell>
								<TableCell>تمرین Spelling</TableCell>
								<TableCell>1403/09/11 08:00</TableCell>
								<TableCell>
									<Chip color="warning" variant="flat">
										نیاز به تلاش بیشتر
									</Chip>
								</TableCell>

								<TableCell className="max-w-[100px] h-[40px] overflow-y-scroll">
									عزیزم، تکلیفت را دیدم، اما به نظر می‌رسد که خیلی با
									عجله انجام شده است. انتظار داشتم که دقت بیشتری به خرج
									دهی و روی جزئیات کار کنی.
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</CardBody>
			</Card>
		</div>
	)
}

export default HomeworkPage

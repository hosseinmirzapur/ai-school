"use client"

import React, { useEffect, useState } from "react"
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react"
import { ChevronLeft } from "lucide-react"
import { IHomework, ISubmission } from "@/types"
import HomeworkList from "./HomeworkList"
import { handleError } from "@/libs/axios/helper"
import { getHomework } from "@/libs/axios"
import HomeworkSubmissions from "./HomeworkSubmissions"
import HomeworkUpload from "./HomeworkUpload"

const HomeworkContainer = () => {
	// ** States and variables
	const [homework, setHomework] = useState<IHomework[]>([])
	const [submissions, setSubmissions] = useState<ISubmission[]>([])
	const [loading, setLoading] = useState(false)

	// ** Functions
	const fetchHomework = async () => {
		setLoading(true)

		try {
			const { data } = await getHomework()
			setHomework(data.homework)
			setSubmissions(data.submissions)
		} catch (error) {
			if (error instanceof Error) {
				handleError(error)
			}
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchHomework()
	}, [])

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
				<HomeworkList homework={homework} loading={loading} />
				<HomeworkUpload homework={homework} />
			</div>

			<HomeworkSubmissions submissions={submissions} loading={loading} />
		</div>
	)
}

export default HomeworkContainer

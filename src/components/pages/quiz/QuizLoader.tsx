"use client"

import { Card, Skeleton, Spacer } from "@nextui-org/react"

const QuizLoader = () => {
	return (
		<div className="max-w-2xl mx-auto">
			<Skeleton className="rounded-lg">
				<div className="h-4 w-full bg-default-200"></div>
			</Skeleton>
			<Spacer y={4} />
			<Card className="p-6 mb-8">
				<Skeleton className="rounded-lg">
					<div className="h-8 w-3/4 bg-default-200"></div>
				</Skeleton>
				<Spacer y={2} />
				{[...Array(4)].map((_, index) => (
					<Skeleton key={index} className="rounded-lg">
						<div className="h-4 w-full bg-default-200 mt-2"></div>
					</Skeleton>
				))}
			</Card>
			<div className="flex justify-between">
				<Skeleton className="rounded-lg">
					<div className="h-10 w-24 bg-default-200"></div>
				</Skeleton>
				<Skeleton className="rounded-lg">
					<div className="h-10 w-24 bg-default-200"></div>
				</Skeleton>
			</div>
		</div>
	)
}

export default QuizLoader

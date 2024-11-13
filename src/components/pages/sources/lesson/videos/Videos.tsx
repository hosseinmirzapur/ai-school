"use client"

import { IVideo } from "@/types"
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react"

interface IProps {
	videos: IVideo[]
}

const Videos: React.FC<IProps> = ({ videos }) => {
	return (
		<div
			className="
				w-10/12
				mx-auto
				grid grid-cols-1
				place-items-center
				gap-10
			"
		>
			{videos.map((video, index) => (
				<Card key={index} isBlurred className="bg-secondary-100 w-full">
					<CardHeader>{video.title}</CardHeader>
					<CardBody>
						<video
							controls
							width="100%"
							className="rounded-lg shadow-lg"
							poster={video.thumbnail}
						>
							<source src={video.file} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</CardBody>
					<CardFooter className="h-[100px] overflow-auto">
						{video.description || "بدون توضیحات"}
					</CardFooter>
				</Card>
			))}
		</div>
	)
}

export default Videos

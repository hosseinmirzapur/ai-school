"use client"

import Image from "next/image"

import { Button, Tab, Tabs } from "@nextui-org/react"

import { GoChevronRight } from "react-icons/go"
import { blurDataUrl } from "@/utils"
import { getOneSource } from "@/libs/axios"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { RxVideo } from "react-icons/rx"
import { TfiLayoutSlider } from "react-icons/tfi"
import { TbCards } from "react-icons/tb"
import Videos from "./videos/Videos"
import LessonSlider from "./slider/LessonSlider"
import FlashcardGame from "./flashcards/FlashcardGame"
import { ILesson } from "@/types"

interface IProps {
	sourceID: number | string
	lessonID: number | string
}

const LessonContainer: React.FC<IProps> = ({ lessonID, sourceID }) => {
	// ** States and variables
	const [lesson, setLesson] = useState<ILesson>()
	const router = useRouter()

	// ** Functions

	const getLessonData = async () => {
		try {
			const res = await getOneSource(sourceID, true)
			const lessonData = res.data.lessons.find(
				(lesson) => lesson.id == lessonID,
			)
			setLesson(lessonData)
		} catch (error) {
			if (error instanceof Error) {
				console.log(error)
			}
		}
	}

	useEffect(() => {
		getLessonData()
	}, [])

	return (
		<div className="w-full h-full py-[54px]">
			<div
				className="
					  flex
					  flex-col
                      w-10/12
                      mx-auto
                      h-full
                      bg-gradient-to-tr
                      from-primary-200
                      to-danger-100
                      relative
                      rounded-3xl
                      py-5
                      space-y-5
                  "
			>
				{/* Top */}
				<div className="flex flex-col-reverse gap-5 md:gap-0 md:flex-row items-center justify-between md:px-10">
					<Button
						color="secondary"
						variant="light"
						startContent={<GoChevronRight size={22} />}
						onPress={() => router.back()}
					>
						صفحه قبل
					</Button>
					<div
						className="
                        row-span-1
                        text-3xl
                        font-semibold
                        text-[#4B185C]
                        hidden
                        lg:flex
                        justify-center
                        items-center
                     "
					>
						{lesson?.name}
					</div>
					<Image
						src={"/assets/lesson.png"}
						alt="lesson-icon"
						width={66}
						height={66}
						placeholder="blur"
						blurDataURL={blurDataUrl}
					/>
				</div>

				<Tabs
					color="secondary"
					size="lg"
					variant="underlined"
					className="w-full flex items-center justify-center"
				>
					{lesson?.videos && (
						<Tab
							key="video"
							title={
								<div className="flex items-center gap-5">
									<RxVideo size={22} />
									<span>ویدئو ها</span>
								</div>
							}
						>
							<Videos videos={lesson.videos} />
						</Tab>
					)}
					{lesson?.sliders && (
						<Tab
							key="slider"
							title={
								<div className="flex items-center gap-5">
									<TfiLayoutSlider size={22} />
									<span>اسلایدر ها</span>
								</div>
							}
						>
							<LessonSlider sliders={lesson.sliders} />
						</Tab>
					)}
					{lesson?.flashcards && (
						<Tab
							key="flashcards"
							title={
								<div className="flex items-center gap-5">
									<TbCards size={22} />
									<span>فلش کارت ها</span>
								</div>
							}
						>
							<FlashcardGame
								flashCards={lesson.flashcards}
								source={sourceID}
							/>
						</Tab>
					)}
				</Tabs>
			</div>
		</div>
	)
}

export default LessonContainer

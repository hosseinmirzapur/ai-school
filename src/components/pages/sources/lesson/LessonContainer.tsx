"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

import { lessons } from "../data"

import Screen from "./Screen"
import LessonSlider from "./slider/LessonSlider"

import { Button } from "@nextui-org/react"

import { GoChevronRight } from "react-icons/go"
import NextStep from "./NextStep"

interface IProps {
   sourceID: number | string
   lessonID: number | string
}

const LessonContainer: React.FC<IProps> = ({ lessonID, sourceID }) => {
   // ** States and variables
   const { back } = useRouter()

   const lesson = lessons.find((l) => l.id == lessonID)

   if (lesson) {
      return (
         <div className="w-full h-full py-[54px]">
            <div
               className="
                      w-10/12
                      mx-auto
                      h-full
                      bg-gradient-to-tr
                      from-primary-200
                      to-danger-100
                      relative
                      rounded-3xl
                      grid
                      grid-rows-5
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
                     onClick={back}
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
                     {lesson.name}
                  </div>
                  <Image
                     src={"/assets/lesson.png"}
                     alt="lesson-icon"
                     width={66}
                     height={66}
                  />
               </div>

               {/* Slider in a Screen */}
               <div className="row-span-4 pb-10">
                  <Screen>
                     <LessonSlider imgSrcs={lesson.imgSrcs} />
                  </Screen>
               </div>

               {/* Next Steps */}
               <div className="w-10/12 mx-auto flex justify-center md:justify-start">
                  <NextStep lessonID={lessonID} sourceID={sourceID} />
               </div>
            </div>
         </div>
      )
   }
   back()
   return <></>
}

export default LessonContainer

"use client"

import { Slider } from "@nextui-org/react"
import { useEffect, useState } from "react"

interface Mark {
   label: string
   value: number
}

interface IProps {
   sliders: string[]
   index: number
}

const ProgressBar: React.FC<IProps> = ({ sliders, index }) => {
   // ** States and variables
   const [marks, setMarks] = useState<Mark[]>([])

   useEffect(() => {
      const markArray: Mark[] = []
      const step = 100 / sliders.length
      sliders.map((_, index) => {
         let num = step * (index + 1)
         markArray.push({
            label: ``,
            value: num,
         })
      })
      setMarks(markArray)
   }, [sliders])

   useEffect(() => {
      console.log(index)
   }, [index])

   return (
      <div className="flex justify-center items-center w-full py-5">
         <Slider
            color="secondary"
            size="sm"
            marks={marks}
            className="max-w-md"
            step={100 / sliders.length}
            value={(index + 1) * (100 / sliders.length)}
            aria-label="same"
            maxValue={100}
            minValue={0}
            classNames={{
               track: "bg-gradient-to-r from-secondary-200 to-secondary-500",
            }}
         />
      </div>
   )
}

export default ProgressBar

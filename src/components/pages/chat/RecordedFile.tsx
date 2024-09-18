"use client"

import { useRef } from "react"

import { AudioVisualizer } from "react-audio-visualize"

interface IProps {
	blob: Blob
}

const RecordedFile: React.FC<IProps> = ({ blob }) => {
	// ** States and variables
	const visualizerRef = useRef<HTMLCanvasElement>(null)

	return (
		<div
			className="
				absolute
				bottom-0
				left-4
				md:left-8
				lg:left-14
				flex
				items-start
				justify-center
				bg-purple-300
				rounded-l-full
				z-50
			"
		>
			<AudioVisualizer
				ref={visualizerRef}
				blob={blob}
				width={200}
				height={56}
				barWidth={1}
				gap={0}
				barColor="#7b3ae8"
			/>
		</div>
	)
}

export default RecordedFile

"use client"

import { useRef } from "react"

import { Tooltip } from "@nextui-org/react"

import { AudioVisualizer } from "react-audio-visualize"

interface IProps {
	blob: Blob
}

const RecordedFile: React.FC<IProps> = ({ blob }) => {
	// ** States and variables
	const visualizerRef = useRef<HTMLCanvasElement>(null)
	const audioRef = useRef<HTMLAudioElement>(null)

	return (
		<Tooltip content="برای گوش دادن کلیک کنید">
			<div
				className="
					flex
					items-center
					justify-center
					gap-5
					bg-purple-300
					rounded-full
					w-auto
					mr-auto
					ml-0
					z-50
					p-3
					cursor-pointer
					shadow-lg
					hover:shadow-2xl
					transition-shadow
				"
				onClick={() => {
					if (audioRef.current) {
						audioRef.current.play()
					}
				}}
			>
				<AudioVisualizer
					ref={visualizerRef}
					blob={blob}
					width={200}
					height={60}
					barWidth={1}
					gap={0}
					barColor="#7b3ae8"
				/>
				<audio
					src={URL.createObjectURL(blob)}
					ref={audioRef}
					controls
					hidden
				/>
			</div>
		</Tooltip>
	)
}

export default RecordedFile

"use client"

import { useRef } from "react"
import { Button } from "@nextui-org/react"
import { TbRewindBackward5, TbRewindForward5 } from "react-icons/tb"
import { Tooltip } from "@nextui-org/react"

interface AudioPlayerProps {
	audioUrl: string
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
	// ** States and variables
	const audioRef = useRef<HTMLAudioElement>(new Audio(audioUrl))

	// ** Functions
	const seekForward = () => {
		audioRef.current.currentTime += 5 // Move forward 5 seconds
	}

	const seekBackward = () => {
		audioRef.current.currentTime -= 5 // Move backward 5 seconds
	}

	return (
		<div className="flex items-center justify-center gap-5">
			<Tooltip content={"۵ ثانیه به جلو"}>
				<Button
					onClick={seekBackward}
					color="primary"
					variant="faded"
					radius="full"
					isIconOnly
				>
					<TbRewindForward5 size={22} />
				</Button>
			</Tooltip>
			<audio src={audioUrl} ref={audioRef} controls className="rounded-xl" />
			<Tooltip content="۵ ثانیه به عقب">
				<Button
					onClick={seekForward}
					color="primary"
					variant="faded"
					isIconOnly
					radius="full"
					isDisabled={audioRef.current.currentTime < 5}
				>
					<TbRewindBackward5 size={22} />
				</Button>
			</Tooltip>
		</div>
	)
}

export default AudioPlayer

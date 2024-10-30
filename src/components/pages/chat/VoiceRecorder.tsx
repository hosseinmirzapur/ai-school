"use client"

import { useRef, useState } from "react"

import { Button } from "@nextui-org/react"

import toast from "react-hot-toast"

import { MdKeyboardVoice, MdOutlineCancel, MdStop } from "react-icons/md"

interface IProps {
	fillRecordedBlob: (blob: Blob | null) => void
}

const VoiceRecorder: React.FC<IProps> = ({ fillRecordedBlob }) => {
	// ** States and variables
	const mediaStream = useRef<MediaStream | null>(null)
	const mediaRecorder = useRef<MediaRecorder | null>(null)
	const chunks = useRef<Blob[]>([])
	const [recording, setRecording] = useState(false)
	const [recorded, setRecorded] = useState(false)

	// ** Functions
	const startRecording = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({
				audio: true,
			})
			setRecording(true)
			mediaStream.current = stream
			mediaRecorder.current = new MediaRecorder(stream)

			// onDataAvailable event
			mediaRecorder.current.ondataavailable = (e) => {
				if (e.data.size > 0) {
					chunks.current.push(e.data)
				}
			}

			// onstop event
			mediaRecorder.current.onstop = () => {
				const recordedBlob = new Blob(chunks.current, {
					type: "audio/wav",
				})
				fillRecordedBlob(recordedBlob)
				setRecorded(true)
				chunks.current = []
			}
			mediaRecorder.current.start()
		} catch (error) {
			console.log(error)
			toast.error("شما دسترسی میکروفون را مسدود کرده اید", {
				duration: 5000,
				icon: <MdKeyboardVoice size={22} />,
			})
		}
	}

	const stopRecording = () => {
		if (
			mediaRecorder.current &&
			mediaRecorder.current.state === "recording"
		) {
			mediaRecorder.current.stop()
			setRecording(false)
		}

		if (mediaStream.current) {
			mediaStream.current.getTracks().forEach((track) => {
				track.stop()
			})
		}
	}

	const deleteVoice = () => {
		fillRecordedBlob(null)
		setRecorded(false)
	}

	return (
		<div>
			<Button
				isIconOnly
				radius="full"
				className="rounded-full transition-all ease-in-out"
				color="secondary"
				variant={recording ? "shadow" : "light"}
				onClick={() =>
					recording
						? stopRecording()
						: recorded
						? deleteVoice()
						: startRecording()
				}
			>
				{recording ? (
					<MdStop size={22} className="transition-all ease-in-out" />
				) : recorded ? (
					<MdOutlineCancel
						size={22}
						className="transition-all ease-in-out"
					/>
				) : (
					<MdKeyboardVoice
						size={22}
						className="transition-all ease-in-out"
					/>
				)}
			</Button>
		</div>
	)
}

export default VoiceRecorder

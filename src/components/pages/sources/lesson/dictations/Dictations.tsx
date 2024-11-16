"use client"

import { IDictation } from "@/types"
import DictationList from "./DictationList"
import VoiceToTextModal from "./VoiceToTextModal"
import DictationVoiceModal from "./DictationVoiceModal"
import { useState } from "react"

interface IProps {
	dictations: IDictation[]
	toggleChange: () => void
}

const Dictations: React.FC<IProps> = ({ dictations, toggleChange }) => {
	// ** States and variables
	const [voiceToTextModal, setVTTOpen] = useState(false)
	const [dictationVoiceModal, setDVOpen] = useState(false)
	const [selectedDictation, setSD] = useState<IDictation>()

	// ** Functions
	const toggleVTT = () => setVTTOpen((prev) => !prev)
	const toggleDV = () => setDVOpen((prev) => !prev)
	const selectDictation = (dictation: IDictation) => setSD(dictation)

	return (
		<>
			<DictationList
				dictations={dictations}
				toggleVTT={toggleVTT}
				toggleDV={toggleDV}
				selectDictation={selectDictation}
			/>
			<VoiceToTextModal
				open={voiceToTextModal}
				toggle={toggleVTT}
				dictation={selectedDictation}
				toggleChange={toggleChange}
			/>
			<DictationVoiceModal
				open={dictationVoiceModal}
				toggle={toggleDV}
				dictation={selectedDictation}
			/>
		</>
	)
}

export default Dictations

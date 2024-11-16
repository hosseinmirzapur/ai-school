"use client"

import { IDictation } from "@/types"
import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
} from "@nextui-org/react"
import AudioPlayer from "./AudioPlayer"
import { TiTick } from "react-icons/ti"

interface IProps {
	open: boolean
	toggle: () => void
	dictation?: IDictation
}

const DictationVoiceModal: React.FC<IProps> = ({ open, toggle, dictation }) => {
	return (
		<Modal
			isOpen={open}
			onOpenChange={toggle}
			size="2xl"
			backdrop="blur"
			isDismissable={false}
			classNames={{
				base: "bg-gradient-to-l from-[#624BE1] to-secondary-400 text-[#F2F0FB]",
				closeButton:
					"bg-secondary-100 hover:bg-secondary-200 active:bg-white/20 transition-all",
			}}
		>
			<ModalContent>
				{() => (
					<>
						<ModalHeader className="flex items-center justify-center">
							{`شنیدن فایل صوتی ${dictation?.title}`}
						</ModalHeader>
						<ModalBody>
							{dictation?.voice ? (
								<AudioPlayer audioUrl={dictation?.voice} />
							) : (
								<div>
									هنوز فایل صوتی برای دیکته(املا) قرار داده نشده است
								</div>
							)}
						</ModalBody>
						<ModalFooter className="flex items-center justify-center">
							<Button
								startContent={<TiTick size={22} />}
								color="success"
								variant="ghost"
								onPress={toggle}
							>
								گوش کردم
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	)
}

export default DictationVoiceModal

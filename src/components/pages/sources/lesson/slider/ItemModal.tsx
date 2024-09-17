"use client"

import { Modal, ModalBody, ModalContent } from "@nextui-org/react"

interface IProps {
   Content: React.ReactNode
   isOpen: boolean
   onOpenChange: () => void
   Trigger: React.ReactNode
}

const ItemModal: React.FC<IProps> = ({
   Content,
   isOpen,
   onOpenChange,
   Trigger,
}) => {
   return (
      <>
         {Trigger}
         <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="center"
            size="4xl"
         >
            <ModalContent>
               {(onClose) => <ModalBody>{Content}</ModalBody>}
            </ModalContent>
         </Modal>
      </>
   )
}

export default ItemModal

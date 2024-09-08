"use client"

import { Button, Textarea } from "@nextui-org/react"
import { IoMdSend } from "react-icons/io"

const MessageInput = () => {
   return (
      <div className="flex justify-center w-full px-4 md:px-10 lg:px-16 mx-auto absolute bottom-10">
         <Textarea
            placeholder="اینجا بنویسید..."
            minRows={1}
            startContent={
               <Button
                  size="md"
                  isIconOnly
                  color="secondary"
                  variant="light"
                  radius="full"
               >
                  <IoMdSend size={24} />
               </Button>
            }
            radius="full"
            size="lg"
            dir={"rtl"}
         />
      </div>
   )
}

export default MessageInput

"use client"

import { useState } from "react"

import { Button, Textarea, Tooltip } from "@nextui-org/react"

import { GrAttachment } from "react-icons/gr"
import { IoMdSend } from "react-icons/io"

import FileUploadButton from "./FileUploadButton"
import UploadedFile from "./UploadedFile"

const MessageInput = () => {
   // ** states and variables
   const [inputTxt, setInputText] = useState("")
   const [inputFile, setInputFile] = useState<File | null>(null)

   // ** functions
   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]
      if (file) {
         setInputFile(file)
      }
   }

   const emptyFileInput = () => setInputFile(null)

   return (
      <div
         className="
            flex
            flex-col
            gap-2
            justify-center
            w-full
            px-4
            md:px-10
            lg:px-16
            mx-auto
            absolute
            bottom-10
         "
      >
         <UploadedFile file={inputFile} empty={emptyFileInput} />
         <Textarea
            onValueChange={setInputText}
            minRows={1}
            startContent={
               <Tooltip content="ارسال">
                  <Button
                     size="md"
                     isIconOnly
                     color="secondary"
                     variant="light"
                     radius="full"
                  >
                     <IoMdSend size={24} />
                  </Button>
               </Tooltip>
            }
            radius="full"
            size="lg"
            dir={"rtl"}
            endContent={
               <FileUploadButton fileHandler={handleFileChange}>
                  <Button
                     title="آپلود فایل"
                     size="md"
                     isIconOnly
                     color="secondary"
                     variant="shadow"
                     radius="full"
                     className="cursor-pointer"
                  >
                     <GrAttachment size={24} />
                  </Button>
               </FileUploadButton>
            }
            classNames={{
               innerWrapper: "items-center",
            }}
            placeholder="اینجا بنویسید..."
            className="shadow-xl rounded-full"
         />
      </div>
   )
}

export default MessageInput

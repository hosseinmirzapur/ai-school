"use client"

import {
   Avatar,
   Button,
   Dropdown,
   DropdownItem,
   DropdownMenu,
   DropdownTrigger,
} from "@nextui-org/react"
import { Message } from "./MessageList"
import { BsThreeDotsVertical } from "react-icons/bs"
import { GoCopy } from "react-icons/go"
import toast, { Toaster } from "react-hot-toast"
import { FcInfo } from "react-icons/fc"

interface IProps {
   message: Message
}

const MessageCloud: React.FC<IProps> = ({ message }) => {
   // ** Functions
   const copyMessageText = (message: Message) => {
      navigator.clipboard.writeText(message.text)
      toast("متن در کلیپ بورد کپی شد", {
         icon: <FcInfo size={20} />,
      })
   }

   return (
      <>
         <Toaster position="bottom-right" />
         <div
            className="
               flex
               flex-col
               gap-5
               w-auto
               mx-0
               bg-white/60
               px-5
               py-3
               rounded-3xl
               shadow-lg
            "
            dir={message.role === "system" ? "ltr" : "rtl"}
         >
            <div className="col-span-1 flex items-center justify-between">
               {message.role === "system" ? (
                  <Avatar
                     src="/assets/bot.png"
                     size="sm"
                     className="hover:animate-pulse cursor-pointer"
                  />
               ) : (
                  <Avatar
                     src="/assets/kid.png"
                     size="sm"
                     className="hover:animate-pulse cursor-pointer"
                  />
               )}
               <Dropdown placement="top-start">
                  <DropdownTrigger>
                     <Button isIconOnly variant="light" size="sm">
                        <BsThreeDotsVertical size={18} />
                     </Button>
                  </DropdownTrigger>
                  <DropdownMenu>
                     <DropdownItem
                        startContent={<GoCopy size={20} />}
                        onClick={() => copyMessageText(message)}
                     >
                        کپی متن
                     </DropdownItem>
                  </DropdownMenu>
               </Dropdown>
            </div>
            <div
               className="col-span-4 flex items-center justify-start max-w-[400px]"
               dir="rtl"
            >
               {message.text}
            </div>
         </div>
      </>
   )
}

export default MessageCloud

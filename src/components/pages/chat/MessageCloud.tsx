"use client"

import { Avatar } from "@nextui-org/react"
import { Message } from "./MessageList"

interface IProps {
   message: Message
}

const MessageCloud: React.FC<IProps> = ({ message }) => {
   return (
      <div
         className="
               flex
               gap-5
               w-auto
               mx-0
               bg-white/60
               p-5
               rounded-3xl
               shadow-lg
            "
         dir={message.role === "system" ? "ltr" : "rtl"}
      >
         <div className="col-span-1 flex items-center justify-center">
            {message.role === "system" ? (
               <Avatar
                  src="/assets/bot.png"
                  size="md"
                  className="hover:animate-pulse cursor-pointer"
               />
            ) : (
               <Avatar
                  src="/assets/kid.png"
                  size="md"
                  className="hover:animate-pulse cursor-pointer"
               />
            )}
         </div>
         <div
            className="col-span-4 flex items-center justify-start max-w-[400px]"
            dir="rtl"
         >
            {message.text}
         </div>
      </div>
   )
}

export default MessageCloud

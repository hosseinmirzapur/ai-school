"use client"

import { BsChatTextFill } from "react-icons/bs"

const Chat = () => {
   return (
      <div
         className="
            flex
            w-10
            h-10
            justify-center
            items-center
            bg-gray-100
            rounded-full
            cursor-pointer
            hover:shadow-xl
         "
         dir="rtl"
      >
         <BsChatTextFill size={22} className="rotate-y-180" />
      </div>
   )
}

export default Chat

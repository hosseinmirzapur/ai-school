"use client"

import Bot from "./Bot"
import MessageInput from "./MessageInput"
import MessageList from "./MessageList"

const ChatContainer = () => {
   return (
      <div
         className="
            w-full
            h-[100vh]
            py-20
         "
      >
         <div
            className="
               w-11/12
               md:w-10/12
               h-full
               mx-auto
               bg-gradient-to-tr
             from-pink-400
             to-purple-400
               rounded-[24px]
               relative
               shadow-lg
            "
         >
            <Bot />
            <MessageList />
            <MessageInput />
         </div>
      </div>
   )
}

export default ChatContainer

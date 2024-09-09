"use client"

import MessageCloud from "./MessageCloud"

export interface Message {
   text: string
   hasFile: boolean
   role: "user" | "system"
}

interface IProps {
   messages: Message[]
}

const MessageList: React.FC<IProps> = ({ messages }) => {
   return (
      <div
         className="
            w-full
            h-[600px]
            md:w-11/12
            mx-auto
            bg-blue-300
            rounded-none
            md:rounded-xl
            lg:rounded-3xl
            flex
            flex-col
            gap-4
            p-10
            overflow-auto
         "
      >
         {messages.map((message, index) => (
            <div
               className={`
                  w-full
                  flex
                  flex-col
                  ${message.role === "user" ? "items-start" : "items-end"}
               `}
               key={index}
            >
               <MessageCloud message={message} />
            </div>
         ))}
      </div>
   )
}

export default MessageList

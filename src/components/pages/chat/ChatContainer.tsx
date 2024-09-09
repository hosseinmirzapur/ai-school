"use client"

import Bot from "./Bot"
import MessageInput from "./MessageInput"
import MessageList, { Message } from "./MessageList"

const messages: Message[] = [
   {
      text: "سلام حالت چطوره؟",
      role: "user",
      hasFile: false,
   },
   {
      text: "سلام حالم خوبه تو چطوری؟",
      role: "system",
      hasFile: false,
   },
   {
      text: "من عالیم! این فایل رو برای من بررسی کن و بم بگو توش چی نوشته",
      role: "user",
      hasFile: true,
   },
   {
      text: "این فایل محتوای درسی فارسی درس یک رو داره و توش کلی توضیحات نوشته راجع به شاهنامه و داستان رستم و سهراب و جنگ افسانه ای شون",
      role: "system",
      hasFile: false,
   },
   {
      text: "ممنون کمک خیلی زیادی به من کردی!",
      role: "user",
      hasFile: false,
   },
   {
      text: "خوشحالم که تونستم کمکی به شما بکنم. اگر سوال دیگه ای داشتین حتما از من بپرسین!",
      role: "system",
      hasFile: false,
   },
]

const ChatContainer = () => {
   return (
      <div
         className="
            w-full
            h-full
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
               pb-32
            "
         >
            <Bot />
            <MessageList messages={messages} />
            <MessageInput />
         </div>
      </div>
   )
}

export default ChatContainer

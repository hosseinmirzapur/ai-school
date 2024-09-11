"use client"

interface IProps {
   children: React.ReactNode
}

const Screen: React.FC<IProps> = ({ children }) => {
   return (
      <div
         className="
            flex
            justify-center
            items-center
            w-10/12
            mx-auto
            bg-[#BCE4FECC]/80
            h-full
            rounded-2xl
        "
      >
         <div className="flex items-center justify-center h-full">
            {children}
         </div>
      </div>
   )
}

export default Screen

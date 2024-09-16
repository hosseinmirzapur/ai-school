"use client"

import Chat from "./Chat"
import { INotification } from "./data"
import Notifications from "./Notifications"
import Search from "./Search"

interface IProps {
   notifications: INotification[]
}

const Header: React.FC<IProps> = ({ notifications }) => {
   return (
      <div className="flex justify-between pt-10 mx-auto w-11/12 gap-5 md:gap-2 lg:gap-0">
         <div className="flex gap-2">
            <Notifications notifications={notifications} />
            <Chat />
         </div>
         <div className="w-10/12 mx-auto">
            <Search />
         </div>
      </div>
   )
}

export default Header

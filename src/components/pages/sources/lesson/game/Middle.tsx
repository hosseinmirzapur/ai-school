"use client"

import { FlashCard } from "./data"

interface IProps {
   flashCards: FlashCard[]
}

const Middle: React.FC<IProps> = ({ flashCards }) => {
   return <div className="row-span-3">Middle</div>
}

export default Middle

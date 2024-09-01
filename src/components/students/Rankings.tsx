"use client"

import React from "react"

export interface IRanking {
   id: number | string
   fullName: string
   rank: number
}

interface IProps {
   rankings?: IRanking[]
}

const Rankings: React.FC<IProps> = ({ rankings }) => {
   return <div>Rankings</div>
}

export default Rankings

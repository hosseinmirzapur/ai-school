"use client"

import React from "react"

export interface IFolder {
   id: number | string
   folderTitle: string
}

interface IProps {
   folder?: IFolder
}

const Folder: React.FC<IProps> = ({ folder }) => {
   return <div>Folder</div>
}

export default Folder

"use client"

interface IProps {
   question: string
   text: string
   img?: string
}
const Box: React.FC<IProps> = ({ question, text, img }) => {
   return <div>Box</div>
}

export default Box

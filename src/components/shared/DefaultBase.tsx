"use client"

interface IProps {
	children: React.ReactNode
}

const DefaultBase: React.FC<IProps> = ({ children }) => {
	return (
		<div className="flex flex-col w-11/12 md:w-10/12 mx-auto bg-gray-100 rounded-[24px] z-10 my-24 relative">
			{children}
		</div>
	)
}

export default DefaultBase

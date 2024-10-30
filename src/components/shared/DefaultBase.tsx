"use client"

interface IProps {
	children: React.ReactNode
}

const DefaultBase: React.FC<IProps> = ({ children }) => {
	return (
		<div
			className="
				flex
				flex-col
				w-11/12
				mx-auto
				bg-white
				rounded-[24px]
				z-10
				my-14
				md:my-20
				lg:my-32
				relative
				min-h-[100vh]
				h-full
			"
		>
			{children}
		</div>
	)
}

export default DefaultBase

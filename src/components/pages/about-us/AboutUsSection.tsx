"use client"

import Image from "next/image"

interface IProps {
	inverse?: boolean
	image: string
	children: React.ReactNode
}

const AboutUsSection: React.FC<IProps> = ({
	inverse = false,
	image,
	children,
}) => {
	return (
		<div
			className={`flex flex-col items-center lg:justify-between gap-10 ${
				inverse ? "lg:flex-row-reverse" : "lg:flex-row"
			}`}
		>
			<Image src={image} alt="about-us-content" width={400} height={400} />
			{children}
		</div>
	)
}

export default AboutUsSection

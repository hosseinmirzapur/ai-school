import AboutUsContainer from "@/components/pages/about-us/AboutUsContainer"
import DefaultBase from "@/components/shared/DefaultBase"
import DefaultHeader from "@/components/shared/DefaultHeader"
import DefaultMobileHeader from "@/components/shared/DefaultMobileHeader"

export default function AboutUsPage() {
	return (
		<>
			<DefaultMobileHeader />
			<DefaultBase>
				<DefaultHeader />
				<AboutUsContainer />
			</DefaultBase>
		</>
	)
}

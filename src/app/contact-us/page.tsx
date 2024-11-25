import ContactUsContainer from "@/components/pages/contact-us/ContactUsContainer"
import DefaultBase from "@/components/shared/DefaultBase"
import DefaultHeader from "@/components/shared/DefaultHeader"
import DefaultMobileHeader from "@/components/shared/DefaultMobileHeader"

export default function ContactUsPage() {
	return (
		<>
			<DefaultMobileHeader />
			<DefaultBase>
				<DefaultHeader />
				<ContactUsContainer />
			</DefaultBase>
		</>
	)
}

import AuthContainer from "@/components/pages/auth/AuthContainer"
import DefaultBase from "@/components/shared/DefaultBase"
import DefaultHeader from "@/components/shared/DefaultHeader"
import DefaultMobileHeader from "@/components/shared/DefaultMobileHeader"

export default function AuthPage() {
	return (
		<>
			<DefaultMobileHeader />
			<DefaultBase>
				<DefaultHeader />
				<AuthContainer />
			</DefaultBase>
		</>
	)
}

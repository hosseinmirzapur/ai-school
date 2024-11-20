import HomeContainer from "@/components/pages/home/HomeContainer"
import Base from "@/components/shared/Base"

export default function Home() {
	return (
		<Base needsAuth>
			<HomeContainer />
		</Base>
	)
}

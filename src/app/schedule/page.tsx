import ScheduleContainer from "@/components/pages/schedule/ScheduleContainer"
import Base from "@/components/shared/Base"

export default function Home() {
	return (
		<Base needsAuth>
			<ScheduleContainer />
		</Base>
	)
}

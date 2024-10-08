type BarColor = "#EC6F70" | "#003050" | "#F8DB39"

interface ColorConfig {
	bgColor: BarColor
	textColor: string
}

export const barColor = (): ColorConfig => {
	const colors: ColorConfig[] = [
		{
			bgColor: "#F8DB39",
			textColor: "#000",
		},
		{
			bgColor: "#EC6F70",
			textColor: "#FFF",
		},
		{
			bgColor: "#003050",
			textColor: "#FFF",
		},
	]
	const index = Math.floor(Math.random() * 3)
	return colors[index]
}

export const persianDate = (day: string): string => {
	switch (day) {
		case "saturday":
			return "شنبه"
		case "sunday":
			return "یکشنبه"
		case "monday":
			return "دوشنبه"
		case "tuesday":
			return "سه شنبه"
		case "wednesday":
			return "چهارشنبه"
		case "thursday":
			return "پنجشنبه"
		default:
			return ""
	}
}

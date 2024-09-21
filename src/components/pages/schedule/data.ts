export interface ISubject {
	title: string
	duration: number // in minutes
}

export interface IDailySchedule {
	day: "saturday" | "sunday" | "monday" | "tuesday" | "wednesday" | "thursday"
	subjects: ISubject[]
	fullDuration: number
}

export const weeklySchedule: IDailySchedule[] = [
	{
		day: "saturday",
		subjects: [
			{
				title: "زبان انگلیسی",
				duration: 45,
			},
			{
				title: "علوم",
				duration: 60,
			},
		],
		fullDuration: 105,
	},
	{
		day: "sunday",
		subjects: [
			{
				title: "زبان انگلیسی",
				duration: 45,
			},
			{
				title: "ریاضی",
				duration: 60,
			},
			{
				title: "مطالعات اجتماعی",
				duration: 40,
			},
		],
		fullDuration: 145,
	},
	{
		day: "monday",
		subjects: [
			{
				title: "زبان انگلیسی",
				duration: 35,
			},
			{
				title: "علوم",
				duration: 60,
			},
			{
				title: "فارسی",
				duration: 50,
			},
		],
		fullDuration: 145,
	},
	{
		day: "tuesday",
		subjects: [
			{
				title: "ریاضی",
				duration: 45,
			},
			{
				title: "علوم",
				duration: 30,
			},
			{
				title: "مطالعات اجتماعی",
				duration: 50,
			},
		],
		fullDuration: 125,
	},
	{
		day: "wednesday",
		subjects: [
			{
				title: "زبان انگلیسی",
				duration: 45,
			},
			{
				title: "علوم",
				duration: 30,
			},
			{
				title: "مطالعات اجتماعی",
				duration: 50,
			},
		],
		fullDuration: 125,
	},
	{
		day: "thursday",
		subjects: [
			{
				title: "ریاضی",
				duration: 45,
			},
			{
				title: "فارسی",
				duration: 60,
			},
			{
				title: "علوم",
				duration: 50,
			},
			{
				title: "مطالعات اجتماعی",
				duration: 50,
			},
		],
		fullDuration: 205,
	},
]

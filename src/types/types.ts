export interface ILesson {
	id: number | string
	name: string
	videos?: IVideo[]
	flashcards?: IFlashCard[]
	dictations?: IDictation[]
	sliders?: ISlider[]
}
export interface IVideo {
	id: number | string
	title: string
	description?: string
	thumbnail?: string
	file?: string
}

export interface IFlashCard {
	id: string | number
	question: string
	answer: string
	image?: string
}

export interface IDictation {
	id: string | number
	title: string
	created_at: string | Date
	voice?: string
	status: "scored" | "not_scored" | "undone"
}

export interface ISlider {
	id: string | number
	image?: string
	order: number | string
}

export interface ISubjectBook {
	id: number | string
	imageSrc: string
	title: string
	lessons: ILesson[]
}

export interface IMessage {
	text?: string
	role: "user" | "system"
	hasFile: boolean
	hasVoice?: boolean
}

export interface INotification {
	id: number | string
	text: string
	type: "system" | "teacher"
	seen: boolean
}

export interface ChartItem {
	month: string
	myScore: number
	avgScore: number
	year: number
}

export interface IRanking {
	subject: string
	myGrade: number
	average: number
}

export interface IProfile {
	fullName?: string
	email: string
	classNumber: number | string
	avatar?: string
}

export interface ISubject {
	title: string
	duration: number // in minutes
}

export interface IDailySchedule {
	day: "saturday" | "sunday" | "monday" | "tuesday" | "wednesday" | "thursday"
	subjects: ISubject[]
	fullDuration: number
}

export interface IFlashCard {
	id: number | string
	question: string
	answer: string
	img?: string
}

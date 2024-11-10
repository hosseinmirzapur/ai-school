import { IDailySchedule } from "@/components/pages/schedule/data"

export interface HomeResponse {
	profile: {
		fullname?: string
		email?: string
		grade?: number | string
	}
	notifications: []
	monthlyMarks: {
		student: []
		classroom: []
	}[]
	marksPerSubject: {
		student: []
		classroom: []
	}[]
}

export interface AllSourcesResponse {
	sources: {
		name: string
		slug: string
		image?: string
	}[]
}

export interface OneSourceResponse {
	source: {
		name: string
		slug: string
		image?: string
	}
}

export interface LessonSlidersResponse {
	sliders: []
}

export interface LessonVideosResponse {
	videos: []
}

export interface LessonFlashcardsResponse {
	flashcards: []
}

export interface WeeklyScheduleResponse {
	schedule: IDailySchedule[]
}

export interface NotificationsResponse {
	notifications: []
}

export interface SettingsResponse {
	settings: []
}

export interface ChatHistoryResponse {
	chats: {
		identifier: string
		type: "casual" | "quiz"
		score: number | string
		active: boolean
	}[]
}

export interface ChatMessagesResponse {
	messages: {
		role: "user" | "bot"
		content?: string
		has_file: boolean
		has_voice: boolean
	}[]
}

export interface AboutUsResponse {
	aboutUs?: string
}

export interface ContactUsResponse {
	contactUs?: string
}

export interface LoginStudentResponse {
	student: {
		name?: string
		mobile?: string
		email?: string
		username: string
		gender?: string
		dob?: string | Date
	}
	token: string
}

export interface NewChatResponse {
	identifier: string
}

export interface SendMessageResponse {
	result: string | object
}

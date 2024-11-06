import api from "./api"
import {
	AboutUsResponse,
	AllSourcesResponse,
	ChatHistoryResponse,
	ChatMessagesResponse,
	ContactUsResponse,
	HomeResponse,
	LessonFlashcardsResponse,
	LessonSlidersResponse,
	LessonVideosResponse,
	LoginStudentResponse,
	NewChatResponse,
	NotificationsResponse,
	OneSourceResponse,
	SendMessageResponse,
	SettingsResponse,
	WeeklyScheduleResponse,
} from "./dto"

// pages (auth needed)
export const getHome = async (): Promise<HomeResponse> => {
	return await api.get("/pages/home")
}

export const getAllSources = async (): Promise<AllSourcesResponse> => {
	return await api.get("/pages/sources")
}

export const getOneSource = async (
	source: number | string,
): Promise<OneSourceResponse> => {
	return await api.get(`/pages/sources/${source}`)
}

export const getLessonSliders = async (
	lesson: number | string,
): Promise<LessonSlidersResponse> => {
	return await api.get(`/pages/sources/lessons/${lesson}/sliders`)
}

export const getLessonVideos = async (
	lesson: number | string,
): Promise<LessonVideosResponse> => {
	return await api.get(`/pages/sources/lessons/${lesson}/videos`)
}

export const getLessonFlashcards = async (
	lesson: number | string,
): Promise<LessonFlashcardsResponse> => {
	return await api.get(`/pages/sources/lessons/${lesson}/flashcards`)
}

export const getWeeklySchedule = async (): Promise<WeeklyScheduleResponse> => {
	return await api.get("/pages/weekly-schedule")
}

export const getNotifications = async (): Promise<NotificationsResponse> => {
	return await api.get("/pages/notifications")
}

export const getSettings = async (): Promise<SettingsResponse> => {
	return await api.get("/pages/settings")
}

export const getChatHistory = async (): Promise<ChatHistoryResponse> => {
	return await api.get("/pages/chat/history")
}

export const getChatMessages = async (
	chat: number | string,
): Promise<ChatMessagesResponse> => {
	return await api.get(`/pages/chat/${chat}`)
}

// pages (no auth needed)
export const getAboutUs = async (): Promise<AboutUsResponse> => {
	return await api.get("/pages/about-us")
}

export const getContactUs = async (): Promise<ContactUsResponse> => {
	return await api.get("/pages/contact-us")
}

// student auth
export const loginStudent = async (data: {
	username?: string
	password?: string
}): Promise<LoginStudentResponse> => {
	return await api.post("/auth/login", data)
}

export const logoutStudent = async () => {
	return await api.post("/auth/logout")
}

// chat
export const createNewChat = async (
	type: "casual" | "quiz",
): Promise<NewChatResponse> => {
	return await api.post(`/chat/${type}`)
}

export const sendMessageToChat = async (
	chat: number | string,
	data: FormData | { content: string },
): Promise<SendMessageResponse> => {
	return await api.post(`/chat/${chat}/message`, data)
}

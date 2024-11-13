import { AxiosResponse } from "axios"
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
export const getHome = async (): Promise<
	AxiosResponse<HomeResponse, Error>
> => {
	return await api.get("/pages/home")
}

export const getAllSources = async (): Promise<
	AxiosResponse<AllSourcesResponse, Error>
> => {
	return await api.get("/pages/sources")
}

export const getOneSource = async (
	source: number | string,
	load: boolean,
): Promise<AxiosResponse<OneSourceResponse, Error>> => {
	return await api.get(`/pages/sources/${source}`, {
		params: {
			load,
		},
	})
}

export const getLessonSliders = async (
	lesson: number | string,
): Promise<AxiosResponse<LessonSlidersResponse, Error>> => {
	return await api.get(`/pages/sources/lessons/${lesson}/sliders`)
}

export const getLessonVideos = async (
	lesson: number | string,
): Promise<AxiosResponse<LessonVideosResponse, Error>> => {
	return await api.get(`/pages/sources/lessons/${lesson}/videos`)
}

export const getLessonFlashcards = async (
	lesson: number | string,
): Promise<AxiosResponse<LessonFlashcardsResponse, Error>> => {
	return await api.get(`/pages/sources/lessons/${lesson}/flashcards`)
}

export const getWeeklySchedule = async (): Promise<
	AxiosResponse<WeeklyScheduleResponse, Error>
> => {
	return await api.get("/pages/weekly-schedule")
}

export const getNotifications = async (): Promise<
	AxiosResponse<NotificationsResponse, Error>
> => {
	return await api.get("/pages/notifications")
}

export const getSettings = async (): Promise<
	AxiosResponse<SettingsResponse, Error>
> => {
	return await api.get("/pages/settings")
}

export const getChatHistory = async (): Promise<
	AxiosResponse<ChatHistoryResponse, Error>
> => {
	return await api.get("/pages/chat/history")
}

export const getChatMessages = async (
	chat: number | string,
): Promise<AxiosResponse<ChatMessagesResponse, Error>> => {
	return await api.get(`/pages/chat/${chat}`)
}

// pages (no auth needed)
export const getAboutUs = async (): Promise<
	AxiosResponse<AboutUsResponse, Error>
> => {
	return await api.get("/pages/about-us")
}

export const getContactUs = async (): Promise<
	AxiosResponse<ContactUsResponse, Error>
> => {
	return await api.get("/pages/contact-us")
}

// student auth
export const loginStudent = async (data: {
	username?: string
	password?: string
}): Promise<AxiosResponse<LoginStudentResponse, Error>> => {
	return await api.post("/auth/login", data)
}

export const logoutStudent = async () => {
	return await api.post("/auth/logout")
}

// chat
export const createNewChat = async (
	type: "casual" | "quiz",
): Promise<AxiosResponse<NewChatResponse, Error>> => {
	return await api.post(`/chat/${type}`)
}

export const sendMessageToChat = async (
	chat: number | string,
	data: FormData | { content: string },
): Promise<AxiosResponse<SendMessageResponse, Error>> => {
	return await api.post(`/chat/${chat}/message`, data)
}

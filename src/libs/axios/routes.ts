import api from "./api"

// pages (auth needed)
export const getHome = async () => {
	try {
		const res = await api.get("/pages/home")
		return res.data
	} catch (error) {
		console.log(error)
	}
}

export const getAllSources = async () => {
	try {
		const res = await api.get("/pages/sources")
		return res.data
	} catch (error) {
		console.log(error)
	}
}

export const getOneSource = async (source: number | string) => {
	try {
		const res = await api.get(`/pages/sources/${source}`)
		return res.data
	} catch (error) {
		console.log(error)
	}
}

export const getLessonSliders = async (lesson: number | string) => {
	try {
		const res = await api.get(`/pages/sources/lessons/${lesson}/sliders`)
		return res.data
	} catch (error) {
		console.log(error)
	}
}

export const getLessonVideos = async (lesson: number | string) => {
	try {
		const res = await api.get(`/pages/sources/lessons/${lesson}/videos`)
		return res.data
	} catch (error) {
		console.log(error)
	}
}

export const getLessonFlashcards = async (lesson: number | string) => {
	try {
		const res = await api.get(`/pages/sources/lessons/${lesson}/flashcards`)
		return res.data
	} catch (error) {
		console.log(error)
	}
}

export const getWeeklySchedule = async () => {
	try {
		const res = await api.get("/pages/weekly-schedule")
		return res.data
	} catch (error) {
		console.log(error)
	}
}

export const getNotifications = async () => {
	try {
		const res = await api.get("/pages/notifications")
		return res.data
	} catch (error) {
		console.log(error)
	}
}

export const getSettings = async () => {
	try {
		const res = await api.get("/pages/settings")
		return res.data
	} catch (error) {
		console.log(error)
	}
}

export const getChatHistory = async () => {
	try {
		const res = await api.get("/pages/chat/history")
		return res.data
	} catch (error) {
		console.log(error)
	}
}

export const getChatMessages = async (chat: number | string) => {
	try {
		const res = await api.get(`/pages/chat/${chat}`)
		return res.data
	} catch (error) {
		console.log(error)
	}
}

// pages (no auth needed)
export const getAboutUs = async () => {
	try {
		const res = await api.get("/pages/about-us")
		return res.data
	} catch (error) {
		console.log(error)
	}
}

export const getContactUs = async () => {
	try {
		const res = await api.get("/pages/contact-us")
		return res.data
	} catch (error) {
		console.log(error)
	}
}

// student auth
export const login = async (data: { username?: string; password?: string }) => {
	try {
		const res = await api.post("/auth/login", data)
		return res.data
	} catch (error) {
		console.log(error)
	}
}

export const logout = async () => {
	try {
		const res = await api.post("/auth/logout")
		return res.data
	} catch (error) {
		console.log(error)
	}
}

// chat
export const createNewChat = async (type: "casual" | "quiz") => {
	try {
		const res = await api.post(`/chat/${type}`)
		return res.data
	} catch (error) {
		console.log(error)
	}
}

export const sendMessageToChat = async (
	chat: number | string,
	data: FormData | { content: string },
) => {
	try {
		const res = await api.post(`/chat/${chat}/message`, data)
		return res.data
	} catch (error) {
		console.log(error)
	}
}

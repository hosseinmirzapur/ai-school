import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

interface AuthState {
	isAuthenticated: boolean
	login: () => void
	logout: () => void
}

export const useAuthStore = create(
	persist<AuthState>(
		(set) => ({
			isAuthenticated: false,
			login: () => {
				set({ isAuthenticated: true })
				document.cookie = `isAuthenticated=${true}; path=/; Secure; HttpOnly`
			},
			logout: () => {
				set({ isAuthenticated: false })
				document.cookie =
					"isAuthenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
				window.localStorage.clear()
				window.location.href = "/auth"
			},
		}),
		{
			name: "auth-storage",
			storage: createJSONStorage(() => localStorage),
		},
	),
)

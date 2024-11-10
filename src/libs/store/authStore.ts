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
			login: () => set({ isAuthenticated: true }),
			logout: () => set({ isAuthenticated: false }),
		}),
		{
			name: "auth-storage",
			storage: createJSONStorage(() => localStorage),
		},
	),
)

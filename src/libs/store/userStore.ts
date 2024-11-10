import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

interface UserState {
	username: string
	token: string
	fillData: (data: { username: string; token: string }) => void
}

export const useUserStore = create(
	persist<UserState>(
		(set) => ({
			token: "",
			username: "",
			fillData: (data: { username: string; token: string }) =>
				set({ username: data.username, token: data.token }),
		}),
		{
			name: "user-store",
			storage: createJSONStorage(() => localStorage),
		},
	),
)

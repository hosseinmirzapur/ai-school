import axios from "axios"

const api = axios.create({
	baseURL: "https://api.school.irapardaz.ir/api",
	headers: {
		common: {
			Accept: "application/json",
		},
	},
})
api.interceptors.request.use((config) => {
	const userStore = localStorage.getItem("user-store")
	if (userStore) {
		const userStoreObject = JSON.parse(userStore) as {
			state: {
				token: string
				username: string
			}
		}

		config.headers.Authorization = `Bearer ${userStoreObject.state.token}`
	}

	return config
})

api.interceptors.response.use(
	(response) => {
		if (response.data?.status != 200) {
			switch (response.data?.message) {
				case "auth_err":
					return Promise.reject(
						new Error("نام کاربری یا رمز عبور وارد شده صحیح نمیباشد"),
					)
			}
		}
		return response
	},
	(error) => {
		const { response } = error
		if (!response) {
			return Promise.reject(new Error("خطای شبکه یا عدم دسترسی به سرور"))
		}

		const status = response.status

		// Common error handlers for specific status codes
		switch (status) {
			case 400:
				// Bad Request: client-side input error
				return Promise.reject(
					new Error(
						"درخواست نامعتبر. لطفاً ورودی خود را بررسی کرده و دوباره تلاش کنید.",
					),
				)

			case 401:
				// Unauthorized: possibly redirect to login
				window.location.href = "/auth"
				return Promise.reject(
					new Error(
						"دسترسی غیرمجاز. لطفاً وارد حساب کاربری خود شوید و دوباره تلاش کنید.",
					),
				)

			case 403:
				// Forbidden: user doesn’t have permission
				window.location.href = "/auth"
				return Promise.reject(
					new Error("دسترسی مسدود است. شما مجاز به انجام این عمل نیستید."),
				)

			case 404:
				// Not Found: endpoint or resource not available
				return Promise.reject(
					new Error(
						"منبع یافت نشد. داده‌های درخواست شده در دسترس نیستند.",
					),
				)

			case 429:
				// Too Many Requests: rate limit exceeded
				return Promise.reject(
					new Error(
						"تعداد درخواست‌ها بیش از حد است. لطفاً کمی صبر کرده و دوباره تلاش کنید.",
					),
				)

			case 500:
				// Internal Server Error: server-side issue
				return Promise.reject(
					new Error(
						"خطای سرور. مشکلی در سرور رخ داده است. لطفاً بعداً دوباره تلاش کنید.",
					),
				)

			case 502:
				// Bad Gateway: usually an upstream server error
				return Promise.reject(
					new Error("گذرگاه نامعتبر. مشکلی موقت در سرور رخ داده است."),
				)

			case 503:
				// Service Unavailable: server temporarily unavailable
				return Promise.reject(
					new Error("خدمات در دسترس نیست. سرور در حال تعمیر است."),
				)

			case 504:
				// Gateway Timeout: upstream server didn’t respond in time
				return Promise.reject(
					new Error(
						"زمان پاسخگویی سرور به پایان رسید. سرور خیلی دیر پاسخ داد.",
					),
				)

			default:
				// Handle any other status codes not explicitly covered
				return Promise.reject(
					new Error(
						response.data?.message || "یک خطای غیرمنتظره رخ داده است.",
					),
				)
		}
	},
)

export default api

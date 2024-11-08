import toast from "react-hot-toast"

export const handleError = (error: any) => {
	toast.error(error.message)
}

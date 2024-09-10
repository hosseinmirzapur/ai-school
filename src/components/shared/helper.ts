import toast from "react-hot-toast"

export const showAlert = (message: string) => {
   toast(message, {
      position: "bottom-left",
   })
}

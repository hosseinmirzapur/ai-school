import type { Config } from "tailwindcss"

import { nextui } from "@nextui-org/react"

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         animation: {
            "spinner-ease-spin": "spinner-ease-spin 1.2s ease-in-out infinite",
         },
         keyframes: {
            "spinner-ease-spin": {
               "0%": { transform: "rotate(0deg)" },
               "100%": { transform: "rotate(360deg)" },
            },
         },
      },
   },
   plugins: [nextui()],
   darkMode: "class",
}
export default config

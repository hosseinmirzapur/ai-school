import AppContainer from "./AppContainer"
import "./globals.css"
import "../../public/fonts/Yekan.css"
import "react-multi-carousel/lib/styles.css"

export const metadata = {
   title: "AI school",
   description: "E-learn with AI",
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <body
            style={{
               fontFamily: "Yekan",
            }}
         >
            <AppContainer>{children}</AppContainer>
         </body>
      </html>
   )
}

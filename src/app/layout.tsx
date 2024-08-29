import AppContainer from "./AppContainer"
import "./globals.css"

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
         <body>
            <AppContainer>{children}</AppContainer>
         </body>
      </html>
   )
}

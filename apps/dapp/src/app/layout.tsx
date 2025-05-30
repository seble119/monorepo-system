import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "../../../../packages/header/header"
import { Footer } from "../../../../packages/footer/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Monorepo Demo App",
  description: "Demonstration of modular monorepo system with reusable components",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Header />
        <div className="min-h-screen bg-gray-50">{children}</div>
       <Footer />
      </body>
    </html>
  )
}

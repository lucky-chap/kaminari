import "@/styles/globals.css"
import React from "react"

import { Space_Grotesk as Grotesk } from "@next/font/google"

const grotesk = Grotesk({
  variable: "--font-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  preload: true,
  subsets: ["latin"],
})

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={`flex-col bg-black font-grotesk text-white ${grotesk.className}`}
      >
        {/* <Header items={navItems} /> */}
        {/* <Palette /> */}
        <main className="min-h-screen">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}

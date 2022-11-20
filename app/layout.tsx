import "@/styles/globals.css"
import { Archivo } from "@next/font/google"
import React from "react"

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
})

export default function RootLayout({
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
      <body className={`${archivo.className} --font-archivo`}>{children}</body>
    </html>
  )
}

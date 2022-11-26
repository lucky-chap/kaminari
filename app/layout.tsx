import "@/styles/globals.css"
import { SiteFooter } from "@/ui/Footer"
import Header from "@/ui/Header"
import { Archivo } from "@next/font/google"
import React from "react"
import { NavItem } from "types"

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
})

const navItems: NavItem[] = [
  {
    title: "About",
    isExternal: false,
    href: "/about",
  },
  {
    title: "Source Code",
    isExternal: true,
    href: "https://github.com/lucky-chap/kaminari",
  },
]

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
        className={`${archivo.className} --font-archivo min-h-screen flex-col bg-black text-white`}
      >
        <Header items={navItems} />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}

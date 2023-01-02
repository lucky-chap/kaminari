import "@/styles/globals.css"
import { Footer } from "@/ui/Footer"
import Header from "@/ui/Header"
import { Inter } from "@next/font/google"
import React from "react"
import { NavItem } from "types"

const inter = Inter({
  variable: "--font-inter",
  weight: ["900"],
  preload: false,
  subsets: ["latin"],
})

const navItems: NavItem[] = [
  {
    title: "Blog",
    isExternal: false,
    href: "/blog",
  },
  {
    title: "Projects",
    isExternal: false,
    href: "/projects",
  },
  {
    title: "About",
    isExternal: false,
    href: "/about",
  },
  // {
  //   title: "Source Code",
  //   isExternal: true,
  //   href: "https://github.com/lucky-chap/kaminari",
  // },
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
      <body className="min-h-screen flex-col bg-black font-inter text-white">
        <Header items={navItems} />
        {/* <Palette /> */}
        <section className="min-h-[85vh]">{children}</section>
        <Footer />
      </body>
    </html>
  )
}

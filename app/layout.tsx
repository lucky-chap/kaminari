"use client"

import "@/styles/globals.css"
import { Footer } from "@/ui/Footer"
import Header from "@/ui/Header"
import { Inter } from "@next/font/google"
import React from "react"
import { NavItem } from "types"

// import Palette from "@/ui/components/Palette"

const inter = Inter({
  variable: "--font-inter",
})

const navItems: NavItem[] = [
  {
    title: "Blog",
    isExternal: false,
    href: "/blog",
  },
  {
    title: "About",
    isExternal: false,
    href: "/about",
  },
  {
    title: "Projects",
    isExternal: false,
    href: "/projects",
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
        {children}
        <Footer />
      </body>
    </html>
  )
}

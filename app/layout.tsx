import "@/styles/globals.css"
import React from "react"

import { Space_Mono as SpaceMono } from "next/font/google"

const mono = SpaceMono({
  variable: "--font-mono",
  weight: ["400", "700"],
  preload: true,
  subsets: ["latin"],
})

// this export replaces the need to use the "head" file in Next.js 13.2
// https://beta.nextjs.org/docs/api-reference/file-conventions/head#migration-guide
export const metadata = {
  title: "Kaminari",
  generator: "Next.js",
  applicationName: "Kaminari",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript", "Boilerplate", "Template"],
  authors: [{ name: "Virgil", url: "https://heylel.vercel.app" }],
  colorScheme: "dark",
  creator: "Virgil",
  publisher: "Virgil",
  alternates: {},
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Kaminari",
    description: "Next.js Tailwind CSS Starter Template",
    url: "https://kaminari.vercel.app",
    siteName: "Kaminari",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "Next.js Tailwind CSS Starter Template",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
  },
}

export default function IndexLayout({
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
        className={`flex-col bg-black font-mono text-white ${mono.className}`}
      >
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}

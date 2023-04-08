"use client"

import React from "react"
import MenuButton from "./MenuButton"

import { Space_Mono as SpaceMono } from "next/font/google"
import { useRouter } from "next/navigation"

const mono = SpaceMono({
  variable: "--font-mono",
  weight: ["400", "700"],
  preload: true,
  subsets: ["latin"],
})

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  return (
    <>
      <div className="flex w-full items-center justify-between">
        <button
          onClick={() => router.push("/")}
          className={`flex cursor-default items-center text-2xl font-bold ${mono.className}`}
        >
          Kami.{" "}
          <span
            className={`text-sm font-bold ${mono.className} group ml-2 inline-block rounded-3xl bg-[#ffefd6] px-3 text-black`}
          >
            <span className="">v2</span>
          </span>
        </button>

        <MenuButton />
      </div>
      {children}
      <div className="flex w-full items-center justify-between">
        <button
          type="button"
          onClick={() => router.push("/")}
          className={`text-sm font-bold ${mono.className} cursor-default rounded-3xl bg-[#e1ffe133] px-7 py-2 opacity-50 group-hover:bg-[#e1ffe1c5]`}
        >
          <span className="">Back</span>
        </button>
        <div
          className={`text-xs font-bold ${mono.className} py-2  group-hover:bg-[#e1ffe1c5]`}
        >
          <p className="text-xs">
            <span className="inline-block text-white">1</span>
            <span className="inline-block px-3 opacity-50">/</span>
            <span className="inline-block text-white opacity-50">3</span>
          </p>
        </div>

        <button
          type="button"
          onClick={() => router.push("/blog")}
          className={`text-sm font-bold ${mono.className} cursor-default rounded-3xl bg-white px-7 py-2 text-black`}
        >
          <span className="">Next</span>
        </button>
      </div>
    </>
  )
}

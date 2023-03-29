"use client"

import MenuButton from "@/ui/components/MenuButton"
import { Space_Mono as SpaceMono } from "@next/font/google"
import React from "react"

const mono = SpaceMono({
  variable: "--font-mono",
  weight: ["400", "700"],
  preload: true,
  subsets: ["latin"],
})

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row">
      <section className="md flex h-[70vh] w-full flex-col justify-between p-9 md:h-auto">
        <div className="flex w-full items-center justify-between">
          <h2 className={`text-2xl font-bold ${mono.className}`}>Kami.</h2>
          {/* <p className="text-xs font-bold uppercase tracking-wide">
            Prototype <span className={`${mono.className}`}>01</span>
          </p> */}
          <MenuButton />
        </div>

        <div className="mx-auto flex max-w-sm flex-col justify-between">
          <span
            className={`-mt-14 inline-block text-[64px] font-bold ${mono.className}`}
          >
            01
          </span>
          {/* <p className="pb-6 font-semibold text-[#ffffffb3]">
            Cherry Indian spiced Bolivian rainbow pepper berry appetizer banana
            bread matcha main course Thai zesty tofu pad thai banana bread
            simmer basmati peanut butter almond milk oranges cozy cinnamon
            oatmeal lime mango crisp fall udon noodles chili.
          </p> */}
          <p className="pb-6 font-semibold text-[#ffffffb3]">
            Kami (short for Kaminari) is a modern Next.js and Tailwind CSS
            boilerplate that includes all you need to build amazing projects. No
            need to spend time on configuring the basic needs of a project. We
            did that for you - Created by{" "}
            <a
              href="https://heylel.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="pb-1 text-white underline"
            >
              Virgil
            </a>
          </p>
          {/* <textarea
            name=""
            id=""
            cols={30}
            rows={3}
            className="min-h-[0px] rounded-md pb-6"
          /> */}
          <button
            className={`text-base font-bold ${mono.className} group rounded bg-white px-7 py-4 text-center text-black`}
          >
            <span className="">Repo</span>
          </button>
        </div>

        <div className="flex w-full items-center justify-between">
          <button
            className={`text-sm font-bold ${mono.className} group rounded-3xl bg-[#e1ffe133] px-7 py-2 opacity-50 group-hover:bg-[#e1ffe1c5]`}
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
            className={`text-sm font-bold ${mono.className} group rounded-3xl bg-white px-7 py-2 text-black`}
          >
            <span className="">Next</span>
          </button>
        </div>
      </section>

      {/* second half */}

      <section className="md flex h-screen w-full flex-col justify-between bg-[#e0f5ff] p-9"></section>
    </main>
  )
}

"use client"

import Link from "next/link"

import Image from "next/image"
import { FiGithub, FiLink } from "react-icons/fi"
// import { IoReturnUpBack } from "react-icons/io"
import { MdOutlineKeyboardBackspace } from "react-icons/md"
import planetImage from "../../../public/assets/planet.jpg"

export default function Page() {
  return (
    <div className="mx-auto max-w-2xl px-2 pt-10">
      <Link
        href="/projects"
        className="group inline-flex rounded bg-gray-1001 p-2 transition-colors duration-100 ease-linear hover:bg-gray-1001/70"
      >
        <MdOutlineKeyboardBackspace className="text-gray-one transition-colors duration-100 ease-linear group-hover:text-gray-100" />
      </Link>
      <div className="flex items-center justify-between">
        <h2 className="leading-tighter mt-3 max-w-2xl text-3xl font-extrabold tracking-tighter md:text-5xl">
          Planetaria
        </h2>
        <div className="flex items-center pt-2">
          <a
            href="https://github.com/lucky-chap/kaminari"
            target="_blank"
            rel="noreferrer"
            className="group mr-2 rounded bg-gray-1001 p-2 transition-colors duration-100 ease-linear hover:bg-gray-1001/70"
          >
            <FiGithub className="text-gray-one transition-colors duration-100 ease-linear group-hover:text-gray-100" />
          </a>
          <a
            href="https://kaminari.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="group rounded bg-gray-1001 p-2 transition-colors duration-100 ease-linear hover:bg-gray-1001/70"
          >
            <FiLink className="text-gray-one transition-colors duration-100 ease-linear group-hover:text-gray-100" />
          </a>
        </div>
      </div>
      <p className="py-2 font-medium text-gray-one transition-colors duration-100 ease-linear group-hover:text-gray-300">
        Creating technology to empower civilians to explore space on their own
        terms.
      </p>
      <Image
        src={planetImage}
        alt="Planet Project"
        className="w-full rounded"
        // height={100}
        // width={3000}
        loading="lazy"
      />
      <div className="w-full">
        <a
          className="mt-4 flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-6 align-middle font-medium text-white transition-all duration-100 ease-linear hover:bg-blue-700 sm:mb-0 sm:w-auto"
          href="https://kaminari.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          See Project
        </a>
      </div>
    </div>
  )
}

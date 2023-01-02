"use client"

import Image from "next/image"
import GitHubButton from "react-github-btn"
import userLogo from "../public/assets/user.jpg"

export function Footer() {
  return (
    <footer className="mx-auto mt-auto max-w-4xl py-3 text-gray-one/70">
      <div className="flex items-center justify-center">
        <p className="group flex items-center text-xs">
          Created by
          <a
            href="https://quavo.vercel.app"
            rel="noreferrer"
            target="_blank"
            className="inline-block px-1 font-bold text-gray-one transition-colors duration-100 ease-linear group-hover:text-white"
          >
            Heylel
          </a>
          <span>
            <Image
              className="h-6 w-6 rounded-full"
              src={userLogo}
              alt="creator"
            />{" "}
          </span>
        </p>
        <span className="mx-2 inline-block h-1 w-1 rounded-full bg-gray-one/70" />
        <p className="group flex items-center text-xs">
          <a
            href="https://github.com/lucky-chap/kaminari"
            rel="noreferrer"
            target="_blank"
            className="inline-block font-bold text-gray-one/70 transition-colors duration-100 ease-linear group-hover:text-white"
          >
            Source Code
          </a>
        </p>
        <span className="mx-2 inline-block h-1 w-1 rounded-full bg-gray-one/70" />

        <div className="mt-1 text-xs">
          <GitHubButton
            href="https://github.com/lucky-chap/kaminari"
            data-color-scheme="no-preference: dark; light: dark; dark: dark;"
            data-icon="octicon-star"
            data-show-count="true"
            aria-label="Star lucky-chap/kaminari on GitHub"
          >
            Star
          </GitHubButton>
        </div>
      </div>
    </footer>
  )
}

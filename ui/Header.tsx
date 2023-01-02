/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-expressions */

"use client"

import { cn } from "@/lib/utils"
import { Icons } from "@/ui/components/icons"
import { MobileNav } from "@/ui/components/mobile-nav"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import React, { useEffect, useState } from "react"
import { NavItem } from "types"

import { FiGithub } from "react-icons/fi"

interface MainNavProps {
  items: NavItem[]
  children?: React.ReactNode
}

export default function Header({ items, children }: MainNavProps) {
  const [top, setTop] = useState(true)
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
  const segment = useSelectedLayoutSegment()

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener("scroll", scrollHandler)
    return () => window.removeEventListener("scroll", scrollHandler)
  }, [top])
  return (
    <header
      className={`sticky top-0 z-40 border-b border-zinc-900 ${
        !top && "bg-transparent shadow-lg backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex h-12 items-center justify-between py-2 px-2">
          <div className="flex justify-between gap-6 md:gap-10">
            <Link className="hidden items-center space-x-2 md:flex" href="/">
              <Icons.logo />

              <span className="hidden font-bold sm:inline-block">Kaminari</span>
            </Link>

            <button
              className="flex items-center space-x-2 md:hidden"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <Icons.close /> : <Icons.logo />}
              <span className="font-bold">
                {showMobileMenu ? "Close" : "Menu"}
              </span>
            </button>
          </div>
          <nav className="hidden gap-6 md:flex">
            {items.map((item: NavItem, index: number) => (
              <Link
                key={index}
                target={item.isExternal ? "_blank" : "_self"}
                rel={item.isExternal ? "noreferrer" : undefined}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "font- flex items-center text-sm font-medium text-[#888] transition-all duration-75 ease-linear hover:text-zinc-50",
                  item.href.startsWith(`/${segment}`) && "text-white",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
          {/* <nav>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=lucky-chap&repo=kaminari&type=star&count=true&size=large"
              frameBorder="0"
              scrolling="0"
              width="150"
              height="20"
              title="GitHub"
              className="flex justify-end"
            />
          </nav> */}
          <a
            href="https://github.com/lucky-chap/kaminari"
            target="_blank"
            rel="noreferrer"
            className="group rounded bg-gray-1000 p-2 transition-colors duration-100 ease-linear hover:bg-gray-1001"
          >
            <FiGithub className="text-gray-one transition-colors duration-100 ease-linear group-hover:text-gray-100" />
          </a>
        </div>
        {showMobileMenu && <MobileNav items={items}>{children}</MobileNav>}
      </div>
    </header>
  )
}

"use client"

import Banner from "@/ui/Banner"
import Features from "@/ui/Features"
import { SiteFooter } from "@/ui/Footer"
import Header from "@/ui/Header"
import Hero from "@/ui/Hero"
import { NavItem } from "types"

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

export default function Home() {
  return (
    <section>
      {" "}
      <section className="flex min-h-screen flex-col bg-black text-white">
        <Header items={navItems} />
        <Hero />
        <Features />
        <Banner />
        <SiteFooter />
      </section>
    </section>
  )
}

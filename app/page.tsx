"use client"

import Banner from "@/ui/Banner"
import Features from "@/ui/Features"
import Hero from "@/ui/Hero"

export default function Home() {
  return (
    <section className="min-h-[80vh]">
      <Hero />
      <Features />
      <Banner />
    </section>
  )
}

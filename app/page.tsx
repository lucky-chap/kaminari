import Banner from "@/ui/Banner"
import Features from "@/ui/Features"
import { SiteFooter } from "@/ui/Footer"
import Header from "@/ui/Header"
import Hero from "@/ui/Hero"

export default function Home() {
  return (
    <section>
      {" "}
      <section className="flex min-h-screen flex-col bg-black text-white">
        <Header />
        <Hero />
        <Features />
        <Banner />
        <SiteFooter />
      </section>
    </section>
  )
}

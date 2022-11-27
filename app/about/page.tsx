import Image from "next/image"
import siteBanner from "../../public/site-banner-white.png"

export default function Home() {
  return (
    <section className="container mx-auto min-h-[80vh] text-center text-gray-one">
      <div className="px-2 pt-10">
        <h2 className="mx-auto max-w-xl px-2 pb-4 pt-6 text-3xl font-bold leading-relaxed text-brand-main sm:text-5xl md:max-w-2xl md:px-6 md:text-[54px]">
          <span>About</span> <span className="mt-1 inline-block">Kaminari</span>
        </h2>
        <p className="font-semibold">
          <span className="p-1 font-bold italic text-white underline underline-offset-4">
            Kaminari
          </span>{" "}
          means{" "}
          <span className="p-1 font-bold italic text-white underline underline-offset-4">
            lightning
          </span>{" "}
          in Japanese. This template is built with simplicity and speed in mind.
        </p>
        <p className="pb-4 font-semibold">
          Clone Kaminari now and get up to speed with your new project
        </p>
        <a
          href="https://github.com/lucky-chap/kaminari"
          target="_blank"
          rel="noreferrer"
        >
          <button className="hover:bg-brand-400 focus:ring-brand-500 relative mb-4 inline-flex h-8 w-full items-center justify-center rounded-md border border-transparent bg-white px-10 py-5 text-sm font-bold text-gray-1000 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 sm:w-auto">
            Use Template
          </button>
        </a>
        <Image src={siteBanner} alt="banner" className="mx-auto rounded" />
      </div>
    </section>
  )
}

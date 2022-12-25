import Image from "next/image"
import gradientBG from "../public/assets/gradient.png"
import rocketImage from "../public/rocket.webp"

export default function Hero() {
  return (
    <section className="container relative mx-auto text-center">
      <div className="relative overflow-hidden px-2 pt-20">
        <Image
          className="absolute -top-[10rem] left-[0rem] -z-10 sm:-top-[25rem] md:left-[0rem] md:-top-[30rem] lg:-top-[50rem] lg:left-[15rem]"
          src={gradientBG}
          alt="gradient"
          height={300}
          width={1400}
        />
        {/* badge */}
        <div className="mx-auto flex max-w-[15rem] cursor-pointer items-center justify-around rounded-3xl bg-gray-100 p-2 text-center text-black transition-all duration-100 ease-linear hover:bg-gray-200">
          <Image src={rocketImage} width={20} height={20} alt="rocket" />
          <p className="font-grotesk text-sm font-light">
            #1 Next.js Starter Template
          </p>
        </div>
        {/* text */}

        <h1
          className="leading-tighter my-4 mx-auto max-w-2xl text-5xl font-extrabold tracking-tighter md:text-6xl"
          data-aos="zoom-y-out"
        >
          Make your website{" "}
          <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            wonderful
          </span>
        </h1>
        <p className="mx-auto max-w-xl px-2 pb-6 font-grotesk text-xl font-medium text-gray-one md:max-w-2xl md:px-6">
          Power packed, no nonsense, production-ready Next.js starter template
          to get you up to speed in your next project.
        </p>
        <div
          className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
          data-aos="zoom-y-out"
          data-aos-delay="300"
        >
          <div>
            <a
              className="mb-4 inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 align-middle font-medium text-white transition-all duration-100 ease-linear hover:bg-blue-700 sm:mb-0 sm:w-auto"
              href="https://github.com/lucky-chap/kaminari/fork"
              target="_blank"
              rel="noreferrer"
            >
              Use Template
            </a>
          </div>
          <div>
            <a
              className="inline-flex w-full justify-center rounded-md border border-transparent bg-gray-900 py-2 px-4 align-middle font-medium text-white transition-all duration-100 ease-linear hover:bg-gray-800 sm:ml-4 sm:w-auto"
              href="#0"
            >
              Star ✨
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

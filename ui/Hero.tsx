/* eslint-disable prettier/prettier */
import Image from "next/image"
// import rocketImage from "../public/rocket.webp"

export default function Hero() {
  return (
    <section className="relative w-full">
      <section className="container mx-auto text-center">
        {/* This image is absolutely positioned to the page, not the hero */}
        <Image
          className="absolute -top-[5rem] left-[0rem] -z-10 sm:-top-[25rem] md:left-[rem] md:-top-[20rem]"
          src="/assets/gradient.png"
          alt="gradient"
          height={300}
          width={1400}
          loading="lazy"
        />
        <div className="px-2">
          {/* badge */}
          {/* <div className="mx-auto flex max-w-[15rem] cursor-pointer items-center justify-around rounded-3xl bg-gray-100 p-2 text-center text-black transition-all duration-100 ease-linear hover:bg-gray-200">
            <Image src={rocketImage} width={20} height={20} alt="rocket" />
            <p className="text-sm font-light text-zinc-400">
              #1 Next.js Starter Template
            </p>
          </div> */}
          {/* text */}

          <h1
            className="leading-tighter my-4 mx-auto max-w-2xl text-5xl font-extrabold tracking-tighter md:text-6xl"
            data-aos="zoom-y-out"
          >
            Move from development to{" "}
            <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              production,
            </span>
            <span className="relative inline-block bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text pl-2 pr-5 italic text-transparent">
              <svg
                width="68"
                height="5"
                viewBox="0 0 68 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-2/3 left-0 right-1 -z-10 h-[0.58em] w-full"
              >
                <path
                  d="M1 1C1 1 25.411 7.75 67 1"
                  stroke="#93C5FD"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              fast
            </span>
          </h1>
          <p className="mx-auto max-w-xl px-2 pb-6 font-grotesk text-lg font-medium text-gray-one md:max-w-2xl md:px-6">
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
                className="mb-4 inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-6 align-middle font-medium text-white transition-all duration-100 ease-linear hover:bg-blue-700 sm:mb-0 sm:w-auto"
                href="https://github.com/lucky-chap/kaminari/generate"
                target="_blank"
                rel="noreferrer"
              >
                Use Template
              </a>
            </div>
            <div>
              <a
                className="inline-flex w-full justify-center rounded-md border border-transparent bg-gray-1000 py-2 px-6 align-middle font-medium text-white transition-all duration-100 ease-linear hover:bg-gray-900 sm:ml-4 sm:w-auto"
                href="https://github.com/lucky-chap/kaminari"
                target="_blank"
                rel="noreferrer"
              >
                Star ✨
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

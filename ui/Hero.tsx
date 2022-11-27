import Image from "next/image"
import githubImage from "../public/assets/github.png"
import rocketImage from "../public/rocket.webp"

export default function Hero() {
  return (
    <section className="container mx-auto text-center">
      <div className="px-2 pt-20">
        {/* badge */}
        <div className="mx-auto flex max-w-[15rem] items-center justify-around rounded-3xl border border-gray-1002 bg-gray-1001 p-2 text-center text-white">
          <Image src={rocketImage} width={20} height={20} alt="rocket" />
          <p className="text-sm font-bold">#1 Next.js Starter Template</p>
        </div>
        {/* text */}
        <h2 className="mx-auto max-w-xl px-2 pb-5 pt-6 text-3xl font-bold leading-relaxed text-brand-main sm:text-5xl md:max-w-2xl md:px-6 md:text-[54px]">
          <span>Starter Template</span>{" "}
          <span className="mt-1 inline-block">For Your Next Project</span>
        </h2>
        <p className="mx-auto max-w-xl px-2 pb-6 text-base font-medium leading-relaxed text-gray-one md:max-w-2xl md:px-6">
          Power packed, no nonsense, production-ready Next.js starter template
          to get you up to speed in your next project.
        </p>
        <div className="flex items-center justify-center">
          <a
            href="https://github.com/lucky-chap/kaminari/fork"
            target="_blank"
            rel="noreferrer"
          >
            <button className="relative inline-flex h-8 items-center rounded-md border border-transparent bg-white px-5 py-5 text-sm font-bold text-gray-1000 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 sm:px-10">
              <Image
                src={githubImage}
                className="mr-2"
                width={20}
                height={20}
                alt="GitHub"
              />
              Fork Code
            </button>
          </a>
          <a
            href="https://github.com/lucky-chap/kaminari"
            target="_blank"
            rel="noreferrer"
          >
            <button className="hover:bg-brand-400 focus:ring-brand-500 mt- relative inline-flex h-8 cursor-pointer items-center rounded-md border border-transparent px-10 py-5 text-sm font-bold text-white transition-colors duration-150 ease-linear hover:text-brand-main focus:outline-none">
              Star on GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-1 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

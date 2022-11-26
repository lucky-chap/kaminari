/* eslint-disable jsx-a11y/media-has-caption */
export default function Banner() {
  return (
    <section className="container mx-auto max-w-3xl pt-16">
      <div className="grid items-center justify-center gap-4 px-2 py-10 sm:grid-cols-2">
        {/* <video
          autoPlay
          controls={false}
          muted
          loop
          className="w-full rounded-md"
        >
          <source src="/assets/astronaut.mp4" type="video/mp4" />
        </video> */}
        <div className="">
          <h2 className="mx-auto max-w-xl pr-2 pb-5 text-xl font-bold leading-relaxed sm:text-2xl md:max-w-2xl md:text-3xl">
            Start using Kaminari now!
          </h2>
          <a
            href="https://github.com/lucky-chap/nextjs-starter-template"
            target="_blank"
            rel="noreferrer"
          >
            <button className="hover:bg-brand-400 focus:ring-brand-500 mt- relative inline-flex h-8 w-full items-center justify-center rounded-md border border-transparent bg-white px-10 py-5 text-sm font-bold text-gray-1000 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 sm:w-auto">
              Fork Code
            </button>
          </a>
        </div>

        <div className="mt-16 flex justify-center sm:mt-0">
          {" "}
          <svg
            width="188"
            height="179"
            viewBox="0 0 188 179"
            className="h-44 w-44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="94" cy="89.5" rx="94" ry="89.5" fill="white" />
            <path
              d="M127.37 88.7054L83.1826 149.643C82.714 150.289 82.0945 150.721 81.418 150.873C80.7415 151.025 80.045 150.889 79.434 150.485C78.8231 150.082 78.3311 149.433 78.0326 148.637C77.7341 147.841 77.6455 146.941 77.7801 146.074L83.5663 108.837L60.8293 97.8624C60.3434 97.6279 59.91 97.2428 59.5673 96.7413C59.2247 96.2397 58.9833 95.6371 58.8648 94.9869C58.7462 94.3367 58.754 93.6589 58.8875 93.0134C59.021 92.368 59.2761 91.7749 59.6301 91.2866L103.818 30.3491C104.286 29.703 104.906 29.2712 105.582 29.1191C106.259 28.9671 106.955 29.1032 107.566 29.5068C108.177 29.9103 108.669 30.5593 108.968 31.3554C109.266 32.1514 109.355 33.051 109.22 33.9177L103.434 71.1551L126.171 82.1296C126.657 82.3641 127.09 82.7492 127.433 83.2508C127.776 83.7523 128.017 84.3549 128.135 85.0051C128.254 85.6554 128.246 86.3332 128.113 86.9786C127.979 87.624 127.724 88.2171 127.37 88.7054V88.7054Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"

export default function Features() {
  return (
    <section className="container mx-auto text-center">
      <div className="px-2 py-16">
        {" "}
        <h2 className="mx-auto max-w-xl px-2 pb-5 pt-6 text-xl font-bold leading-relaxed sm:text-2xl md:max-w-2xl md:px-6 md:text-3xl">
          <span>Loaded with modern features</span>{" "}
          <span className="mt-1 inline-block">
            and tools for optimal productivity
          </span>
        </h2>
        <div className="container mx-auto mt-7 grid max-w-4xl justify-center gap-4 sm:grid-cols-2 md:max-w-[56rem] md:grid-cols-3">
          <article className="relative overflow-hidden rounded-lg border border-[#212121] bg-[#161616] shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6 text-slate-200">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
              </svg>
              <div className="space-y-2">
                <h3 className="text-left font-bold text-slate-100">
                  Next.js 13
                </h3>
                <p className="text-left text-sm font-medium text-slate-100">
                  The power of full-stack now on the frontend
                </p>
              </div>
            </div>
          </article>
          <article className="relative overflow-hidden rounded-lg border border-[#212121] bg-[#161616] shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6 text-slate-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 54 33"
                className="h-12 w-12"
              >
                <g clipPath="url(#prefix__clip0)">
                  <path
                    fill="#38bdf8"
                    fillRule="evenodd"
                    d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                    clipRule="evenodd"
                  />
                </g>
                <defs>
                  <clipPath id="prefix__clip0">
                    <path fill="#fff" d="M0 0h54v32.4H0z" />
                  </clipPath>
                </defs>
              </svg>
              <div className="space-y-2">
                <h3 className="text-left font-bold text-slate-100">
                  TailwindCSS 3
                </h3>
                <p className="text-left text-sm font-medium text-slate-100">
                  Utility-first development with ease
                </p>
              </div>
            </div>
          </article>
          <article className="relative overflow-hidden rounded-lg border border-[#212121] bg-[#161616] shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6 text-slate-200">
              <Image
                src="/assets/ts-logo-128.svg"
                width={48}
                height={48}
                alt="Prettier"
              />

              <div className="space-y-2">
                <h3 className="text-left font-bold text-slate-100">
                  TypeScript
                </h3>
                <p className="text-left text-sm font-medium text-slate-100">
                  Better tooling developer experience at any scale
                </p>
              </div>
            </div>
          </article>
          <article className="relative overflow-hidden rounded-lg border border-[#212121] bg-[#161616] shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6 text-slate-200">
              <Image
                src="/assets/jest.png"
                width={48}
                height={48}
                alt="Prettier"
              />

              <div className="space-y-2">
                <h3 className="text-left font-bold text-slate-100">Jest</h3>
                <p className="text-left text-sm font-medium text-slate-100">
                  The delightful JavaScript Testing Framework
                </p>
              </div>
            </div>
          </article>
          <article className="relative overflow-hidden rounded-lg border border-[#212121] bg-[#161616] shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6 text-slate-200">
              <svg
                width="50"
                height="58"
                viewBox="0 0 67 58"
                className="mb-3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.903944 27.705L15.8879 1.638C16.4319 0.695 17.4379 0 18.5259 0H48.4929C49.5819 0 50.5869 0.695 51.1319 1.638L66.1149 27.648C66.3822 28.1162 66.5228 28.6459 66.5228 29.185C66.5228 29.7241 66.3822 30.2538 66.1149 30.722L51.1319 56.576C50.5869 57.518 49.5819 58 48.4929 58H18.5259C17.4379 58 16.4319 57.533 15.8879 56.59L0.904944 30.694C0.637522 30.2412 0.49646 29.7249 0.49646 29.199C0.49646 28.6731 0.637522 28.1568 0.904944 27.704L0.903944 27.705ZM13.3109 40.239C13.3109 40.623 13.5419 40.977 13.8739 41.169L32.9599 52.18C33.2919 52.372 33.7079 52.372 34.0399 52.18L53.1399 41.169C53.4719 40.977 53.7039 40.623 53.7039 40.239V18.216C53.7039 17.833 53.4749 17.478 53.1439 17.286L34.0569 6.277C33.8927 6.18278 33.7067 6.13321 33.5174 6.13321C33.3281 6.13321 33.1421 6.18278 32.9779 6.277L13.8759 17.287C13.5439 17.479 13.3099 17.834 13.3099 18.217V40.24L13.3109 40.239Z"
                  fill="#4B32C3"
                />
                <path
                  d="M46.603 21.3761L34.063 14.1361C33.9087 14.047 33.7337 14 33.5555 14C33.3773 14 33.2023 14.047 33.048 14.1361L20.508 21.3761C20.3538 21.4651 20.2256 21.593 20.1365 21.7471C20.0473 21.9012 20.0002 22.0761 20 22.2541V36.7341C20 37.0961 20.194 37.4311 20.508 37.6131L33.048 44.8531C33.362 45.0341 33.748 45.0341 34.063 44.8531L46.603 37.6131C46.917 37.4321 47.11 37.0971 47.11 36.7341V22.2541C47.11 21.8911 46.917 21.5571 46.603 21.3751V21.3761Z"
                  fill="#8080F2"
                />
              </svg>

              <div className="space-y-2">
                <h3 className="text-left font-bold text-slate-100">Eslint</h3>
                <p className="text-left text-sm font-medium text-slate-100">
                  Automatic code analyzation and problem fixing
                </p>
              </div>
            </div>
          </article>
          <article className="relative overflow-hidden rounded-lg border border-[#212121] bg-[#161616] shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6 text-slate-200">
              <Image
                src="/assets/prettier-icon-dark.png"
                width={48}
                height={48}
                alt="Prettier"
              />
              <div className="space-y-2">
                <h3 className="text-left font-bold text-slate-100">Prettier</h3>
                <p className="text-left text-sm font-medium text-slate-100">
                  Save time with opinonated code formatting
                </p>
              </div>
            </div>
          </article>
          <article className="relative overflow-hidden rounded-lg border border-[#212121] bg-[#161616] shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6 text-slate-200">
              <Image
                src="/assets/husky.png"
                width={48}
                height={48}
                alt="Husky"
              />
              <div className="space-y-2">
                <h3 className="text-left font-bold text-slate-100">Husky</h3>
                <p className="text-left text-sm font-medium text-slate-100">
                  Git hooks made easy 🐶 woof!
                </p>
              </div>
            </div>
          </article>
          <article className="relative overflow-hidden rounded-lg border border-[#212121] bg-[#161616] shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6 text-slate-200">
              <Image
                src="/assets/commitlint.svg"
                width={48}
                height={48}
                alt="Commitlint"
              />
              <div className="space-y-2">
                <h3 className="text-left font-bold text-slate-100">
                  Commitlint
                </h3>
                <p className="text-left text-sm font-medium text-slate-100">
                  Lint your commits and adhere to a commit convention
                </p>
              </div>
            </div>
          </article>
          <article className="relative overflow-hidden rounded-lg border border-[#212121] bg-[#161616] shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6 text-slate-200">
              <Image
                src="/assets/lint-staged.png"
                width={48}
                height={48}
                alt="Lint Staged"
              />
              <div className="space-y-2">
                <h3 className="text-left font-bold text-slate-100">
                  Lint Staged
                </h3>
                <p className="text-left text-sm font-medium text-slate-100">
                  Prevent 💩 from slipping into your code base
                </p>
              </div>
            </div>
          </article>
        </div>
        <p className="container mx-auto mt-7 grid max-w-4xl text-left font-medium text-[#a5a5a5]">
          ...and many more
        </p>
      </div>
    </section>
  )
}

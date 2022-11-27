import Image from "next/image"
import commitLintImage from "../public/assets/commitlint.svg"
import eslintImage from "../public/assets/eslint.svg"
import huskyImage from "../public/assets/husky.png"
import jestImage from "../public/assets/jest.png"
import lintStagedImage from "../public/assets/lintstaged.png"
import nextjsImage from "../public/assets/nextLogo.svg"
import prettierImage from "../public/assets/prettier.png"
import tailwindImage from "../public/assets/tailwind.svg"
import typescriptImage from "../public/assets/typescript.svg"

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
          <article className="relative overflow-hidden rounded-lg border border-gray-1002 bg-gray-1001 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6 text-slate-200">
              <Image src={nextjsImage} width={48} height={48} alt="Next.js" />
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

          <article className="relative overflow-hidden rounded-lg border border-gray-1002 bg-gray-1001 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6 text-slate-200">
              <Image
                src={typescriptImage}
                width={48}
                height={48}
                alt="TypeScript"
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
          <article className="relative overflow-hidden rounded-lg border border-gray-1002 bg-gray-1001 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6 text-slate-200">
              <Image src={tailwindImage} alt="TailwindCSS" />
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
          <article className="relative overflow-hidden rounded-lg border border-gray-1002 bg-gray-1001 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6 text-slate-200">
              <Image src={jestImage} width={48} height={48} alt="Jest" />

              <div className="space-y-2">
                <h3 className="text-left font-bold text-slate-100">Jest</h3>
                <p className="text-left text-sm font-medium text-slate-100">
                  The delightful JavaScript Testing Framework
                </p>
              </div>
            </div>
          </article>
          <article className="relative overflow-hidden rounded-lg border border-gray-1002 bg-gray-1001 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6 text-slate-200">
              <Image src={eslintImage} width={48} height={48} alt="Eslint" />

              <div className="space-y-2">
                <h3 className="text-left font-bold text-slate-100">Eslint</h3>
                <p className="text-left text-sm font-medium text-slate-100">
                  Automatic code analyzation and problem fixing
                </p>
              </div>
            </div>
          </article>
          <article className="relative overflow-hidden rounded-lg border border-gray-1002 bg-gray-1001 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6 text-slate-200">
              <Image
                src={prettierImage}
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
          <article className="relative overflow-hidden rounded-lg border border-gray-1002 bg-gray-1001 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6 text-slate-200">
              <Image src={huskyImage} width={48} height={48} alt="Husky" />
              <div className="space-y-2">
                <h3 className="text-left font-bold text-slate-100">Husky</h3>
                <p className="text-left text-sm font-medium text-slate-100">
                  Git hooks made easy 🐶 woof!
                </p>
              </div>
            </div>
          </article>
          <article className="relative overflow-hidden rounded-lg border border-gray-1002 bg-gray-1001 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6 text-slate-200">
              <Image
                src={commitLintImage}
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
          <article className="relative overflow-hidden rounded-lg border border-gray-1002 bg-gray-1001 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6 text-slate-200">
              <Image
                src={lintStagedImage}
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
        <p className="container mx-auto mt-7 grid max-w-4xl text-left font-medium text-gray-one">
          ...and many more
        </p>
      </div>
    </section>
  )
}

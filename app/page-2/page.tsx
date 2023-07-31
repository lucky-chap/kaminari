"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import manInWheelChair from "@/public/images/man-in-wheelchari.png";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-white`}
            >
              02
            </span>
            <p className="pb-6 font-medium">
              Kami (short for Kaminari) is a modern Next.js and Tailwind CSS
              boilerplate that includes all you need to build amazing projects.
              No need to spend time on configuring the basic needs of a project.
              I did that for you - Created by{" "}
              <a
                href="https://heylel.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="pb-1 text-zinc-800 dark:text-zinc-100 underline"
              >
                Virgil.
              </a>{" "}
              ⚠️ Under Development
            </p>

            <div className="mb-10 hidden">
              <a
                href="https://github.com/lucky-chap/kaminari"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block w-full text-base transition-all duration-100 ease-linear font-bold hover:bg-black/90 group rounded bg-black px-7 py-4 text-center text-white`}
              >
                <span className="">Repo</span>
              </a>
            </div>
            <div className="">
              <Button size="xl" className="w-full font-bold" variant="brand">
                Repo
              </Button>
            </div>
          </div>
        </Wrapper>
      </section>

      {/* second half */}

      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#e0f5ff] p-9">
        <Image src={manInWheelChair} alt="Man sitting in wheelchair" />
      </section>
    </section>
  );
}

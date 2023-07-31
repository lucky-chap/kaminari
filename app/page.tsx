"use client";

import React from "react";

// import Ellipses from "@/ui/components/EllipsesContainer"
import { Space_Mono as SpaceMono } from "next/font/google";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

const mono = SpaceMono({
  variable: "--font-mono",
  weight: ["400", "700"],
  preload: true,
  subsets: ["latin"],
});

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-white`}
            >
              01
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

      <section className="first-page hidden h-screen w-full flex-col justify-between bg-[#ffefd6] p-9 lg:flex">
        {/* <Ellipses /> */}
      </section>
    </section>
  );
}

"use client";

import Image from "next/image";
import manWIthRobot from "@/public/images/man-with-robot.png";

import { Button } from "@/components/ui/button";
import Wrapper from "@/components/wrapper";

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
              Copy-Pasting: The Real MVP: Don&apos;t let anyone fool you.
              Programmers would be lost without Ctrl+C and Ctrl+V. Entire
              careers have been built on the power of Stack Overflow and
              copy-pasting code snippets! (Don&apos;t pretend you are not one of
              them)
            </p>

            <div className="">
              <Button size="xl" className="w-full font-bold" variant="brand">
                <a
                  href="https://github.com/lucky-chap/kaminari"
                  target="_blank"
                  rel="noreferrer"
                  className="pb-1 text-zinc-100 dark:text-zinc-800"
                >
                  Repo
                </a>{" "}
              </Button>
            </div>
          </div>
        </Wrapper>
      </section>

      {/* second half */}

      <section className="hidden h-screen w-full flex-col items-center justify-center bg-[#e0f5ff] p-9 lg:flex">
        <Image src={manWIthRobot} alt="Man sitting in wheelchair" />
      </section>
    </section>
  );
}

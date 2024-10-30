"use client";

import Image from "next/image";
import boyAndGirl from "@/public/images/boy-and-girl.png";

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
              03
            </span>
            <p className="pb-6 font-medium">
              The Dark Mode Debate: Programmers swear by dark mode, claiming it
              saves battery, looks cooler, and prevents “getting hacked by eye
              strain.” The rest of the world is just confused. (All light mode
              users are sinners)
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

      <section className="hidden h-screen w-full flex-col items-center justify-center bg-[#ffefd6] p-9 lg:flex">
        <Image src={boyAndGirl} alt="Boy and girl playing with robot" />
      </section>
    </section>
  );
}

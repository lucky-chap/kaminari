"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import boyAndGirl from "@/public/images/boy-and-girl.png";

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
              The computer mouse was invented by Douglas Engelbart in 1964. He
              demonstrated the mouse along with other groundbreaking
              technologies in a famous presentation known as &apos;The Mother of
              All Demos&apos;
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

      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#ffefd6] p-9">
        <Image src={boyAndGirl} alt="Boy and girl playing with robot" />
      </section>
    </section>
  );
}

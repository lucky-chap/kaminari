"use client";

import React from "react";

import { useRouter } from "next/navigation";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <>
      <div className="flex w-full items-center justify-between">
        <h1
          className={`flex cursor-default items-center text-2xl font-bold dark:text-white`}
        >
          Kami.{" "}
          <span
            className={`text-sm font-bold group ml-2 inline-block rounded-3xl bg-[#fafafa] px-3 text-black`}
          >
            <span className="">v2.3</span>
          </span>
        </h1>

        <ThemeToggle />
      </div>
      {children}
      <div className="flex w-full items-center justify-between">
        <Button
          onClick={() => router.push("/")}
          className="text-sm font-bold rounded-3xl bg-[#e0dede] text-black dark:bg-zinc-800 dark:text-zinc-400 px-7 py-2 opacity-50 hover:bg-[#d1d0d0] dark:hover:bg-zinc-900"
        >
          <span className="">Back</span>
        </Button>
        <div className={`text-xs font-bold py-2  group-hover:bg-[#e1ffe1c5]`}>
          <p className="text-xs">
            <span className="inline-block dark:text-white">1</span>
            <span className="inline-block px-3 opacity-50">/</span>
            <span className="inline-block dark:text-white opacity-50">3</span>
          </p>
        </div>

        <Link href="/page-2" passHref>
          <Button
            className={`text-sm font-bold rounded-3xl bg-zinc-900 text-white dark:bg-white px-7 py-2 dark:text-black`}
          >
            <span className="">Next</span>
          </Button>
        </Link>
      </div>
    </>
  );
}

"use client";

import React from "react";

import { useRouter } from "next/navigation";
import ThemeToggle from "./theme-toggle";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <>
      <div className="flex w-full items-center justify-between">
        <button
          onClick={() => router.push("/")}
          className={`flex cursor-default items-center text-2xl font-bold`}
        >
          Kami.{" "}
          <span
            className={`text-sm font-bold group ml-2 inline-block rounded-3xl bg-[#ffefd6] px-3 text-black`}
          >
            <span className="">v2</span>
          </span>
        </button>

        <ThemeToggle />
      </div>
      {children}
      <div className="flex w-full items-center justify-between">
        <button
          type="button"
          onClick={() => router.push("/")}
          className={`text-sm font-bold cursor-default rounded-3xl bg-[#e1ffe133] px-7 py-2 opacity-50 group-hover:bg-[#e1ffe1c5]`}
        >
          <span className="">Back</span>
        </button>
        <div className={`text-xs font-bold py-2  group-hover:bg-[#e1ffe1c5]`}>
          <p className="text-xs">
            <span className="inline-block text-white">1</span>
            <span className="inline-block px-3 opacity-50">/</span>
            <span className="inline-block text-white opacity-50">3</span>
          </p>
        </div>

        <button
          type="button"
          onClick={() => router.push("/blog")}
          className={`text-sm font-bold cursor-default rounded-3xl bg-white px-7 py-2 text-black`}
        >
          <span className="">Next</span>
        </button>
      </div>
    </>
  );
}

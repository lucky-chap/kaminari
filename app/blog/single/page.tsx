"use client"

import Link from "next/link"

import { MdOutlineKeyboardBackspace } from "react-icons/md"

export default function Page() {
  return (
    <section className="mx-auto max-w-2xl px-2 pt-10">
      <Link
        href="/blog"
        className="group inline-flex rounded bg-gray-1001 p-2 transition-colors duration-100 ease-linear hover:bg-gray-1001/70"
      >
        <MdOutlineKeyboardBackspace className="text-gray-one transition-colors duration-100 ease-linear group-hover:text-gray-100" />
      </Link>
      <div className="pt-5">
        <h2 className="leading-tighter mx-auto mt-3 max-w-2xl text-3xl font-extrabold tracking-tighter md:text-5xl">
          How to use Contentlayer With Next.js 13 and Tailwind CSS
        </h2>
        <div className="mx-auto mt-8 grid max-w-4xl text-gray-one">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          veritatis atque in placeat quam necessitatibus eius porro nobis magnam
          ullam, incidunt corrupti veniam dolore modi, quis iure. Magni, quia
          quo provident dolores quod magnam? Provident perspiciatis
          necessitatibus temporibus amet, incidunt doloremque sapiente sunt
          nobis in deleniti mollitia unde soluta atque distinctio alias eligendi
          molestiae corporis. Aspernatur amet temporibus consequatur inventore
          illo nobis dolor, neque sint, ipsa facilis minima doloremque officia,
          nihil fuga quibusdam. In illum libero laboriosam repellat,
          consequuntur officiis explicabo vitae rerum voluptatum ex sunt at eos
          maxime nisi voluptatibus dolores ad vel reprehenderit ea inventore
          tempore impedit odio magnam ipsum? Nesciunt sit labore rem quia
          voluptates, esse corporis vitae eos ipsa pariatur aperiam ratione
          porro, dolorum laboriosam commodi. Vero beatae natus quaerat suscipit
          officia error inventore eligendi repudiandae adipisci cupiditate
          blanditiis tempora ipsam assumenda sapiente laudantium vitae quibusdam
          ab perferendis dolores facere, cum ea praesentium deserunt obcaecati.
          Cum laborum ad veniam perferendis facere delectus facilis error
          deleniti assumenda!
        </div>
      </div>
    </section>
  )
}

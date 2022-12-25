import Image from "next/image"
import userLogo from "../public/assets/user.jpg"

export function Footer() {
  return (
    <footer className="mx-auto mt-auto max-w-4xl text-gray-one">
      <div className="flex items-center justify-center">
        <p className="flex items-center text-xs">
          Created by
          <span className="inline-block px-1 font-bold text-white">Heylel</span>
          <span>
            <Image
              className="ml-1 h-6 w-6 rounded-full"
              src={userLogo}
              alt="creator"
            />{" "}
          </span>
        </p>
      </div>
    </footer>
  )
}

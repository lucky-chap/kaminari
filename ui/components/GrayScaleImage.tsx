import Image from "next/image"

type Props = {
  src: string
  alt: string
}

export default function GrayScaleImage({ src, alt }: Props) {
  return (
    <div className="">
      <Image
        src={src}
        alt={alt}
        height={30}
        width={100}
        className="grayscale hover:grayscale-0"
      />
    </div>
  )
}

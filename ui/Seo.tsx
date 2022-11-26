import siteConfig from "@/lib/siteConfig"

type IMetaProps = {
  title: string
  description?: string
}

export default function Seo({ title, description }: IMetaProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="title" content={siteConfig.title} />
      <meta
        name="description"
        content={description ?? siteConfig.description}
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteConfig.url} />
      <meta property="og:title" content={siteConfig.title} />
      <meta
        property="og:description"
        content={description ?? siteConfig.description}
      />
      <meta property="og:image" content={`${siteConfig.url}/site-banner.png`} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteConfig.url} />
      <meta property="twitter:title" content={siteConfig.title} />
      <meta
        property="twitter:description"
        content={description ?? siteConfig.description}
      />
      <meta
        property="twitter:image"
        content={`${siteConfig.url}/site-banner.png`}
      />

      <link rel="icon" href="/favicon.ico" />
    </>
  )
}

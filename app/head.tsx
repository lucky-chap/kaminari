import siteConfig from "@/lib/siteConfig"
import Seo from "@/ui/Seo"

export default function Head() {
  return <Seo title={siteConfig.title} description={siteConfig.description} />
}

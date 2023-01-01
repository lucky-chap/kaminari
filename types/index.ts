import type { Icon } from "lucide-react"

export type NavItem = {
  title: string
  href: string
  isExternal?: boolean
  disabled?: boolean
  icon?: Icon
}

export type CardProps = {
  src?: any | string
  alt: string
  githubUrl?: string
  liveUrl?: string
  title: string
  description?: string
}

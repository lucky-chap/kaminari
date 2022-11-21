import type { Icon } from "lucide-react"

export type NavItem = {
  title: string
  href: string
  isExternal?: boolean
  disabled?: boolean
  icon?: Icon
}

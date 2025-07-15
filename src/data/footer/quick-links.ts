export interface QuickLinkType {
  name: string;
  href: string;
}

export const quickLinks: QuickLinkType[] = [
  { name: "About", href: "/home" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

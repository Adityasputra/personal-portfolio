// next-seo.config.ts
import { NextSeoProps } from "next-seo";

const SEO: NextSeoProps = {
  title: "Aditya Saputra | Developer Portfolio",
  description:
    "Official portfolio of Aditya Saputra, a full stack javascript developer.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://2b61-114-5-223-237.ngrok-free.app",
    title: "Aditya Saputra | Developer Portfolio",
    description: "Explore recent experiences, projects and posts.",
    images: [
      {
        url: "https://2b61-114-5-223-237.ngrok-free.app/images/display.jpeg",
        width: 1200,
        height: 630,
        alt: "Aditya Saputra Portfolio",
      },
    ],
    site_name: "Aditya Saputra",
  },
  twitter: {
    handle: "@adityasputra",
    site: "@adityasputra",
    cardType: "summary_large_image",
  },
};

export default SEO;

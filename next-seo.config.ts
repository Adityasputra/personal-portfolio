import { NextSeoProps } from "next-seo";

const siteName = "Aditya Saputra";
const baseUrl = "https://www.adityasputra.my.id";
const description =
  "Official portfolio of Aditya Saputra, a full-stack developer.";

const SEO: NextSeoProps = {
  title: `${siteName} | Full-Stack Developer`,
  titleTemplate: "%s | Developer Portfolio",
  description,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: baseUrl,
    title: `${siteName} | Full-Stack Developer`,
    description,
    images: [
      {
        url: `${baseUrl}/images/display.webp`,
        width: 1200,
        height: 630,
        alt: `${siteName} Portfolio`,
      },
    ],
    site_name: siteName,
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content: "portfolio, developer, full-stack, javascript, aditya saputra",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ],
  defaultTitle: siteName,
};

export default SEO;

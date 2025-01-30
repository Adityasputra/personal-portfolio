import { NextSeoProps } from "next-seo";

const SEO: NextSeoProps = {
  title: "Aditya Saputra | Developer Portfolio",
  titleTemplate: "%s | Aditya Saputra",
  description:
    "Official portfolio of Aditya Saputra, a full stack javascript developer.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.adityasputra.my.id/",
    title: "Aditya Saputra | Developer Portfolio",
    description: "Explore recent experiences, projects and posts.",
    images: [
      {
        url: "https://www.adityasputra.my.id/images/display.jpeg",
        width: 1200,
        height: 630,
        alt: "Aditya Saputra Portfolio",
      },
    ],
    site_name: "Aditya Saputra",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content: "portfolio, developer, full stack, javascript, Aditya Saputra",
    },
  ],
  defaultTitle: "Aditya Saputra",
};

export default SEO;

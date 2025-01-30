"use client";

import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

// console.log("SEOProvider is running on the client.");

export default function SEOProvider() {
  return <DefaultSeo {...SEO} />;
}

// import { DefaultSeo } from "next-seo";
// import SEO from "../../next-seo.config";

// export default function SEOProvider() {
//   return <DefaultSeo {...SEO} />;
// }

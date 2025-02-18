"use client";

import { useEffect, useState } from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

export default function ClientSeo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("ClientSeo loaded!"); // Debugging
  }, []);

  if (!mounted) return null;

  return <DefaultSeo {...SEO} />;
}

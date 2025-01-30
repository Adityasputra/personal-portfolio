"use client";

import SEOProvider from "./SEOProvider";

export default function SEOWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SEOProvider />
      {children}
    </>
  );
}

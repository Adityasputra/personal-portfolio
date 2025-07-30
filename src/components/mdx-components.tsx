import { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => <h1 className="text-3xl font-bold mt-4 mb-2" {...props} />,
  h2: (props) => <h2 className="text-2xl font-semibold mt-4 mb-2" {...props} />,
  p: (props) => <p className="my-2 leading-7" {...props} />,
  ul: (props) => <ul className="list-disc list-inside my-2" {...props} />,
  li: (props) => <li className="ml-4" {...props} />,
};

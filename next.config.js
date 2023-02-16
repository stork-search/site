const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [
        require("remark-prism"),
        {
          plugins: [
            "autolinker",
            // "command-line",
            "data-uri-highlight",
            "diff-highlight",
            "inline-color",
            "keep-markup",
            "line-numbers",
            // "show-invisibles",
            // "treeview",
          ],
        },
      ],
    ],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,

  compiler: {
    styledComponents: true,
  },
};

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig);

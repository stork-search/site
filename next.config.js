const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  async redirects() {
    return [
      {
        source: '/sticker',
        destination: 'https://buy.stripe.com/5kAdTm2MF8ejcIU4gg',
        permanent: false,
      },
    ]
  },
})

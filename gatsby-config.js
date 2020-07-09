const { buildClientSchema } = require(`graphql`)
const { createHttpLink } = require(`apollo-link-http`)
const fetch = require(`node-fetch`)

require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Stork Search`,
    description: `Impossibly fast web search, made for static sites.`,
    author: `@jameslittle230`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#bed2b6`,
        theme_color: `#bed2b6`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-mdx`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GitHub`,
        fieldName: `github`,
        url: `https://api.github.com/graphql`,
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '5',
        matomoUrl: 'https://analytics.jameslittle.me',
        siteUrl: 'https://stork-search.net',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

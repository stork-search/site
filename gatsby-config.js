const { buildClientSchema } = require(`graphql`)
const { createHttpLink } = require(`apollo-link-http`)
const fetch = require(`node-fetch`)

require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-mdx`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-graphql`,
      options: {
        fieldName: `github`,
        typeName: `GitHub`,
        createLink: () =>
          createHttpLink({
            uri: `https://api.github.com/graphql`,
            headers: {
              Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
            },
            fetch,
          }),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

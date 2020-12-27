/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Header from './header'
import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔎</text></svg>"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Inconsolata:400,700&display=swap"
        />
        <meta name="twitter:card" content="summary" />
        <meta property="og:url" content="https://stork-search.net" />
        <meta
          property="og:title"
          content="Stork Search: Impossibly Fast Web Search for Static Sites"
        />
        <meta
          property="og:image"
          content="https://files.jameslittle.me/images/stork-screenshot.png"
        />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

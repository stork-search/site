/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Layout from "./layout"
import {Wrapper, Column} from "./utils"

const PageLayout = ({ children }) => {
  return (
    <Layout>
      <Wrapper>
        <Column>
          <div>{children}</div>
        </Column>
      </Wrapper>
    </Layout>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout

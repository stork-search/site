import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { accentColor, Wrapper, Column, Title } from './utils'

const HeaderLink = styled(Link)`
  line-height: 1;
  margin-left: 1em;
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 35rem) {
    flex-direction: column;
  }
`

const NameplateLink = styled(Link)`
  text-decoration: none;
  color: currentColor !important;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    display: none;
  }
`

const Header = ({ siteTitle }) => (
  <Wrapper background={accentColor} rhythm="small">
    <Column>
      <Flex>
        <Title fontSize="1.2rem">
          <NameplateLink to="/" activeClassName="active">
            Stork Search
          </NameplateLink>
        </Title>
        <div>
          <HeaderLink to="/docs">Documentation</HeaderLink>
          {/* <HeaderLink to="/themes">Themes</HeaderLink> */}
          {/* <HeaderLink to="/integrations">Integrations</a> */}
          <HeaderLink to="/changelog">Changelog</HeaderLink>
          <HeaderLink to="/roadmap">Roadmap</HeaderLink>
        </div>
      </Flex>
    </Column>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

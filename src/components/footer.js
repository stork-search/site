import React from 'react'
import { Column, brandColor, FullWidth } from './utils'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <FullWidth background={brandColor} style={{ margin: 0 }}>
      <Column>
        <p>
          &copy; 2019–{year}. Stork is maintained by{' '}
          <a href="https://jameslittle.me">James Little</a>, who's really
          excited that you're checking it out.
        </p>
        <p>
          This site is open source. Please{' '}
          <a href="https://github.com/stork-search/site">
            file a bug or open a PR
          </a>{' '}
          if you see something confusing or incorrect.
        </p>
        <p>
          Logo art by{' '}
          <a href="https://www.instagram.com/bruno_monts/">Bruno Monts</a>, with
          special thanks to the{' '}
          <a href="https://fission.codes">fission.codes</a> team. Please contact
          James Little before using the logo for anything.
        </p>
      </Column>
    </FullWidth>
  )
}

export default Footer

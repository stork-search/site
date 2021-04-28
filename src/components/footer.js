import React from 'react'
import { Column, brandColor, FullWidth } from './utils'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <FullWidth background={brandColor} style={{ margin: 0 }}>
      <Column>
        <p>&copy; 2019–{year}</p>
        <p>
          Stork is built and shepherded by{' '}
          <a href="https://jameslittle.me">James Little</a>, who's really
          excited that you're checking it out. If you have any questions or
          comments, feel free to{' '}
          <a href="https://twitter.com/jameslittle230">tweet at him</a> or{' '}
          <a href="https://github.com/jameslittle230/stork">
            open an issue on Github.
          </a>
        </p>
        <p>
          Please{' '}
          <a href="https://github.com/stork-search/site">
            file a bug or edit this site
          </a>{' '}
          if you see something confusing or incorrect. PRs are always welcome!
        </p>
        <p>
          Logo by{' '}
          <a href="https://www.instagram.com/bruno_monts/">Bruno Monts</a>.
          Thanks, Bruno!
        </p>
      </Column>
    </FullWidth>
  )
}

export default Footer

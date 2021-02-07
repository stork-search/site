import Link from 'next/link'
import { StylisticText } from '../text'
import { FullWidth, grayBackground } from '../utils'

const DocsLink = () => {
  return (
    <FullWidth
      background={grayBackground}
      padding={'2.5em'}
      style={{ marginBottom: "-5rem"}}
    >
      <StylisticText style={{ fontWeight: 'bold', fontSize: '2.2rem' }}>
        Next: <Link href="/docs/install">Read the Docs →</Link>
      </StylisticText>
    </FullWidth>
  )
}

export default DocsLink

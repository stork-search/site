import Link from 'next/link'
import { PageTitle } from '../components/text'
import { Column } from '../components/utils'

const Custom404 = () => (
  <Column>
    <PageTitle>404: Page not found</PageTitle>
    <p>
      You'd think we'd be able to find that page, since this is a search
      project... but oh well.
    </p>
    <p>
      <Link href="/">Go home →</Link>
    </p>
  </Column>
)

export default Custom404

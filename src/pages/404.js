import React from 'react'
import { Link } from 'gatsby'

import PageLayout from '../components/pagelayout'
import { PageTitle } from '../components/utils'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <PageLayout>
    <SEO title="404: Not found" />
    <PageTitle>404: Page not found.</PageTitle>
    <p>
      You think we'd be able to find that page, given this is a search project,
      but... oh well.
    </p>
    <p>
      <Link to="/">&larr; Go home</Link>
    </p>
  </PageLayout>
)

export default NotFoundPage

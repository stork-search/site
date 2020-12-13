// Gatsby supports TypeScript natively!
import React from 'react'
import { PageProps, Link } from 'gatsby'

import PageLayout from '../components/pagelayout'
import { Column, PageTitle } from '../components/utils'
import SEO from '../components/seo'

const SecondPage = (props: PageProps) => (
  <PageLayout>
    <SEO title="Roadmap" />
    <PageTitle>Roadmap</PageTitle>
    <p>
      As with any software project, Stork is not done: there are more features
      that will get built. In the interest of transparency, I want to describe
      the project's principles, goals, and next steps so that Stork's users are
      not solely reliant on the features available today, but can forsee the
      Stork of the future.
    </p>

    <p>
      Stork is a single-person project that I build in my spare time.
      Development will likely be slow, but I'm always receiptive to
      communication via Github, Email, or Twitter.
    </p>

    <h2>Overarching goals:</h2>

    <ul>
      <li>Reduce index size and keep WebAssembly bundle size low</li>
      <li>Keep search fast (responsive on a per-keystroke basis)</li>
      <li>
        Going from installation to useable search interface should be as fast as
        possible
      </li>
      <li>
        Expose many configuration knobs to tweak, but maintain sensible and
        opinionated defaults (so people don't have to tweak those knobs)
      </li>
      <li>
        Index different types of content (prose, subtitles, even code) and
        different languages, not just long-form English texts.
      </li>
      <li>Maintain compatibility with old config files and indexes</li>
    </ul>

    <h1>1.1.0</h1>

    <ul>
      <li>Support fuzzy search</li>
      <li>Write more themes</li>
      <li>
        Write and publish some integrations with other projects, e.g. various
        static site generators, Wordpress, etc.
      </li>
      <li>Get a logo! (illustrator recommendations appreciated!)</li>
    </ul>
    
    <h2>Completed features that were previously on the roadmap</h2>

    <ul>
      <li>Keyboard shortcuts on JS</li>
      <li>Support the SRT file format</li>
      <li>Callbacks in JS for different user events</li>
      <li>
        Sorting the results by relevance <em>Added in 0.5.3</em>
      </li>
      <li>
        Sensible handling of multi-word queries <em>Added in 0.5.3</em>
      </li>
      <li>Parse frontmatter</li>
      <li>Build different themes</li>
      <li>Write JS code in Typescript</li>
    </ul>

    <p>
      More specific bugs and features are listed on the project's{' '}
      <a href="https://github.com/jameslittle230/stork/issues">
        Github Issues page
      </a>
      . Feel free to submit a feature request there.
    </p>
  </PageLayout>
)

export default SecondPage

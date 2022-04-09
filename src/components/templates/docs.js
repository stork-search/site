import styled from 'styled-components'
import Footer from '../footer'
import Header from '../header'
import DocsNavigation from '../docs/navigation'
import { brandColor, StorkButton, Column } from '../utils'
import { useState } from 'react'
import { useRouter } from 'next/router'

const DocsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 20rem 50rem 1fr;
  grid-gap: 1rem;
  margin: 0 auto;

  --column-width: 42rem;
  --column-margin: 0;

  @media (max-width: 73em) {
    display: block;
    width: 90%;
    margin: 0 auto;
  }
`

const CsatWrapper = styled.div`
  background: ${brandColor};
  font-size: 0.9rem;
  margin-top: 4rem;
  padding: 1rem;

  button {
    font-size: 0.8em;
  }

  textarea {
    border: none;
    background: hsla(0, 0%, 100%, 0.8);
    display: block;
    margin: 0.1rem 0 0.3rem;
    width: 50%;
    height: 6em;
    font-size: 0.85em;
    border-radius: 4px;
  }

  p {
    margin: 0.3rem 0;
  }
`

const Wide = ({ children }) => {
  return <Column width="100%">{children}</Column>
}

const Csat = () => {
  const [wasHelpful, setWasHelpful] = useState(0)
  const [feedbackText, setFeedbackText] = useState('')
  const [lastSubmittedFeedbackText, setLastSubmittedFeedbackText] = useState('')
  const [userMessage, setUserMessage] = useState('')

  const router = useRouter()

  const emoji = (wasHelpful) => {
    switch (wasHelpful) {
      case 1:
        return '👍'
      case 2:
        return '👎'
      default:
        return '?'
    }
  }

  const currentPage = () => {
    return router.pathname
  }

  const handleSubmitHelpfulness = (newState) => {
    setWasHelpful(newState)

    fetch('https://api.jameslittle.me/slack', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        text: `Stork feedback - ${emoji(newState)} - ${currentPage()}`,
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `Stork feedback (${emoji(newState)})`,
            },
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `Looking at page: \`${currentPage()}\``,
            },
          },
        ],
      }),
    })
  }

  const handleSubmitFeedback = (event) => {
    if (feedbackText.length === 0) {
      setUserMessage("You can't submit feedback unless you write something.")
      return
    }

    if (feedbackText.length > 1600) {
      setUserMessage("That's a little long. Mind trimming it down?")
      return
    }

    if (feedbackText === lastSubmittedFeedbackText) {
      setUserMessage("Please don't just spam the submit button.")
      return
    }

    setUserMessage('Sending...')
    fetch('https://api.jameslittle.me/slack', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        text: `Stork feedback - ${emoji(
          wasHelpful
        )} - ${currentPage()} - ${feedbackText}`,
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `Stork feedback (${emoji(wasHelpful)})`,
            },
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `> ${feedbackText}`,
            },
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `Looking at page: \`${currentPage()}\``,
            },
          },
        ],
      }),
    }).then((res) => {
      setLastSubmittedFeedbackText(feedbackText)
      setUserMessage('Feedback sent! Thanks.')
    })
  }

  return (
    <Wide>
      <CsatWrapper>
        <p>
          Was this page helpful?{' '}
          <StorkButton onClick={() => handleSubmitHelpfulness(1)}>
            Yes!
          </StorkButton>{' '}
          <StorkButton onClick={() => handleSubmitHelpfulness(2)}>
            No
          </StorkButton>
        </p>
        {wasHelpful === 1 ? (
          <p>Glad this page was helpful! Could you tell me what you liked?</p>
        ) : null}
        {wasHelpful === 2 ? (
          <p>Sorry to hear. Could you tell me what could be better?</p>
        ) : null}

        {wasHelpful > 0 ? (
          <>
            <textarea
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
            ></textarea>
            <button onClick={handleSubmitFeedback}>Submit →</button>{' '}
          </>
        ) : null}
        {userMessage ? <p>{userMessage}</p> : null}
        <p>
          If you see an issue, please{' '}
          <a href="https://github.com/jameslittle230/stork-site/issues/new">
            file a bug!
          </a>
        </p>
      </CsatWrapper>
    </Wide>
  )
}

export default (props) => {
  return (
    <>
      <Header />
      <DocsWrapper>
        <div className="just-filler-to-fill-the-first-grid-column" />
        <DocsNavigation />
        <div style={{ padding: '1.5rem 0 5rem 0', flexGrow: 0 }}>
          <main>{props.children}</main>
          <Csat />
        </div>
      </DocsWrapper>
      <Footer />
    </>
  )
}

export { Wide }

import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";

const CsatWrapper = styled.div`
  background: var(--brand-color);
  font-size: 0.9rem;
  margin: 2rem 0 4rem;
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
    font-family: inherit;
  }

  p {
    margin: 0.3rem 0;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

enum HelpfulState {
  Unsubmitted,
  Yes,
  No,
}

const emoji = (h: HelpfulState) => {
  switch (h) {
    case HelpfulState.Yes:
      return "👍";
    case HelpfulState.No:
      return "👎";
    default:
      return "?";
  }
};

// const url = "https://api.jameslittle.me/slack";
const url = "http://localhost:3000";

const submitHelpfulness = (helpful: HelpfulState, currentPage: string) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      text: `Stork feedback - ${emoji(helpful)} - ${currentPage}`,
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `Stork feedback (${emoji(helpful)})`,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `Looking at page: \`${currentPage}\``,
          },
        },
      ],
    }),
  }).catch(() => alert("Error sending feedback. Please try again later."));
};

const submitFeedback = (
  feedbackText: string,
  helpful: HelpfulState,
  currentPage: string
) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      text: `Stork feedback - ${emoji(
        helpful
      )} - ${currentPage} - ${feedbackText}`,
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `Stork feedback (${emoji(helpful)})`,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `> ${feedbackText}`,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `Looking at page: \`${currentPage}\``,
          },
        },
      ],
    }),
  }).catch((e) => alert("Error sending feedback. Please try again later."));
};

export const Csat = () => {
  const [wasHelpful, setWasHelpful] = useState(HelpfulState.Unsubmitted);
  const [feedbackText, setFeedbackText] = useState("");
  const [lastSubmittedFeedbackText, setLastSubmittedFeedbackText] =
    useState("");
  const [userMessage, setUserMessage] = useState("");

  const router = useRouter();

  const currentPage = router.pathname;

  const handleSubmitHelpfulness = (h: HelpfulState) =>
    submitHelpfulness(h, currentPage).then(() => {
      setWasHelpful(h);
    });

  const handleSubmitFeedback = () => {
    if (feedbackText.length === 0) {
      setUserMessage("Please write something, don't just leave it blank.");
      return;
    }

    if (feedbackText.length > 1600) {
      setUserMessage("That's a little long. Mind trimming it down?");
      return;
    }

    if (feedbackText === lastSubmittedFeedbackText) {
      setUserMessage("Please don't just spam the submit button.");
      return;
    }

    setUserMessage("Sending...");

    submitFeedback(feedbackText, wasHelpful, currentPage).then((res) => {
      setLastSubmittedFeedbackText(feedbackText);
      setUserMessage("Feedback sent! Thanks.");
    });
  };

  return (
    <CsatWrapper>
      <Flex>
        Was this page helpful?
        <Button onClick={() => handleSubmitHelpfulness(HelpfulState.Yes)}>
          Yes!
        </Button>
        <Button onClick={() => handleSubmitHelpfulness(HelpfulState.No)}>
          No
        </Button>
      </Flex>
      {wasHelpful === HelpfulState.Yes ? (
        <p>Glad this page was helpful! Could you tell me what you liked?</p>
      ) : null}
      {wasHelpful === HelpfulState.No ? (
        <p>Sorry to hear. Could you tell me what could be better?</p>
      ) : null}

      {wasHelpful !== HelpfulState.Unsubmitted ? (
        <>
          <textarea
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
          ></textarea>
          <Button onClick={handleSubmitFeedback}>Submit →</Button>{" "}
        </>
      ) : null}
      {userMessage ? <p>{userMessage}</p> : null}
    </CsatWrapper>
  );
};

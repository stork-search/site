import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";

const CsatWrapper = styled.div`
  background-color: var(--color-brand);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  margin: 6rem 0 0;
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

const XStack = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

const YStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  p {
    margin: 0;
  }
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

  useEffect(() => {
    const resetCsat = () => {
      setWasHelpful(HelpfulState.Unsubmitted);
      setFeedbackText("");
      setLastSubmittedFeedbackText("");
      setUserMessage("");
    };

    router.events.on("routeChangeComplete", resetCsat);

    return () => {
      router.events.off("routeChangeComplete", resetCsat);
    };
  }, [router]);

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
      <YStack>
        <XStack>
          Was this page helpful?
          <Button onClick={() => handleSubmitHelpfulness(HelpfulState.Yes)}>
            Yes!
          </Button>
          <Button onClick={() => handleSubmitHelpfulness(HelpfulState.No)}>
            No
          </Button>
        </XStack>
        {wasHelpful === HelpfulState.Yes ? (
          <p>Glad to hear! Could you tell me what you liked?</p>
        ) : null}
        {wasHelpful === HelpfulState.No ? (
          <p>Sorry to hear. Could you tell me what could be better?</p>
        ) : null}

        {wasHelpful !== HelpfulState.Unsubmitted ? (
          <>
            <textarea
              value={feedbackText}
              style={{ width: "100%" }}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder={
                wasHelpful === HelpfulState.Yes
                  ? "The way you described this..."
                  : "I didn't understand why I had to..."
              }
            ></textarea>
            <Button style={{ width: "100%" }} onClick={handleSubmitFeedback}>
              Submit →
            </Button>{" "}
          </>
        ) : null}
        {userMessage ? <p>{userMessage}</p> : null}
      </YStack>
    </CsatWrapper>
  );
};

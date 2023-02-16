import { Inconsolata } from "@next/font/google";
import Link from "next/link";
import { createContext, useContext } from "react";
import styled from "styled-components";
import {
  Preferences,
  usePreferences,
  usePreferencesDispatch,
} from "./PreferencesProvider";

import * as Tooltip from "@radix-ui/react-tooltip";

const inconsolata = Inconsolata({ subsets: ["latin"] });

const Preferences = styled.div`
  font-family: ${inconsolata.style.fontFamily};
`;

const PreferenceSectionTitle = styled.h3``;

const PreferenceTitle = styled.h4`
  margin-top: 2em;
  margin-bottom: 0.75em;
`;

const CurrentPreference = createContext<keyof Preferences | null>(null);

const PreferencePicker = ({
  name,
  title,
  children,
}: {
  name: keyof Preferences;
  title: string;
  children: any;
}) => {
  return (
    <CurrentPreference.Provider value={name}>
      <div>
        <PreferenceTitle>{title}</PreferenceTitle>
        {children}
      </div>
    </CurrentPreference.Provider>
  );
};

const PreferenceOption = ({
  value,
  children,
}: {
  value: string;
  children: any;
}) => {
  const preferences = usePreferences();
  const preferencesDispatch = usePreferencesDispatch();
  const currentPreference = useContext(CurrentPreference);

  if (!currentPreference || !preferences) return null;
  return (
    <div>
      <input
        type="radio"
        id={value}
        name={currentPreference}
        value={value}
        checked={preferences[currentPreference] === value}
        onChange={() => {
          preferencesDispatch({
            type: "set",
            name: currentPreference,
            value: value,
          });
        }}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};

export const DocsPreferences = () => (
  <Preferences>
    <PreferenceSectionTitle>Documentation Preferences</PreferenceSectionTitle>
    <p>
      These options let you customize the documentation based on how you want to
      use Stork.
    </p>
    {/* <PreferencePicker name="installation-method" title="Installation Method">
      <PreferenceOption value="cmdline">Command Line</PreferenceOption>
      <PreferenceOption value="nodejs">NodeJS Library</PreferenceOption>
    </PreferencePicker> */}

    <PreferencePicker name="config-format" title="Configuration File Format">
      <PreferenceOption value="toml">TOML</PreferenceOption>
      <PreferenceOption value="json">JSON</PreferenceOption>
    </PreferencePicker>

    <PreferencePicker name="document-source" title="Document Source">
      <PreferenceOption value="web">From the internet</PreferenceOption>
      <PreferenceOption value="filesystem">
        From the filesystem
      </PreferenceOption>
      <PreferenceOption value="inline">Inline in the config</PreferenceOption>
    </PreferencePicker>
  </Preferences>
);

const WhenWrapper = styled.div`
  border: ${({ borderless }: { borderless: boolean }) =>
    !borderless ? "1px dashed #ccc" : "none"};

  padding: ${(props) => (!props.borderless ? "1em 1em" : "0")};
  margin: ${(props) => (!props.borderless ? "1.5em -1em" : "0")};
  border-radius: 0.5rem;
`;

export const When = ({
  name,
  value,
  prefset,
  children,
  borderless = false,
}: {
  name?: keyof Preferences;
  value?: string;
  prefset?: Record<keyof Preferences, string>;
  children: any;
  borderless?: boolean;
}) => {
  const preferences = usePreferences();

  if (name && value) {
    if (!(name in preferences)) {
      throw new Error("Unknown preference: " + name);
    }

    if (preferences[name] !== value) {
      return null;
    }

    const tooltip = (
      <Tooltip.Provider>
        <Tooltip.Root delayDuration={0}>
          <Tooltip.Trigger asChild>
            <span
              style={{
                position: "absolute",
                top: "-1em",
                right: "1em",
                background: "#bbb",
                color: "#333",
                width: "1.5em",
                height: "1.5em",
                textAlign: "center",
                borderRadius: "50%",
                fontSize: "0.8em",
              }}
            >
              ?
            </span>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content>
              <div
                style={{
                  padding: "0.5em",
                  borderRadius: "4px",
                  background: "#EEE",
                  border: "1px solid #000",
                  fontSize: "0.8em",
                }}
              >
                This is visible because you selected &quot;{value}&quot; for{" "}
                {name}.
              </div>
              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    );

    return (
      <WhenWrapper borderless={borderless}>
        {!borderless && tooltip}
        {children}
      </WhenWrapper>
    );
  } else if (prefset) {
    for (const [name, value] of Object.entries(prefset)) {
      if (!(name in preferences)) {
        throw new Error("Unknown preference: " + name);
      }

      // @ts-ignore
      if (preferences[name] !== value) {
        return null;
      }
    }

    return <WhenWrapper borderless>{children}</WhenWrapper>;
  } else {
    throw new Error(
      "Invalid usage of <When /> - need either a name/value pair or a prefset."
    );
  }
};

export const SetPreferenceOnClick = ({
  name,
  value,
  children,
}: {
  name: keyof Preferences;
  value: string;
  children: any;
}) => {
  const preferencesDispatch = usePreferencesDispatch();
  return (
    <span
      onClick={() => {
        preferencesDispatch({
          type: "set",
          name,
          value,
        });
      }}
    >
      <Link href={{}}>{children}</Link>
    </span>
  );
};

import { Inconsolata } from "@next/font/google";
import Link from "next/link";
import { createContext, useContext } from "react";
import styled from "styled-components";
import { Preferences, usePreferences } from "./PreferencesProvider";

import * as Tooltip from "@radix-ui/react-tooltip";

const inconsolata = Inconsolata({ subsets: ["latin"] });

const Preferences = styled.div`
  font-family: ${inconsolata.style.fontFamily};
  position: sticky;
  top: 1em;
`;

const PreferenceSectionTitle = styled.h3``;

const PreferenceTitle = styled.h4`
  margin-top: 0;
  margin-bottom: 0.75em;
`;

const PreferencePickerWrapper = styled.div`
  padding: 1em;
  margin: 0 -1em;
  border-radius: var(--border-radius);

  &.selected {
    background: var(--color-brand);
  }
`;

const PreferencePickerContext = createContext<keyof Preferences | null>(null);

const PreferencePicker = ({
  name,
  title,
  children,
}: {
  name: keyof Preferences;
  title: string;
  children: any;
}) => {
  const { currentlyHoveredPreference, setCurrentlyHoveredPreference } =
    usePreferences();

  return (
    <PreferencePickerContext.Provider value={name}>
      <PreferencePickerWrapper
        onMouseOver={() => {
          setCurrentlyHoveredPreference(name);
        }}
        onMouseOut={() => {
          setCurrentlyHoveredPreference(null);
        }}
        className={currentlyHoveredPreference === name ? "selected" : undefined}
      >
        <PreferenceTitle>{title}</PreferenceTitle>
        {children}
      </PreferencePickerWrapper>
    </PreferencePickerContext.Provider>
  );
};

const PreferenceOption = ({
  value,
  children,
}: {
  value: string;
  children: any;
}) => {
  const { preferences, setPreference } = usePreferences();
  const currentPreference = useContext(PreferencePickerContext);

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
          setPreference({
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

    <PreferencePicker name="installation-method" title="Installation Method">
      <PreferenceOption value="cmdline">Command Line</PreferenceOption>
      <PreferenceOption value="nodejs">NodeJS Library</PreferenceOption>
    </PreferencePicker>

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
  outline: 1px dashed #ccc;
  margin: 0 -1rem;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);

  &.selected {
    outline: 2px solid var(--color-brand);
    box-shadow: 0 0 12px var(--color-brand);
  }
`;

export const When = ({
  name,
  value,
  prefset,
  children,
}: {
  name?: keyof Preferences;
  value?: string;
  prefset?: Record<keyof Preferences, string>;
  children: any;
}) => {
  const { preferences, currentlyHoveredPreference } = usePreferences();

  if (name && value) {
    if (!(name in preferences)) {
      throw new Error("Unknown preference: " + name);
    }

    if (preferences[name] !== value) {
      return null;
    }

    return (
      <WhenWrapper
        className={currentlyHoveredPreference === name ? "selected" : undefined}
      >
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

    return (
      <WhenWrapper
        className={
          Object.keys(prefset).includes(currentlyHoveredPreference || "")
            ? "selected"
            : undefined
        }
      >
        {children}
      </WhenWrapper>
    );
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
  const { setPreference } = usePreferences();
  return (
    <span
      onClick={() => {
        setPreference({
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

import {
  createContext,
  ReducerAction,
  useContext,
  useReducer,
  useState,
} from "react";

export type Preferences = {
  "installation-method": "cmdline" | "nodejs";
  "config-format": "toml" | "json";
  "document-source": "inline" | "web" | "filesystem";
};

const initialPreferences: Preferences = {
  "installation-method": "cmdline",
  "config-format": "toml",
  "document-source": "inline",
};

type PreferenceDispatchAction = {
  type: "set";
  name: keyof Preferences;
  value: string;
};

const preferencesReducer = (
  preferences: any,
  action: PreferenceDispatchAction
) => {
  preferences[action.name] = action.value;
  const output = { ...preferences };
  localStorage.setItem("preferences", JSON.stringify(output));
  return output;
};

export const PreferencesContext = createContext<{
  preferences: Preferences;
  setPreference: (action: PreferenceDispatchAction) => void;
  currentlyHoveredPreference: keyof Preferences | null;
  setCurrentlyHoveredPreference: Function;
}>({
  preferences: initialPreferences,
  setPreference: () => {},
  currentlyHoveredPreference: null,
  setCurrentlyHoveredPreference: () => {},
});

export const PreferencesProvider = ({ children }: { children: any }) => {
  const [preferences, dispatch] = useReducer(
    preferencesReducer,
    initialPreferences
  );

  const [currentlyHoveredPreference, setCurrentlyHoveredPreference] = useState<
    keyof Preferences | null
  >(null);

  return (
    <PreferencesContext.Provider
      value={{
        preferences,
        setPreference: dispatch,
        currentlyHoveredPreference,
        setCurrentlyHoveredPreference,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};

export function usePreferences() {
  return useContext(PreferencesContext);
}

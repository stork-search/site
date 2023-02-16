import { createContext, ReducerAction, useContext, useReducer } from "react";

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

const preferencesReducer = (
  preferences: any,
  action: {
    type: "set";
    name: keyof Preferences;
    value: string;
  }
) => {
  preferences[action.name] = action.value;
  const output = { ...preferences };
  localStorage.setItem("preferences", JSON.stringify(output));
  return output;
};

// @ts-ignore
export const PreferencesContext = createContext<Preferences>(null);

export const PreferencesDispatchContext =
  // @ts-ignore
  createContext<ReducerAction<any, any>>(preferencesReducer);

export const PreferencesProvider = ({ children }: { children: any }) => {
  const [preferences, dispatch] = useReducer(
    preferencesReducer,
    initialPreferences
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <PreferencesDispatchContext.Provider value={dispatch}>
        {children}
      </PreferencesDispatchContext.Provider>
    </PreferencesContext.Provider>
  );
};

export function usePreferences() {
  return useContext(PreferencesContext);
}

export function usePreferencesDispatch() {
  return useContext(PreferencesDispatchContext);
}

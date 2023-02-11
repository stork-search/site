declare global {
  interface Window {
    stork: any;
    __stork_debug_log: number;
  }
}

import { createContext, useEffect, useRef, useContext } from "react";

export type IndexRegistration = {
  name: string;
  url: string;
  options?: RegistrationOptions;
};

type RegistrationState = Record<
  string,
  {
    url: string;
    options: RegistrationOptions;
    registerObject?: any;
  }
>;

const StorkContext = createContext<any>({
  registrations: null,
});

export const StorkProvider = ({
  wasmUrl,
  indexes,
  children,
}: {
  wasmUrl?: string;
  indexes: Record<string, { url: string; downloaded?: boolean }>;
  children: any;
}) => {
  const stork = useRef<any>();
  const wasmInitializePromise = useRef<Promise<any> | null>(null);
  const downloadedIndexes = useRef<string[]>([]);

  if (typeof window !== "undefined" && window.stork && !stork.current) {
    stork.current = window.stork;
    window["__stork_debug_log"] = 1;
  }

  useEffect(() => {
    if (stork.current) {
      wasmInitializePromise.current = stork.current.initialize(
        wasmUrl ||
          "https://files.stork-search.net/releases/v2.0.0-beta.1/stork.wasm"
      );
    }
  });

  return (
    <StorkContext.Provider
      value={{
        stork,
        indexes,
        downloadedIndexes,
        wasmInitializePromise,
      }}
    >
      {children}
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src="https://files.stork-search.net/releases/v2.0.0-beta.1/stork.js"></script>
    </StorkContext.Provider>
  );
};

export const StorkUI = ({
  name,
  placeholder,
  value,
}: {
  name: string;
  placeholder?: string;
  value?: string;
}) => {
  const { stork, wasmInitializePromise, downloadedIndexes } =
    useContext(StorkContext);

  // On first render, download the index
  useEffect(() => {
    if (stork.current && wasmInitializePromise.current) {
      if (
        downloadedIndexes.current &&
        !downloadedIndexes.current.includes(name)
      ) {
        stork.current.downloadIndex(
          name,
          "https://files.stork-search.net/releases/v2.0.0-beta.1/federalist.st"
        );
        downloadedIndexes.current.push(name);
      }
    }
  });

  // On every render, attach the index
  useEffect(() => {
    if (
      stork.current &&
      downloadedIndexes.current &&
      downloadedIndexes.current.includes(name)
    ) {
      stork.current.attach(name);
    }
  });

  return (
    <div className="stork-wrapper">
      <input
        data-stork={name}
        className="stork-input"
        placeholder={placeholder}
        defaultValue={value}
      ></input>
      <div data-stork={`${name}-output`} className="stork-output"></div>
    </div>
  );
};

export const useStork = () => {
  return useContext(StorkContext);
};

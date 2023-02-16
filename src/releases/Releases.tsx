import { createContext, useContext } from "react";

const ReleasesContext = createContext<any | null>(null);

export const useReleases = () => {
  return useContext(ReleasesContext);
};

export const ReleasesProvider = ({
  releases,
  children,
}: {
  releases: any;
  children: any;
}) => {
  return (
    <ReleasesContext.Provider value={releases}>
      {children}
    </ReleasesContext.Provider>
  );
};

import useWindowDimensions from "@/utils/hooks/useWindowDimensions";
import { createContext, FC, ReactNode, useContext } from "react";

type ContentContextType = {
  width: number;
  height: number;
};

type ContentContextProviderProps = {
  children: ReactNode;
};

const ContentContext = createContext({} as ContentContextType);

export const ContentContextProvider: FC<ContentContextProviderProps> = ({
  children,
}) => {
  const { width, height } = useWindowDimensions();

  const data = {
    width,
    height,
  };
  return (
    <ContentContext.Provider value={data}>{children}</ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);

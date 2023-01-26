import useWindowDimensions from "@/utils/hooks/useWindowDimensions";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type ContentContextType = {
  nsfwContent: boolean | undefined;
  handleChangeNsfw: () => void;
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
  const [nsfwContent, setNsfwContent] = useState<undefined | boolean>();
  const { width, height } = useWindowDimensions();
  const handleChangeNsfw = () => {
    if (nsfwContent === undefined) return;
    localStorage.setItem("nsfwContent", JSON.stringify(!nsfwContent));
    setNsfwContent((prev) => !prev);
  };

  useEffect(() => {
    const localNsfw = localStorage.getItem("nsfwContent");
    if (localNsfw) {
      setNsfwContent(JSON.parse(localNsfw));
    } else {
      localStorage.setItem("nsfwContent", JSON.stringify(false));
      setNsfwContent(false);
    }
  }, []);

  const data = {
    nsfwContent,
    handleChangeNsfw,
    width,
    height,
  };
  return (
    <ContentContext.Provider value={data}>{children}</ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);

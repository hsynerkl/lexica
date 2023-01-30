import { LexicaImgProps } from "@/types/Lexicaimg";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type CommonFunctionsContextProps = {
  children: ReactNode;
};
type CommonFunctionsContextType = {
  showModal: boolean;
  handleShowHidemModal: () => void;
  handleRemoveLikes: (like: LexicaImgProps) => void;
};

const CommonFunctionsContext = createContext({} as CommonFunctionsContextType);

export const CommonFunctionsContextProvider: FC<
  CommonFunctionsContextProps
> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowHidemModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleRemoveLikes = async (like: LexicaImgProps) => {
    const localLikes = await JSON.parse(localStorage.getItem("likes")!);
    await localLikes.filter((item: LexicaImgProps) => item.id !== like.id);
    localStorage.setItem("likes", JSON.stringify(localLikes));
  };

  useEffect(() => {
    const localLikes = localStorage.getItem("likes");
    !localLikes && localStorage.setItem("likes", JSON.stringify([]));
  }, []);

  const data = { showModal, handleShowHidemModal, handleRemoveLikes };
  return (
    <CommonFunctionsContext.Provider value={data}>
      {children}
    </CommonFunctionsContext.Provider>
  );
};

export const useCommonFunctions = () => useContext(CommonFunctionsContext);

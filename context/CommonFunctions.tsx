import { LexicaImgProps } from "@/types/Lexicaimg";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

type CommonFunctionsContextProps = {
  children: ReactNode;
};
type CommonFunctionsContextType = {
  filteredImages: LexicaImgProps[];
  showModal: boolean;
  searchInp: string;
  nsfwContent: boolean;
  columnsMobile: number;
  columnsWeb: number;
  isLoading: boolean;
  showDetail: {
    isVisible: boolean;
    data: LexicaImgProps;
  };
  searched: boolean;
  handleSearchWithIcon: (text: string) => void;
  handleShowHidemModal: () => void;
  handleRemoveLikes: (like: LexicaImgProps) => void;
  handleSetShowDetail: (item: LexicaImgProps) => void;
  handleChangeNsfw: () => void;
  handleSearch: () => void;
  handleAddLikes: (like: LexicaImgProps) => void;
  handleSetSearch: (text: string) => void;
  handleSetWebColumns: (text: string) => void;
  handleSetMobileColumns: (text: string) => void;
  handleCloseShowDetail: () => void;
};

const CommonFunctionsContext = createContext({} as CommonFunctionsContextType);

export const CommonFunctionsContextProvider: FC<
  CommonFunctionsContextProps
> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [nsfwContent, setNsfwContent] = useState(false);
  const [columnsMobile, setColumnsMobile] = useState(2);
  const [searchLimit, setSearchLimit] = useState(false);
  const [columnsWeb, setColumnsWeb] = useState(8);
  const [searchInp, setSearchInp] = useState("");
  const [searched, setSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredImages, setFilteredImages] = useState<LexicaImgProps[]>([]);
  const [showDetail, setShowDetail] = useState({
    isVisible: false,
    data: {} as LexicaImgProps | any,
  });

  const handleCloseShowDetail = () => {
    setShowDetail({
      isVisible: false,
      data: {},
    });
  };

  const handleAddLikes = async (like: LexicaImgProps) => {
    const localLikes = await JSON.parse(localStorage.getItem("likes")!);
    await localLikes.push(like);
    localStorage.setItem("likes", JSON.stringify(localLikes));
    toast("Added likes.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleSetShowDetail = (item: LexicaImgProps) => {
    setShowDetail({
      isVisible: true,
      data: item,
    });
  };

  const handleLoading = (value: boolean) => {
    setIsLoading(value);
  };

  const handleChangeNsfw = () => {
    setNsfwContent((prev) => !prev);
  };

  const handleSetSearch = (text: string) => {
    setSearchInp(text);
  };

  const handleSetWebColumns = (text: string) => {
    setColumnsWeb(+text);
  };

  const handleSetMobileColumns = (text: string) => {
    setColumnsMobile(+text);
  };

  const handleSearch = async () => {
    try {
      handleLoading(true);
      await fetch(`https://lexica.art/api/v1/search?q=${searchInp}`)
        .then((res) => res.json().then((res) => res.images))
        .then((res) => res.filter((img: any) => img.nsfw === nsfwContent))
        .then((res) => setFilteredImages(res))
        .then(() => setSearched(true));
    } catch (e) {
      console.log(e);
      setSearchLimit(true);
    } finally {
      handleLoading(false);
    }
  };

  const handleSearchWithIcon = async (text: string) => {
    try {
      handleLoading(true);
      await fetch(`https://lexica.art/api/v1/search?q=${text}`)
        .then((res) => res.json().then((res) => res.images))
        .then((res) => res.filter((img: any) => img.nsfw === nsfwContent))
        .then((res) => setFilteredImages(res))
        .then(() => setSearched(true));
    } catch (e) {
      console.log(e);
      setSearchLimit(true);
    } finally {
      handleLoading(false);
    }
  };

  useEffect(() => {
    searchLimit &&
      toast("Limite takıldınız.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    setSearchLimit(false);
  }, [searchLimit]);

  const handleShowHidemModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleRemoveLikes = async (like: LexicaImgProps) => {
    const localLikes = await JSON.parse(localStorage.getItem("likes")!);
    const newData = await localLikes.filter(
      (item: LexicaImgProps) => item.id !== like.id
    );
    localStorage.setItem("likes", JSON.stringify(newData));
  };

  useEffect(() => {
    const localLikes = localStorage.getItem("likes");
    !localLikes && localStorage.setItem("likes", JSON.stringify([]));
  }, []);

  const data = {
    showModal,
    handleShowHidemModal,
    handleRemoveLikes,
    searchInp,
    handleSearch,
    nsfwContent,
    handleChangeNsfw,
    columnsWeb,
    columnsMobile,
    handleSetSearch,
    handleSetWebColumns,
    handleSetMobileColumns,
    isLoading,
    handleSetShowDetail,
    handleSearchWithIcon,
    filteredImages,
    handleCloseShowDetail,
    showDetail,
    handleAddLikes,
    searched,
  };
  return (
    <CommonFunctionsContext.Provider value={data}>
      {children}
    </CommonFunctionsContext.Provider>
  );
};

export const useCommonFunctions = () => useContext(CommonFunctionsContext);

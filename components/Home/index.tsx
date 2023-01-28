import { LexicaImgProps } from "@/types/Lexicaimg";
import { FC, useEffect, useState } from "react";
import ImageDetailModal from "../common/ImageDetailModal";
import ImageContainer from "./HomePartials/ImageContainer";
import Searchbar from "./HomePartials/Searchbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type HomeComponentProps = {
  imgs: LexicaImgProps[];
  limit: boolean;
};

const HomeComponent: FC<HomeComponentProps> = ({ limit, imgs }) => {
  const [nsfwContent, setNsfwContent] = useState(false);
  const [columnsMobile, setColumnsMobile] = useState(2);
  const [searchLimit, setSearchLimit] = useState(limit);
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

  return (
    <div className="bg-black-200 text-white pb-16 md:pb-2 md:pt-14 flex items-center flex-col overflow-y-auto h-screen overflow-x-hidden">
      <Searchbar
        searchInp={searchInp}
        handleSearch={handleSearch}
        nsfwContent={nsfwContent}
        handleChangeNsfw={handleChangeNsfw}
        columnsWeb={columnsWeb}
        columnsMobile={columnsMobile}
        handleSetSearch={handleSetSearch}
        handleSetWebColumns={handleSetWebColumns}
        handleSetMobileColumns={handleSetMobileColumns}
        isLoading={isLoading}
      />
      <ImageContainer
        columns={columnsWeb}
        handleSetShowDetail={handleSetShowDetail}
        handleSearchWithIcon={handleSearchWithIcon}
        filteredImages={filteredImages}
        imgs={imgs}
        device={"web"}
        searched={searched}
      />

      <ImageContainer
        columns={columnsMobile}
        handleSetShowDetail={handleSetShowDetail}
        handleSearchWithIcon={handleSearchWithIcon}
        filteredImages={filteredImages}
        imgs={imgs}
        device={"mobile"}
        searched={searched}
      />

      {showDetail.isVisible && (
        <ImageDetailModal
          showDetail={showDetail}
          handleCloseShowDetail={handleCloseShowDetail}
        />
      )}

      <ToastContainer />
    </div>
  );
};

export default HomeComponent;

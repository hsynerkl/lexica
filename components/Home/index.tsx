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
  const [columnsMobile, setColumnsMobile] = useState(4);
  const [columnsWeb, setColumnsWeb] = useState(8);
  const [searchInp, setSearchInp] = useState("");
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
    if (searchInp.trim().length >= 3) {
      try {
        await fetch(`https://lexica.art/api/v1/search?q=${searchInp}`)
          .then((res) => res.json().then((res) => res.images))
          .then((res) => res.filter((img: any) => img.nsfw === nsfwContent))
          .then((res) => setFilteredImages(res));
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleSearchWithIcon = async (text: string) => {
    try {
      await fetch(`https://lexica.art/api/v1/search?q=${text}`)
        .then((res) => res.json().then((res) => res.images))
        .then((res) => res.filter((img: any) => img.nsfw === nsfwContent))
        .then((res) => setFilteredImages(res));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    limit &&
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
  }, [limit]);

  return (
    <div className="bg-black-200 text-white pb-14 md:pb-0 md:pt-14 flex items-center flex-col">
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
      />
      <ImageContainer
        columns={columnsWeb}
        handleSetShowDetail={handleSetShowDetail}
        handleSearchWithIcon={handleSearchWithIcon}
        filteredImages={filteredImages}
        imgs={imgs}
        device={"web"}
      />

      <ImageContainer
        columns={columnsMobile}
        handleSetShowDetail={handleSetShowDetail}
        handleSearchWithIcon={handleSearchWithIcon}
        filteredImages={filteredImages}
        imgs={imgs}
        device={"mobile"}
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

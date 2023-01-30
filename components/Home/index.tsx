import { LexicaImgProps } from "@/types/Lexicaimg";
import { FC } from "react";
import ImageDetailModal from "../common/ImageDetailModal";
import ImageContainer from "./HomePartials/ImageContainer";
import Searchbar from "./HomePartials/Searchbar";
import { ToastContainer } from "react-toastify";
import { useCommonFunctions } from "@/context/CommonFunctions";
import "react-toastify/dist/ReactToastify.css";

type HomeComponentProps = {
  imgs: LexicaImgProps[];
  limit: boolean;
};

const HomeComponent: FC<HomeComponentProps> = ({ imgs }) => {
  const { showDetail } = useCommonFunctions();
  return (
    <div className="bg-black-200 text-white pb-16 md:pb-2 md:pt-14 flex items-center flex-col overflow-y-auto h-screen overflow-x-hidden">
      <Searchbar />
      <ImageContainer imgs={imgs} device={"web"} />

      <ImageContainer imgs={imgs} device={"mobile"} />

      {showDetail.isVisible && <ImageDetailModal />}

      <ToastContainer />
    </div>
  );
};

export default HomeComponent;

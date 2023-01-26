import { useContent } from "@/context/Content";
import { LexicaImgProps } from "@/types/Lexicaimg";
import Image from "next/image";
import { FC, useState } from "react";
import CustomButton from "../common/CustomButton";
import ImageDetailModal from "../common/ImageDetailModal";

type HomeComponentProps = {
  imgs: LexicaImgProps[];
  limit: boolean;
};

const HomeComponent: FC<HomeComponentProps> = ({ limit, imgs }) => {
  const { nsfwContent, handleChangeNsfw, width, height } = useContent();
  const [columns, setColumns] = useState(width >= 768 ? 8 : 4);
  const [searchInp, setSearchInp] = useState("");
  const [filteredImages, setFilteredImages] = useState<LexicaImgProps[]>([]);
  const [limitPopUp, setLimitPopUp] = useState(limit);
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

  const handleSearch = async () => {
    if (nsfwContent === undefined) return;

    if (searchInp.trim().length > 3) {
      try {
        await fetch(`https://lexica.art/api/v1/search?q=${searchInp}`)
          .then((res) => res.json().then((res) => res.images))
          .then((res) => res.filter((img: any) => img.nsfw === nsfwContent))
          .then((res) => setFilteredImages(res));
      } catch (e) {
        console.log(e);
        setLimitPopUp(true);
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
      setLimitPopUp(true);
    }
  };

  return (
    <section className="min-h-screen bg-black-200 text-white pb-14 md:pb-0 pt-14 flex items-center flex-col overflow-hidden">
      <div className="container flex flex-col m-4 items-center pt-16">
        <svg
          viewBox="0 0 112 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 m-4"
        >
          <path
            d="M6.64774 31H0.977744V2.9335H6.64774V31ZM4.66324 31V30.4735H16.8942V31H4.66324ZM33.2749 23.386H38.6209C38.1889 24.979 37.4464 26.383 36.3934 27.598C35.3404 28.813 34.0579 29.758 32.5459 30.433C31.0609 31.081 29.4139 31.405 27.6049 31.405C25.4179 31.405 23.4604 30.9325 21.7324 29.9875C20.0044 29.0425 18.6409 27.733 17.6419 26.059C16.6429 24.358 16.1434 22.4275 16.1434 20.2675C16.1434 18.0805 16.6429 16.15 17.6419 14.476C18.6409 12.802 20.0044 11.4925 21.7324 10.5475C23.4604 9.6025 25.4179 9.13 27.6049 9.13C29.3869 9.13 31.0204 9.454 32.5054 10.102C34.0174 10.75 35.2999 11.668 36.3529 12.856C37.4059 14.017 38.1484 15.394 38.5804 16.987H33.2344C33.0724 15.826 32.7619 14.692 32.3029 13.585C31.8709 12.451 31.2634 11.5195 30.4804 10.7905C29.7244 10.0345 28.7659 9.6565 27.6049 9.6565C26.4709 9.6565 25.4584 10.0615 24.5674 10.8715C23.7034 11.6545 23.0149 12.829 22.5019 14.395C22.0159 15.961 21.7729 17.9185 21.7729 20.2675C21.7729 22.3735 21.9889 24.223 22.4209 25.816C22.8799 27.409 23.5414 28.651 24.4054 29.542C25.2964 30.433 26.3629 30.8785 27.6049 30.8785C29.0359 30.8785 30.2509 30.2575 31.2499 29.0155C32.2759 27.7465 32.9509 25.87 33.2749 23.386ZM18.2089 16.987V16.4605H36.9199V16.987H18.2089ZM39.597 9.535H45.2265L56.4855 31H50.856L39.597 9.535ZM47.535 20.1055L47.94 20.632L41.217 31H40.5285L47.535 20.1055ZM48.5475 20.632L48.1425 20.1055L54.987 9.535H55.6755L48.5475 20.632ZM65.4136 31H59.9461V9.535H65.4136V31ZM62.7001 6.295C61.8091 6.295 61.0666 5.998 60.4726 5.404C59.9056 4.81 59.6221 4.081 59.6221 3.217C59.6221 2.353 59.9056 1.6375 60.4726 1.0705C61.0666 0.476499 61.8091 0.179498 62.7001 0.179498C63.5641 0.179498 64.2796 0.476499 64.8466 1.0705C65.4406 1.6375 65.7376 2.353 65.7376 3.217C65.7376 4.081 65.4406 4.81 64.8466 5.404C64.2796 5.998 63.5641 6.295 62.7001 6.295ZM85.8746 23.5075H91.2206C90.7886 25.0735 90.0461 26.4505 88.9931 27.6385C87.9671 28.8265 86.7116 29.758 85.2266 30.433C83.7416 31.081 82.1081 31.405 80.3261 31.405C78.1391 31.405 76.1816 30.9325 74.4536 29.9875C72.7256 29.0425 71.3621 27.733 70.3631 26.059C69.3641 24.358 68.8646 22.4275 68.8646 20.2675C68.8646 18.0805 69.3641 16.15 70.3631 14.476C71.3621 12.802 72.7256 11.4925 74.4536 10.5475C76.1816 9.6025 78.1391 9.13 80.3261 9.13C82.1081 9.13 83.7416 9.454 85.2266 10.102C86.7116 10.75 87.9671 11.668 88.9931 12.856C90.0461 14.017 90.7886 15.394 91.2206 16.987H85.8746C85.7126 15.799 85.4156 14.6515 84.9836 13.5445C84.5516 12.4105 83.9576 11.479 83.2016 10.75C82.4456 10.021 81.4871 9.6565 80.3261 9.6565C79.1921 9.6565 78.1796 10.0615 77.2886 10.8715C76.4246 11.6545 75.7361 12.829 75.2231 14.395C74.7371 15.961 74.4941 17.9185 74.4941 20.2675C74.4941 22.3735 74.7101 24.223 75.1421 25.816C75.6011 27.409 76.2626 28.651 77.1266 29.542C78.0176 30.433 79.0841 30.8785 80.3261 30.8785C81.3791 30.8785 82.2836 30.5545 83.0396 29.9065C83.7956 29.2315 84.4166 28.3405 84.9026 27.2335C85.3886 26.1265 85.7126 24.8845 85.8746 23.5075ZM111.286 31H105.819V27.7195V24.9655V22.2115V14.5975C105.819 12.7075 105.535 11.4115 104.968 10.7095C104.401 10.0075 103.686 9.6565 102.822 9.6565C102.282 9.6565 101.782 9.8185 101.323 10.1425C100.864 10.4665 100.5 11.0065 100.23 11.7625C99.9596 12.4915 99.8246 13.504 99.8246 14.8C99.8246 15.07 99.8246 15.3535 99.8246 15.6505C99.8516 15.9475 99.8786 16.2175 99.9056 16.4605H94.3166C94.3166 15.0025 94.6811 13.7335 95.4101 12.6535C96.1661 11.5465 97.1921 10.6825 98.4881 10.0615C99.7841 9.4405 101.229 9.13 102.822 9.13C104.442 9.13 105.886 9.454 107.155 10.102C108.424 10.723 109.423 11.6275 110.152 12.8155C110.908 13.9765 111.286 15.367 111.286 16.987V31ZM99.8651 31.405C98.4881 31.405 97.2731 31.135 96.2201 30.595C95.1941 30.055 94.3976 29.326 93.8306 28.408C93.2636 27.463 92.9801 26.41 92.9801 25.249C92.9801 23.98 93.2771 22.873 93.8711 21.928C94.4921 20.956 95.3156 20.2135 96.3416 19.7005C97.3946 19.1605 98.5691 18.8905 99.8651 18.8905H107.074L106.993 19.417H102.822C101.499 19.417 100.446 19.93 99.6626 20.956C98.9066 21.955 98.5286 23.251 98.5286 24.844C98.5286 26.302 98.8391 27.49 99.4601 28.408C100.081 29.326 100.972 29.785 102.133 29.785C102.862 29.785 103.497 29.5825 104.037 29.1775C104.604 28.7725 105.036 28.2055 105.333 27.4765C105.657 26.7475 105.819 25.9105 105.819 24.9655H106.386C106.386 26.9365 105.792 28.5025 104.604 29.6635C103.443 30.8245 101.863 31.405 99.8651 31.405Z"
            fill="white"
          ></path>
        </svg>
        <p className="mt-1 text-sm text-zinc-400 px-2 text-center">
          The Stable Diffusion search engine
        </p>
        <div className="h-8 px-3 mt-3 flex text-xs rounded-lg select-none items-center justify-center opacity-50 hover:opacity-90 hover:bg-zinc-600 border border-zinc-700 cursor-pointer">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            role="img"
            viewBox="0 0 24 24"
            className="text-base mr-2"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title></title>
            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
          </svg>
          Join the Discord
        </div>

        <div className="max-w-lg w-full relative mt-4">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-4 pointer-events-none top-3"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>

          <input
            id="main-search"
            autoComplete="off"
            value={searchInp}
            onKeyDown={(e) => e.code === "Enter" && handleSearch()}
            onChange={(e) => setSearchInp(e.target.value)}
            className="bg-zinc-700 w-full flex-1 py-2.5 rounded-full px-12 focus:outline-none focus:ring-1 focus:ring-indigo-700"
            placeholder="Search for an image"
          />
          <div
            className="border-b border-b-indigo-400 absolute invisible md:visible -right-14 top-1 pb-1"
            onClick={handleChangeNsfw}
          >
            <p
              className={`${
                nsfwContent === true ? "bg-black-100" : "bg-transparent"
              } text-sm text-center text-white py-1 px-2 rounded-md hover:bg-opacity-80 hover:bg-black-100 cursor-pointer transition-all duration-300`}
            >
              Nsfw
            </p>
          </div>

          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            className="absolute top-3 right-4 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
        </div>

        <CustomButton
          text="search"
          className="!px-12 mt-3 mb-3 !rounded-full"
          onClick={handleSearch}
        />

        <div className="flex mb-14 flex-col gap-5 justify-center">
          <p className="text-sm text-gray-50 text-center opacity-50">
            Columns: {columns}
          </p>

          <input
            className="w-48 md:w-96 cursor-pointer apperence-none-custom transition-all duration-150 hover:opacity-80  border-none"
            type="range"
            min={1}
            max={width >= 768 ? 12 : 4}
            value={columns}
            onChange={(e) => setColumns(+e.target.value)}
          />
        </div>
      </div>
      <div
        className={`grid pb-14 gap-2 sm:gap-1 px-2 md:px-8 w-screen`}
        style={{ gridTemplateColumns: `repeat(${columns},minmax(0,1fr))` }}
      >
        {filteredImages.length >= 1
          ? filteredImages?.map((item, index) => (
              <div
                className="aspect-h-1 aspect-w-1 group relative overflow-hidden"
                key={item?.id}
                onClick={() =>
                  setShowDetail({
                    isVisible: true,
                    data: item,
                  })
                }
              >
                <Image
                  src={item?.src}
                  alt={item?.promptid}
                  className="rounded-lg"
                  fill={true}
                  loading="eager"
                />
                <div className="inset-0 z-50 gap-2 p-2 absolute cursor-pointer invisible text-white flex flex-col group-hover:visible bg-black-50">
                  <div className="flex justify-between">
                    <div
                      className="p-2 h-fit hover:bg-black-100 bg-black-50 hover:bg-opacity-30 hover:backdrop-blur transition-all duration-150 rounded-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSearchWithIcon(item?.prompt);
                      }}
                    >
                      <svg
                        stroke="white"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </div>
                    <div className="p-2 h-fit hover:bg-black-100 hover:bg-opacity-30 bg-black-50 hover:backdrop-blur transition-all duration-150 rounded-lg ">
                      <svg
                        stroke="white"
                        fill="none"
                        strokeWidth="2"
                        height="1em"
                        width="1em"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div
                      className="p-2 h-fit hover:bg-black-100 bg-black-50 hover:bg-opacity-30 hover:backdrop-blur transition-all duration-150 rounded-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg
                        stroke="currentColor"
                        fill="white"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M224 96l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32zM80 160l26.66-53.33L160 80l-53.34-26.67L80 0 53.34 53.33 0 80l53.34 26.67L80 160zm352 128l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368l-53.34-26.67L432 288zm70.62-193.77L417.77 9.38C411.53 3.12 403.34 0 395.15 0c-8.19 0-16.38 3.12-22.63 9.38L9.38 372.52c-12.5 12.5-12.5 32.76 0 45.25l84.85 84.85c6.25 6.25 14.44 9.37 22.62 9.37 8.19 0 16.38-3.12 22.63-9.37l363.14-363.15c12.5-12.48 12.5-32.75 0-45.24zM359.45 203.46l-50.91-50.91 86.6-86.6 50.91 50.91-86.6 86.6z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-start items-end h-full ">
                    <p
                      className="line-clamp text-xs hidden sm:flex"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {item.prompt}
                    </p>
                  </div>
                </div>
              </div>
            ))
          : imgs?.map((item, index) => (
              <div
                className="aspect-h-1 aspect-w-1 group relative overflow-hidden"
                key={item?.id}
                onClick={() =>
                  setShowDetail({
                    isVisible: true,
                    data: item,
                  })
                }
              >
                <Image
                  src={item?.src}
                  alt={item?.promptid}
                  className="rounded-lg"
                  fill={true}
                  loading="eager"
                />
                <div className="inset-0 z-50 gap-2 p-2 absolute cursor-pointer invisible text-white flex flex-col group-hover:visible bg-black-50">
                  <div className="flex justify-between">
                    <div
                      className="p-2 h-fit hover:bg-black-100 bg-black-50 hover:bg-opacity-30 hover:backdrop-blur transition-all duration-150 rounded-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSearchWithIcon(item?.prompt);
                      }}
                    >
                      <svg
                        stroke="white"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </div>
                    <div className="p-2 h-fit hover:bg-black-100 hover:bg-opacity-30 bg-black-50 hover:backdrop-blur transition-all duration-150 rounded-lg ">
                      <svg
                        stroke="white"
                        fill="none"
                        strokeWidth="2"
                        height="1em"
                        width="1em"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div
                      className="p-2 h-fit hover:bg-black-100 bg-black-50 hover:bg-opacity-30 hover:backdrop-blur transition-all duration-150 rounded-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg
                        stroke="currentColor"
                        fill="white"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M224 96l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32zM80 160l26.66-53.33L160 80l-53.34-26.67L80 0 53.34 53.33 0 80l53.34 26.67L80 160zm352 128l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368l-53.34-26.67L432 288zm70.62-193.77L417.77 9.38C411.53 3.12 403.34 0 395.15 0c-8.19 0-16.38 3.12-22.63 9.38L9.38 372.52c-12.5 12.5-12.5 32.76 0 45.25l84.85 84.85c6.25 6.25 14.44 9.37 22.62 9.37 8.19 0 16.38-3.12 22.63-9.37l363.14-363.15c12.5-12.48 12.5-32.75 0-45.24zM359.45 203.46l-50.91-50.91 86.6-86.6 50.91 50.91-86.6 86.6z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-start items-end h-full ">
                    <p
                      className="line-clamp text-xs hidden sm:flex"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {item.prompt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
      </div>
      {limitPopUp && (
        <div className="absolute p-4 ani right-10 top-16 flex flex-col gap-3 items-center rounded-md bg-white font-bold text-indigo-800">
          <p className="text-sm">
            Dakikalık Limit&apos;e takıldınız. Biraz yavaşlayın.
          </p>
          <div>
            <p>. .</p>
            <p className="rotate-90">(</p>
          </div>
          <CustomButton
            text="tmm."
            className="!px-6 !rounded-full"
            onClick={() => setLimitPopUp(false)}
          />
        </div>
      )}
      {showDetail.isVisible && (
        <ImageDetailModal
          showDetail={showDetail}
          handleCloseShowDetail={handleCloseShowDetail}
        />
      )}
    </section>
  );
};

export default HomeComponent;

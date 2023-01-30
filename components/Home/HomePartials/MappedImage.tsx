import { LexicaImgProps } from "@/types/Lexicaimg";
import Image from "next/image";
import { FC } from "react";

type MappedImageProps = {
  item: LexicaImgProps;
  handleSetShowDetail: (item: LexicaImgProps) => void;
  handleSearchWithIcon: (text: string) => void;
  handleAddLikes: (like: LexicaImgProps) => void;
};

const MappedImage: FC<MappedImageProps> = ({
  item,
  handleSetShowDetail,
  handleSearchWithIcon,
  handleAddLikes,
}) => {
  return (
    <div
      className="aspect-h-1 aspect-w-1 group relative overflow-hidden"
      onClick={() => handleSetShowDetail(item)}
    >
      <Image
        src={item?.src}
        alt={item?.promptid}
        className="rounded-lg"
        fill={true}
        loading="eager"
      />
      <div className="inset-0 z-50 gap-2 p-[2px] sm:p-2 absolute cursor-pointer invisible text-white flex flex-col group-hover:visible bg-black-50">
        <div className="flex justify-between">
          <div
            className="p-2 h-fit hover:bg-black-100 bg-black-50 hover:bg-opacity-30 hover:backdrop-blur rounded-lg"
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
          <div
            className="p-2 h-fit hover:bg-black-100 hover:bg-opacity-30 bg-black-50 hover:backdrop-blur rounded-lg"
            onClick={(e) => {
              e.stopPropagation();
              handleAddLikes(item);
            }}
          >
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
            className="p-2 h-fit hover:bg-black-100 bg-black-50 hover:bg-opacity-30 hover:backdrop-blur rounded-lg"
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
        <div className="justify-start items-end h-full hidden sm:flex ">
          <p
            className="line-clamp text-xs "
            onClick={(e) => e.stopPropagation()}
          >
            {item.prompt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MappedImage;

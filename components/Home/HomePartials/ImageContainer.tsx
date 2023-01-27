import { LexicaImgProps } from "@/types/Lexicaimg";
import { FC, Fragment } from "react";
import MappedImage from "./MappedImage";

type ImageContainerType = {
  columns: number;
  handleSetShowDetail: (item: LexicaImgProps) => void;
  handleSearchWithIcon: (text: string) => void;
  filteredImages: LexicaImgProps[];
  imgs: LexicaImgProps[];
  device: string;
};

const ImageContainer: FC<ImageContainerType> = ({
  columns,
  handleSetShowDetail,
  handleSearchWithIcon,
  filteredImages,
  imgs,
  device,
}) => {
  return (
    <section
      className={`pb-14 gap-2 sm:gap-1 px-2 md:px-8 w-screen ${
        device === "mobile" ? "grid md:hidden" : "hidden md:grid"
      }`}
      style={{ gridTemplateColumns: `repeat(${columns},minmax(0,1fr))` }}
    >
      {filteredImages.length >= 1
        ? filteredImages?.map((item) => (
            <Fragment key={item.id}>
              <MappedImage
                item={item}
                handleSetShowDetail={handleSetShowDetail}
                handleSearchWithIcon={handleSearchWithIcon}
              />
            </Fragment>
          ))
        : imgs?.map((item) => (
            <Fragment key={item.id}>
              <MappedImage
                item={item}
                handleSetShowDetail={handleSetShowDetail}
                handleSearchWithIcon={handleSearchWithIcon}
              />
            </Fragment>
          ))}
    </section>
  );
};

export default ImageContainer;

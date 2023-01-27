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
  searched: boolean;
};

const ImageContainer: FC<ImageContainerType> = ({
  columns,
  handleSetShowDetail,
  handleSearchWithIcon,
  filteredImages,
  imgs,
  device,
  searched,
}) => {
  return (
    <section
      className={`gap-2 sm:gap-1 px-2 w-screen ${
        device === "mobile" ? "grid md:hidden" : "hidden md:grid"
      }`}
      style={{ gridTemplateColumns: `repeat(${columns},minmax(0,1fr))` }}
    >
      {searched === true ? (
        filteredImages.length >= 1 ? (
          filteredImages?.map((item) => (
            <Fragment key={item.id}>
              <MappedImage
                item={item}
                handleSetShowDetail={handleSetShowDetail}
                handleSearchWithIcon={handleSearchWithIcon}
              />
            </Fragment>
          ))
        ) : (
          <p className="text-center text-white opacity-50 col-span-2">
            Sonuç Yok
          </p>
        )
      ) : (
        imgs?.map((item) => (
          <Fragment key={item.id}>
            <MappedImage
              item={item}
              handleSetShowDetail={handleSetShowDetail}
              handleSearchWithIcon={handleSearchWithIcon}
            />
          </Fragment>
        ))
      )}
    </section>
  );
};

export default ImageContainer;

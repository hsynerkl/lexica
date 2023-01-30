import { useCommonFunctions } from "@/context/CommonFunctions";
import { LexicaImgProps } from "@/types/Lexicaimg";
import { FC, Fragment } from "react";
import MappedImage from "./MappedImage";

type ImageContainerType = {
  imgs: LexicaImgProps[];
  device: string;
};

const ImageContainer: FC<ImageContainerType> = ({ imgs, device }) => {
  const { filteredImages, searched, columnsMobile, columnsWeb } =
    useCommonFunctions();
  return (
    <section
      className={`gap-2 sm:gap-1 px-2 w-full ${
        device === "mobile" ? "grid md:hidden" : "hidden md:grid"
      }`}
      style={{
        gridTemplateColumns: `repeat(${
          device === "mobile" ? columnsMobile : columnsWeb
        },minmax(0,1fr))`,
      }}
    >
      {searched === true ? (
        filteredImages.length >= 1 ? (
          filteredImages?.map((item) => (
            <Fragment key={item.id}>
              <MappedImage item={item} />
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
            <MappedImage item={item} />
          </Fragment>
        ))
      )}
    </section>
  );
};

export default ImageContainer;

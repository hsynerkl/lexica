import { LexicaImgProps } from "@/types/Lexicaimg";
import Image from "next/image";
import { FC } from "react";

type ImageDetailModalProps = {
  showDetail: {
    isVisible: boolean;
    data: LexicaImgProps;
  };
  handleCloseShowDetail: () => void;
};

const ImageDetailModal: FC<ImageDetailModalProps> = ({
  showDetail,
  handleCloseShowDetail,
}) => {
  return (
    <div
      className="fixed inset-0 w-screen h-screen overflow-hidden px-16 py-8 flex justify-center z-40 sm:z-50 bg-zinc-900 bg-opacity-80"
      onClick={handleCloseShowDetail}
    >
      <div
        className="grid w-full grid-cols-2 bg-zinc-800 drop-shadow-xl overflow-hidden rounded-xl border p-4 border-zinc-700 box-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div>1</div>
        <div className="aspect-h-1 aspect-w-1 relative">
          <Image
            src={showDetail.data?.src}
            alt={showDetail.data?.promptid}
            className="rounded-lg"
            fill
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageDetailModal;

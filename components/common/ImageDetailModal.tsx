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
      className="fixed inset-0 w-screen z-[999] h-screen overflow-hidden sm:px-16 px-4 py-4 sm:py-8 flex justify-center sm:z-50 bg-zinc-900 bg-opacity-80"
      onClick={handleCloseShowDetail}
    >
      <div
        className="grid gap-10 w-full sm:grid-cols-2 bg-zinc-800 drop-shadow-xl overflow-hidden rounded-xl border p-4 border-zinc-700 box-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col">
          <div className="px-4 py-3 bg-zinc-700 rounded-xl shadow bg-opacity-50 font-light flex flex-col space-y-5">
            <p>{showDetail.data?.prompt}</p>
            <div className="flex gap-2">
              <div
                className="text-xs rounded-md sm:text-xs active:scale-95 transition-all transform-gpu whitespace-nowrap flex-1 flex select-none cursor-pointer hover:bg-zinc-600 border border-zinc-600 bg-zinc-700 items-center justify-center shadow px-2.5 py-2 w-fit-content"
                onClick={async () => {
                  await navigator.clipboard.writeText(showDetail.data?.prompt);
                }}
              >
                <svg
                  stroke="white"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-sm mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <p>Copy prompt</p>
              </div>
              <div
                onClick={async () => {
                  await navigator.clipboard.writeText(showDetail.data?.src);
                }}
                className="text-xs rounded-md sm:text-xs active:scale-95 transition-all transform-gpu whitespace-nowrap flex-1 flex select-none cursor-pointer hover:bg-zinc-600 border border-zinc-600 bg-zinc-700 items-center justify-center shadow px-2.5 py-2 w-fit-content"
              >
                <svg
                  stroke="white"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-sm mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
                <p>Copy URL</p>
              </div>
              <div
                onClick={() => window.open(showDetail.data?.src, "_blank")}
                className="text-xs rounded-md sm:text-xs active:scale-95 transition-all transform-gpu whitespace-nowrap flex-1 flex select-none cursor-pointer hover:bg-zinc-600 border border-zinc-600 bg-zinc-700 items-center justify-center shadow px-2.5 py-2 w-fit-content"
              >
                <svg
                  stroke="white"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-sm"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="relative aspect-w-16 aspect-h-1">
          <div>
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
    </div>
  );
};

export default ImageDetailModal;

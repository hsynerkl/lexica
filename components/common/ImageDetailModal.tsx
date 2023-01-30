import useClipboard from "react-use-clipboard";
import Image from "next/image";
import { FC } from "react";
import { useCommonFunctions } from "@/context/CommonFunctions";

const ImageDetailModal: FC = () => {
  const { showDetail, handleCloseShowDetail } = useCommonFunctions();

  const [copyPrompt, setCopyPrompt] = useClipboard(showDetail.data.prompt, {
    successDuration: 1000,
  });

  const [copyUrl, setCopyUrl] = useClipboard(showDetail.data.src, {
    successDuration: 1000,
  });

  return (
    <div
      className="fixed inset-0 z-[9999] sm:px-16 px-1 py-8 flex justify-center sm:z-50 bg-zinc-900 bg-opacity-80 "
      onClick={handleCloseShowDetail}
    >
      <div
        className="absolute right-0 top-0 px-4 py-1 cursor-pointer hover:opacity-50 transition-colors duration-150"
        onClick={handleCloseShowDetail}
      >
        x
      </div>
      <div
        className="z-10 grid md:gap-10 w-full md:grid-cols-2 bg-zinc-800 drop-shadow-xl overflow-hidden rounded-xl border px-1 sm:px-4 py-8 border-zinc-700 box-content max-w-5xl relative overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-fit">
          <div className="px-4 py-3 bg-zinc-700 rounded-xl shadow bg-opacity-50 font-light flex flex-col space-y-5">
            <p>{showDetail.data?.prompt}</p>
            <div className="flex gap-2">
              <div
                className="text-xs rounded-md sm:text-xs active:scale-95 transition-all transform-gpu whitespace-nowrap flex-1 flex select-none cursor-pointer hover:bg-zinc-600 border border-zinc-600 bg-zinc-700 items-center justify-center shadow px-2.5 py-2 w-fit-content"
                onClick={setCopyPrompt}
              >
                <svg
                  stroke="white"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
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
                onClick={setCopyUrl}
                className="text-xs rounded-md sm:text-xs active:scale-95 transition-all transform-gpu whitespace-nowrap flex-1 flex select-none cursor-pointer hover:bg-zinc-600 border border-zinc-600 bg-zinc-700 items-center justify-center shadow px-2.5 py-2 w-fit-content"
              >
                <svg
                  stroke="white"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
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
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
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
          <div className="grid grid-cols-2 gap-2">
            <div className="text-xs gap-2 rounded-md sm:text-sm group mt-4 whitespace-nowrap flex-1 flex select-none cursor-pointer hover:brightness-110 bg-gradient-to-t from-indigo-900 via-indigo-900 to-indigo-800 drop-shadow items-center justify-center px-2.5 py-2.5 w-fit-content active:scale-95 transition-all">
              <svg
                stroke="white"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-base transition-all w-3 h-3"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224 96l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32zM80 160l26.66-53.33L160 80l-53.34-26.67L80 0 53.34 53.33 0 80l53.34 26.67L80 160zm352 128l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368l-53.34-26.67L432 288zm70.62-193.77L417.77 9.38C411.53 3.12 403.34 0 395.15 0c-8.19 0-16.38 3.12-22.63 9.38L9.38 372.52c-12.5 12.5-12.5 32.76 0 45.25l84.85 84.85c6.25 6.25 14.44 9.37 22.62 9.37 8.19 0 16.38-3.12 22.63-9.37l363.14-363.15c12.5-12.48 12.5-32.75 0-45.24zM359.45 203.46l-50.91-50.91 86.6-86.6 50.91 50.91-86.6 86.6z"></path>
              </svg>
              <p>Open in Editor</p>
            </div>
            <div className="text-xs gap-2 rounded-md sm:text-sm group mt-4 whitespace-nowrap flex-1 flex select-none cursor-pointer hover:brightness-110 bg-gradient-to-t from-zinc-700 via-zinc-700 to-zinc-700 drop-shadow items-center justify-center px-2.5 py-2 w-fit-content">
              <p>Explore this style</p>

              <svg
                height="1em"
                width="1em"
                fill="white"
                className="text-base transition-all w-3 h-3"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  data-name="chevron-right-Regular"
                  d="m17.53 12.53-9 9a.75.75 0 0 1-1.06-1.06L15.939 12 7.47 3.53a.75.75 0 0 1 1.06-1.06l9 9a.749.749 0 0 1 0 1.06Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-2 my-4 ml-2">
            <div>
              <p className="text-xs opacity-50">Model</p>
              <p className="text-sm text-[#f3f4f6] opacity-80">
                {showDetail?.data?.model}
              </p>
            </div>
            <div>
              <p className="text-xs opacity-50">Guidance Scale</p>
              <p className="text-sm text-[#f3f4f6] opacity-80">
                {showDetail?.data?.guidance}
              </p>
            </div>

            <div>
              <p className="text-xs opacity-50">Dimensions</p>
              <p className="text-sm text-[#f3f4f6] opacity-80">
                {showDetail?.data?.width} x {showDetail?.data?.height}
              </p>
            </div>
          </div>
        </div>
        <div className="relative aspect-w-2 aspect-h-1 ">
          <div>
            <Image
              src={showDetail.data?.src}
              alt={showDetail.data?.promptid}
              className="rounded-lg"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetailModal;

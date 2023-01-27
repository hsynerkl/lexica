import { useEffect, useRef, useState } from "react";
import CustomButton from "../common/CustomButton";

const GenerateComponent = () => {
  const [windowValue, setWindowValue] = useState({
    textW: "640",
    textH: "640",
    width: 640 / 6,
    height: 640 / 6,
  });
  const inpRef = useRef<HTMLInputElement>(null);
  const [rangeValue, setRangeValue] = useState(5);
  const [windowVisible, setWindowVisible] = useState(false);

  const handleWindowStyle = (windowValue: number) => {
    setRangeValue(windowValue);
    switch (windowValue) {
      case 1:
        setWindowValue({
          width: 768 / 6,
          height: 512 / 6,
          textW: "768 ",
          textH: "512",
        });
        break;
      case 2:
        setWindowValue({
          width: 704 / 6,
          height: 512 / 6,
          textW: "704 ",
          textH: "512",
        });
        break;
      case 3:
        setWindowValue({
          width: 640 / 6,
          height: 512 / 6,
          textW: "640 ",
          textH: "512",
        });
        break;
      case 4:
        setWindowValue({
          width: 576 / 6,
          height: 512 / 6,
          textW: "576 ",
          textH: "512",
        });
        break;
      case 5:
        setWindowValue({
          width: 640 / 6,
          height: 640 / 6,
          textW: "640 ",
          textH: "640",
        });
        break;
      case 6:
        setWindowValue({
          width: 512 / 6,
          height: 576 / 6,
          textW: "512 ",
          textH: "576",
        });
        break;
      case 7:
        setWindowValue({
          width: 512 / 6,
          height: 640 / 6,
          textW: "512 ",
          textH: "640",
        });
        break;
      case 8:
        setWindowValue({
          width: 512 / 6,
          height: 704 / 6,
          textW: "512 ",
          textH: "704",
        });
        break;
      case 9:
        setWindowValue({
          width: 512 / 6,
          height: 768 / 6,
          textW: "512 ",
          textH: "768",
        });
        break;
    }
  };

  const handleOnChange = (e: number) => {
    handleWindowStyle(e);
  };

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      setWindowVisible(true);
    };

    const handleMouseUp = (e: MouseEvent | TouchEvent) => {
      setWindowVisible(false);
    };

    const ref = inpRef.current;

    ref?.addEventListener("mousedown", handleMouseDown);
    ref?.addEventListener("mouseup", handleMouseUp);
    ref?.addEventListener("touchstart", handleMouseDown);
    ref?.addEventListener("touchend", handleMouseDown);

    return () => {
      ref?.removeEventListener("mousedown", handleMouseDown);
      ref?.addEventListener("mouseup", handleMouseUp);
      ref?.addEventListener("touchstart", handleMouseDown);
      ref?.addEventListener("touchend", handleMouseDown);
    };
  }, []);

  return (
    <section className="flex justify-center md:pb-20 md:pt-20 pt-4 pb-48 text-white bg-black-200 ">
      <div className="container px-4 pt-4 gap-10 grid md:grid-cols-8 ">
        <div className="md:col-span-5 xl:col-span-6">
          <p className="text-xs opacity-50 pb-1 pl-2">Describe your image</p>
          <textarea
            placeholder="A steampunk teddy bear vending machine"
            className="shadow h-36 overflow-y-hidden w-full bg-zinc-700 bg-opacity-60 border border-zinc-700 rounded-xl leading-relaxed text-sm pl-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-indigo-700 placeholder:opacity-50 pr-12"
          />
          <p className="text-xs opacity-50 pb-1 pt-2 pl-2">Negative Prompt</p>
          <textarea
            placeholder="Describe things to exclude"
            className="shadow h-16 overflow-y-hidden w-full mb-3 bg-zinc-700 bg-opacity-60 border border-zinc-700 rounded-xl leading-relaxed text-sm pl-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-indigo-700 placeholder:opacity-50 pr-12"
          />
          <div className="flex justify-end">
            <CustomButton text="Generate" className="!rounded-full !px-6" />
          </div>
        </div>
        <div className="md:col-span-3 xl:col-span-2 border border-zinc-700 rounded-lg px-5 py-4 pb-6 shadow-md h-fit flex flex-col relative">
          <div className="flex gap-2 items-center">
            <svg
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              className="text-sm opacity-50"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
            </svg>
            <p className="opacity-50 text-xs">Dimensions</p>
          </div>

          <div ref={inpRef} className="mt-4 ">
            <input
              className="w-full cursor-pointer transition-all duration-150 hover:opacity-80 border-none"
              type="range"
              min={1}
              max={9}
              value={rangeValue}
              onChange={(e) => handleOnChange(+e.target.value)}
            />
          </div>

          <div className="flex justify-between py-2 ">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="opacity-40"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
              <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"></path>
            </svg>

            <p
              className={`text-sm text-white ${
                !windowVisible === false && "text-opacity-0"
              }`}
            >
              {windowValue.textW} x {windowValue.textH}
            </p>

            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="opacity-40"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
              <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12V2z"></path>
            </svg>
          </div>
          {windowVisible && (
            <div className="relative flex justify-center rounded-md">
              <div
                className="absolute -top-4 py-2 px-2 border border-white bg-black-50 flex justify-center items-center text-white"
                style={{
                  width: windowValue.width,
                  height: windowValue.height,
                }}
              >
                <p className="text-xs text-opacity-70">
                  {windowValue.textW} x {windowValue.textH}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GenerateComponent;

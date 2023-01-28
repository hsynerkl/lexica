import { useEffect, useRef, useState } from "react";
import CreateImage from "./GeneratePartials/CreateImage";
import ChangeWindow from "./GeneratePartials/ChangeWindow";

const GenerateComponent = () => {
  const [windowValue, setWindowValue] = useState({
    textW: "640",
    textH: "640",
    width: 640 / 6,
    height: 640 / 6,
  });
  const divRef = useRef<HTMLDivElement>(null);
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

    const ref = divRef.current;

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
        <CreateImage />
        <ChangeWindow
          divRef={divRef}
          rangeValue={rangeValue}
          handleOnChange={handleOnChange}
          windowVisible={windowVisible}
          windowValue={windowValue}
        />
      </div>
    </section>
  );
};

export default GenerateComponent;

import { FC } from "react";

type CustomButtonType = {
  text: string;
  className?: string;
  onClick?: () => void;
};

const CustomButton: FC<CustomButtonType> = ({ text, className, onClick }) => {
  return (
    <div
      onClick={onClick ? onClick : () => null}
      className={`${className} w-fit py-2 text-white hover:brightness-110 px-4 text-xs md:text-sm bg-gradient-to-t from-indigo-800 via-indigo-800 to-indigo-600 drop-shadow mr-2 font-medium rounded-md cursor-pointer`}
    >
      {text}
    </div>
  );
};

export default CustomButton;

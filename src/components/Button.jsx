import React from "react";

const Button = ({ bg, color , hoverColor , bgInvert, children, borderColor }) => {
  return (
    <button
      className={`${
        !bgInvert
          ? `${bg ? bg : "bg-secondary"} hover:bg-transparent hover:${
              borderColor ? borderColor : "border-[#939091]"
            }`
          : `bg-transparent ${
              borderColor ? borderColor : "border-[#939091]"
            } hover:bg-buttonHover hover:border-transparent`
      } active:scale-95 border-[1px] transition-all ${
        color ? color : "text-textColor"
      } ${ hoverColor ? hoverColor : 'hover:text-textColor' } px-[24px] py-[10px] rounded-full w-fit`}
    >
      {children}
    </button>
  );
};

export default Button;

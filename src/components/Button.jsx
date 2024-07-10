import React from "react";

const Button = ({ bg, color , hoverColor , bgInvert, children, borderColor , padding , textSize }) => {
  return (
    <button
      className={`${
        !bgInvert
          ? `${bg ? bg : "bg-transparent "} border-transparent hover:bg-transparent ${
              borderColor ? borderColor : "hover:border-[#939091]"
            } border-[1px]`
          : `bg-transparent ${
              borderColor ? borderColor : "border-[#939091]"
            } hover:bg-buttonHover hover:border-transparent border-[1px]`
      } active:scale-95  transition-all ${
        color ? color : "text-textColor"
      } ${ hoverColor ? hoverColor : 'hover:text-textColor' } ${padding ? padding : 'px-[24px] py-[10px]'} ${textSize} rounded-full w-fit`}
    >
      {children}
    </button>
  );
};

export default Button;

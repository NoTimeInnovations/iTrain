import React from "react";

const SubTitle = ({ children , className }) => {
  return (
    <p className={`md:text-xl xl:text-[22px] xl:leading-[28px] h-fit ${className}`}>{children}</p>
  );
};

export default SubTitle;

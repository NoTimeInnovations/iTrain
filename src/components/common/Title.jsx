import React from "react";

const Title = ({ children }) => {
  return (
    <p className="text-lg font-medium md:text-4xl xl:text-[32px] xl:leading-[40px] text-center">
      {children}
    </p>
  );
};

export default Title;

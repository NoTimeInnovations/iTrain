import React from "react";

const Section = ({ children, className , style }) => {
  return <section style={style} className={`${className} min-h-screen`}>{children}</section>;
};

export default Section;

import React from "react";

const Section = ({ children, className , style , id }) => {
  return <section id={id} style={style} className={`${className} min-h-screen`}>{children}</section>;
};

export default Section;

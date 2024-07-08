import React from "react";

const Section = ({ children, className }) => {
  return <section className={`${className} min-h-screen`}>{children}</section>;
};

export default Section;

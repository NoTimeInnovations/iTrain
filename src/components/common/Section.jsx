import React from "react";

const Section = ({ children, className , style , id }) => {
  return <section id={id} style={style} className={`min-h-screen ${className} `}>{children}</section>;
};

export default Section;

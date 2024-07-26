import React from "react";
import Section from "../common/Section";
import Image from "next/image";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import Button from "../common/Button";

const TechnicallySkilled = () => {
  return (
    <Section
      style={{
        backgroundImage:
          "url('/images/ContactUs/student-class-looking-course.jpg')",
      }}
      className={"bg-cover bg-left"}
    >
      {/* backrop and contents  */}
      <div className="min-h-screen w-full bg-primary bg-opacity-80 text-textColor grid place-items-center text-center">
        {/* contents  */}
        <div className="grid gap-10 place-items-center max-w-[80%] md:max-w-[60%] lg:max-w-[100%]">

          {/* title and sub title  */}
          <div className="grid gap-3">
            {/* title  */}
            <Title className={'text-xl'}>Technically skilled and Unused or Under Utilized</Title>

            {/* subtitle  */}
            <SubTitle>
              We can support you if you can support us. Onboard{" "}
              <span className="text-textHoverColor">iTrain</span>
            </SubTitle>
          </div>

          {/* apply now button  */}
          <Button bgInvert={true} bg={"bg-buttonHover"}>
            Apply Now
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default TechnicallySkilled;

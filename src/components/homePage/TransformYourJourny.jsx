import React, { useRef } from "react";
import Section from "../common/Section";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Button from "../common/Button";
import Title from "../common/Title";

const Card = ({ image, title, description }) => {
  return (
    <div className="grid w-full aspect-[4/5] max-h-[400px] max-w-[300px] md:max-h-[500px] md:max-w-[600px] rounded-xl overflow-hidden grid-rows-[1fr,min-content]">
      {/* images  */}
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* contents  */}
      <div className="bg-secondary p-3 grid gap-4">
        {/* title  */}
        <p className="font-medium text-xl lg:text-2xl">{title}</p>

        {/* description  */}
        <p className="text-sm lg:text-lg">{description}</p>
      </div>
    </div>
  );
};

const TransformYourJourny = ({ id }) => {
  const cardDetails = [
    {
      image:
        "/images/Transform Your Journey to Become a Diamond!/1st Image.jpg",
      title: "The Entrance",
      description:
        "Let's discuss about your goals and recommend the perfect course to get you started",
    },
    {
      image:
        "/images/Transform Your Journey to Become a Diamond!/2nd image.jpg",
      title: "Arriving at the Right Destination",
      description:
        "With hands-on experience we make you prepared for your interview. An Open-arm welcome to our team for those who are passionate about teaching. Just start smiling for your better future ahead.",
    },
    {
      image:
        "/images/Transform Your Journey to Become a Diamond!/3rd image.jpg",
      title: "Getting the Ticket",
      description:
        "Master in-demand skills and earn industry-recognized certifications to enhance your career journey.",
    },
  ];

  const swiperRef = useRef();

  return (
    <Section
      id={id}
      className={"bg-primary text-textColor py-[100px] xl:pt-[120px] relative"}
    >
      {/* title  */}
      <Title>
        Transform Your Journey to <br className="md:hidden" /> Become a Diamond!
      </Title>

      {/* swiper  */}
      <div className="w-screen mt-32 px-5 md:px-20 xl:px-[22rem]">
        <div className="relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            navigation={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            modules={[Navigation]}
            className="mySwiper w-full relative rounded-xl"
          >
            {cardDetails.map((card, index) => (
              <SwiperSlide key={`swiper_card_${index}`} className="w-full">
                <div className="flex justify-center">
                  <Card
                    image={card.image}
                    title={card.title}
                    description={card.description}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* swiper buttons  */}
        <div className="w-full flex justify-center gap-10 md:justify-between mt-10">
          {/* prev button  */}
          <div
            className="swipe-btn-prev"
            onClick={() => swiperRef.current.slidePrev()}
          >
            <Button bg={"bg-secondary"} bgInvert={true}>
              Previous
            </Button>
          </div>

          {/* next button  */}
          <div
            className="swipe-btn-next"
            onClick={() => swiperRef.current.slideNext()}
          >
            <Button bg={"bg-buttonHover"}>Next</Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TransformYourJourny;

import React, { useRef } from "react";
import Section from "./Section";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Button from "./Button";

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

const TransformYourJourny = () => {
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
        "With hands-on experience we make you prepared for your interview.         An Open-arm welcome to our team for those who are passionate about teaching. Just start smiling for your better future ahead.",
    },
  ];

  const swiperRef = useRef();

  return (
    <Section
      className={
        "bg-primary text-textColor px-5 md:px-20 py-[100px] xl:pt-[120px] xl:px-[200px] xl:grid xl:place-items-center"
      }
    >
      {/* title  */}
      <p className="text-lg font-medium md:text-4xl xl:text-[32px] xl:leading-[40px] text-center">
        Transform Your Journey to Become a Diamond!
      </p>

      {/* swiper  */}
      <div className="relative mt-32 xl:w-[80%]">
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
          className="mySwiper w-full relative "
        >
          {cardDetails.map((card, index) => (
            <SwiperSlide key={`swiper_card_${index}`} className="w-full">
              <div className="w-full grid place-items-center">
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
      <div className="w-full flex justify-center gap-10 md:justify-between xl:max-w-[80%] mt-10">
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
    </Section>
  );
};

export default TransformYourJourny;

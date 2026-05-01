import Image, { StaticImageData } from "next/image";
import React from "react";
import One from "../../../../../public/start/SliderImageOne.png";
import Two from "../../../../../public/start/SliderImageTwo.png";
import Three from "../../../../../public/start/SliderImageThree.png";
import SliderPage from "../../__atoms/SliderPage/SliderPage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type slides = {
  header: string;
  text: string;
  img: StaticImageData;
};

function SliderStart() {
  const SLIDES: slides[] = [
    {
      header: "Let the right people know you're open to work",
      text: "With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities.",
      img: One,
    },
    {
      header: "Conversations today could lead to opportunity tomorrow",
      text: "Sending messages to people you know is a great way to strengthen relationships as you take the next step in your career.",
      img: Two,
    },
    {
      header: "Stay up to date on your industry",
      text: "From live videos, to stories, to newsletters and more, LinkedIn is full of ways to stay up to date on the latest discussions in your industry",
      img: Three,
    },
  ];

  return (
    <>
      <Swiper
        className="max-w-[1218px] flex items-center justify-center"
        navigation={true}
        modules={[Navigation]}
      >
        {SLIDES.map((slide) => (
          <SwiperSlide key={slide.header}>
            <SliderPage {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default React.memo(SliderStart);

import React from "react";
import ContainerOne from "../../components/ContainerOne";
import WeeklyAd from "../WeeklyAd/WeeklyAd";
import Location from "../../components/Location";
import ImageCarousel from "../Gallery/ImageCarousel";

export default function HomeLayout() {
  const blockOne = {
    title: "Services Block",
    description: "List available services and offers",
    image: "../assets/img/test_image_1.jpeg",
  };

  const blockTwo = {
    title: "Weekly Ad Preview",
    description: "",
    image: "../assets/img/test_image_2.png",
  };

  const blockThree = {
    title: "Gallery Preview block",
    description: "Gallery PlaceHolder",
    image: "../assets/img/test_image_3.jpeg",
  };

  const blockFour = {
    title: "Directions/Location Google Maps Plugin",
    description: "",
    image: "../assets/img/test_image_4.jpeg",
  };

  return (
    <div className="home">
      <div className="section-one">
        <ContainerOne content={blockOne} />
          <WeeklyAd />
      </div>
      <div className="section-two">
        <ImageCarousel />
        <Location />
      </div>
    </div>
  );
}

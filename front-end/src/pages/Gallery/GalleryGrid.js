import React, { useEffect, useState } from "react";
import Carousel from "react-grid-carousel";

export default function GalleryGrid({ content = {} }) {
  
  const [activeImg, setActiveImg] = useState(require("../../assets/img/test_image_2.png"))

  const imageClick = (i) => {

    setActiveImg(imageGrid[i].image)

  }
  
  var pageData = {
    title: "GalleryGrid Loading",
    description: "...",
    image: "../../assets/img/test_image_2.png",
    altText: "sample-text",
  };

  var imageGrid = [
    {
      image: require("../../assets/img/test_image_1.jpeg"),
      text: "sample text",
      altText: "sample-text",
    },
    {
      image: require("../../assets/img/test_image_2.png"),
      text: "sample text",
      altText: "sample-text",
    },
    {
      image: require("../../assets/img/test_image_3.jpeg"),
      text: "sample text",
      altText: "sample-text",
    },
    {
      image: require("../../assets/img/test_image_4.jpeg"),
      text: "sample text",
      altText: "sample-text",
    },
    {
      image: require("../../assets/img/test_image_2.png"),
      text: "sample text",
      altText: "sample-text",
    },
    {
      image: require("../../assets/img/test_image_2.png"),
      text: "sample text",
      altText: "sample-text",
    },
  ];



  return (
    <div className="gallery-grid">
      <img src={activeImg} alt="currrent-image" />
      <Carousel
        cols={5}
        rows={1}
        containerStyle={{ background: "transparent" }}
        loop
      >
        {imageGrid.map((_, i) => (
          <Carousel.Item key={i}>
            <img src={imageGrid[i].image} onClick={() => imageClick(i)} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

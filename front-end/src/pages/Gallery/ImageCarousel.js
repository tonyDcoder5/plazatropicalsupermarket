import React from "react";
import Carousel from "react-grid-carousel";


export default function ImageCarousel({content}) {

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
    <div className="image-carousel container-one">
      <Carousel
        cols={5}
        rows={1}
        gap={1}
        containerStyle={{ background: "transparent" }}
        loop
      >
        {imageGrid.map((_, i) => (
          <Carousel.Item key={i}>
            <img src={imageGrid[i].image} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

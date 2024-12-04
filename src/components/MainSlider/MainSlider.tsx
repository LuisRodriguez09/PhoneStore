import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const MainSlider = () => {
  const images = [
    {
      id: 1,
      src:
        "https://uploads.codesandbox.io/uploads/user/57716f3b-73a3-4deb-9f7d-ab596da2ed66/Pi7x-Main-Banner3.jpg",
      alt: "First Slide",
    },
    {
      id: 2,
      src:
        "https://uploads.codesandbox.io/uploads/user/57716f3b-73a3-4deb-9f7d-ab596da2ed66/-ovb-Main-Banner2.jpg",
      alt: "Second Slide",
    },
    {
      id: 3,
      src:
        "https://uploads.codesandbox.io/uploads/user/57716f3b-73a3-4deb-9f7d-ab596da2ed66/bSPW-Main-Banner1.jpg",
      alt: "Third Slide",
    },
  ];

  return (
    <Carousel controls={true}>
      {images.map((imageSlide) => (
        <Carousel.Item key={imageSlide.id}>
          <Link to="/">
            <img
              src={imageSlide.src}
              className="img-fluid w-100"
              alt={imageSlide.alt}
            />
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MainSlider;

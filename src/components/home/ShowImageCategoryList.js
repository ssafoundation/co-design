import Image from "next/image";
import Slider from "react-slick";

const ShowImageCategoryList = ({ photos }) => {
  console.log(photos);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nav: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
         
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h3>Top Category</h3>
      <Slider {...settings}>
        {photos?.slice(0, 12)?.map((slide, idx) => (
          <div className="feature-slider-image" key={idx}>
            <Image
              src={slide.thumbnailUrl}
              alt={slide.title}
              width={"600"}
              height={"200"}
              loading="lazy"
            />
            <h2>{slide.title.slice(0, 8)}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ShowImageCategoryList;

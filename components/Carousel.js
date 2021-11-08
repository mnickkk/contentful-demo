import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const Carousel = ({ data }) => {
  const {
    itemCollection: { items },
  } = data;
  console.log(items);
  return (
    <Slider {...settings} className="max-h-96">
      {items.map((item) => (
        <div
          className=" w-screen max-h-96"
          style={{
            height: "40rem",
          }}
          key={item.title}
        >
          <img
            className="w-full object-cover object-center max-h-96"
            src={item.image.url}
          ></img>
        </div>
      ))}
    </Slider>
  );
};

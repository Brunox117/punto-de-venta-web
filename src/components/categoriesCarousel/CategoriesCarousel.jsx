import Slider from "react-slick";
import "../../main.css";
import "./carousel.css";

const data = [
  {
    category: "Bebidas",
    img: "src/assets/img/footer/ABARROTITO-150x150.png",
  },
  {
    category: "Abarrotes",
    img: "src/assets/img/footer/ABARROTITO-150x150.png",
  },
  {
    category: "Hogar",
    img: "src/assets/img/footer/ABARROTITO-150x150.png",
  },
  {
    category: "Mascotas",
    img: "src/assets/img/footer/ABARROTITO-150x150.png",
  },
  {
    category: "Farmacia",
    img: "src/assets/img/footer/ABARROTITO-150x150.png",
  },
  {
    category: "Coches",
    img: "src/assets/img/footer/ABARROTITO-150x150.png",
  },
];

export const CategoriesCarousel = () => {
  const settings = {
    className: "center",
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 3000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    puaseOnHover: true
  };
  return (
    <>
      <center>
        <div className="col">
          <h2 className="text-titulo2">NUESTROS</h2>
          <h1 className="text-titulo1">PRODUCTOS</h1>
        </div>
      </center>
      <div className="categories-carousel-container">
        <Slider {...settings}>
          {data.map((category) => (
            <div key={category.category} className="col">
              <img height={200} width={200} src={category.img} />
              <center>
                <h3>{category.category}</h3>
              </center>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

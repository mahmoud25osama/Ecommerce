import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rloader from "../Loader/ScaleLoader";
import useAllCategories from "../../CustomHooks/useAllCategories.jsx";



export default function CategorySlider() {


  var settings = {

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 5,
    arrows: false,
    autoPlay: true,
    autoplaySpeed: 2000,

  };


  const { data, isLoading, isError } = useAllCategories();



  if (isError) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h2 className="text-3xl text-red-500">Error Fetching Categories</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <Rloader />
    );
  }


  return (

    <div className="slider-container">
      <Slider {...settings}  >
        {data.data.data.map((category) => (
          <div key={category._id} className="category-item p-2">
            <img src={category.image} alt={category.name} className="w-full h-36 object-cover" />
            <h3 className="text-center text-xl  mt-2">{category.name}</h3>
          </div>
        ))}

      </Slider></div>
  );
}
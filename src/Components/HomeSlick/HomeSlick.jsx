import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImage1 from '../../assets/img/slider-image-3-BtMvVf4V.jpeg';
import SliderImage2 from '../../assets/img/slider-image-2-Xt88XJy9.jpeg';
import SliderImage3 from '../../assets/img/10607573.jpg';
import SliderImage4 from '../../assets/img/laptop_12.jpg';
import SliderImage5 from '../../assets/img/mark-konig-Tl8mDaue_II-unsplash.jpg';
import SliderImage6 from '../../assets/img/photo-14.jpg';
import SliderImage7 from '../../assets/img/product shop.jpg';



export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay_speed: 2000,
    autoplay: true,
    pause_on_hover: true,
    pause_on_interaction: true,
  };
  return (
    <Slider {...settings} >
      <div className="rounded-lg overflow-hidden">
        <img src={SliderImage1} alt="Slider Image 1" className="w-full h-80" />
      </div>

      <div className="rounded-lg overflow-hidden">
        <img src={SliderImage2} alt="Slider Image 2" className="w-full h-80" />
      </div>

      <div className="rounded-lg overflow-hidden">
        <img src={SliderImage3} alt="Slider Image 3" className="w-full h-80" />
      </div>

      <div className="rounded-lg overflow-hidden">
        <img src={SliderImage4} alt="Slider Image 4" className="w-full h-80" />
      </div>

      <div className="rounded-lg overflow-hidden">
        <img src={SliderImage5} alt="Slider Image 5" className="w-full h-80" />
      </div>

      <div className="rounded-lg overflow-hidden">
        <img src={SliderImage6} alt="Slider Image 6" className="w-full h-80" />
      </div>

      <div className="rounded-lg overflow-hidden">
        <img src={SliderImage7} alt="Slider Image 7" className="w-full h-80" />
      </div>

    </Slider>
  );
}
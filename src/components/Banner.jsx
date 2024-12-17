import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { AiOutlineArrowRight } from 'react-icons/ai';
import travelBanner1 from '../assets/images/travelBanner1.jpg';
import travelBanner2 from '../assets/images/travelBanner2.jpg';
import travelBanner3 from '../assets/images/travelBanner3.jpg';
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate();
  const slides = [
    {
      image: travelBanner1,
      title: 'Your Gateway to Global Travel',
      description: 'Explore new horizons and create unforgettable memories.',
    },
    {
      image: travelBanner2,
      title: 'Explore New Horizons',
      description: 'Navigate your visa process seamlessly.',
    },
    {
      image: travelBanner3,
      title: 'Travel Without Limits',
      description: 'Plan your journey with confidence.',
    },
  ];

  return (
    <div className="relative w-full h-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        loop
        className="h-[300px] md:h-[500px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className='relative'>
            <div className='bg-gradiant-tb from-black/60 to-transparent w-full h-full'>
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-fill"
            />
            </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
                <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">{slide.title}</h2>
                <p className="text-lg lg:text-xl text-white mb-6">{slide.description}</p>
                <button onClick={()=>navigate('/all-visas')} className="btn bg-secondary border-none text-white font-bold px-6 py-3 rounded-lg hover:bg-primary flex items-center gap-2">
                  Get Visa <AiOutlineArrowRight className="text-lg" />
                </button>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

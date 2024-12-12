import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import testipb from '../assets/images/testpb.png'
import testipb2 from '../assets/images/testipb2.png'
import testipg from '../assets/images/testpg.png'
const TestimonialSlider = () => {
  const testimonials = [
    {
      image: testipb, // Replace with the actual image URL
      name: "John Doe",
      position: "Software Engineer",
      quote:
        "Visa Navigator made the process so easy. I got my visa approved in no time!",
    },
    {
      image: testipb2, // Replace with the actual image URL
      name: "Jane Smith",
      position: "Business Owner",
      quote:
        "Their service is top-notch. Highly recommended for anyone seeking visas.",
    },
    {
      image: testipg, // Replace with the actual image URL
      name: "Emily Johnson",
      position: "Student",
      quote:
        "The team was very supportive and guided me through every step of the process.",
    },
  ];

  return (
    <section className="py-16 bg-primary/10 ">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold pb-1 text-secondary">What Our Clients Say</h2>
          <p className="text-4xl text-primary mt-4 font-bold">
            Read the experiences of <br /> our satisfied customers.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="testimonial-slider"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="shadow-lg bg-neutral rounded-lg  p-8 text-center w-fit mx-auto">
                {/* Client Image */}
                <div className="mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 mx-auto rounded-full border-4 border-secondary"
                  />
                </div>
                {/* Client Quote */}
                <p className="text-2xl italic text-textSecondary mb-4">
               &ldquo;{testimonial.quote}&ldquo;
                </p>
                {/* Client Details */}
                <h3 className="text-xl font-semibold text-primary">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-textSecondary">{testimonial.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;

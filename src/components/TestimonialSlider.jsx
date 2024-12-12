import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const TestimonialSlider = () => {
  const testimonials = [
    {
      image: "https://via.placeholder.com/100", // Replace with the actual image URL
      name: "John Doe",
      position: "Software Engineer",
      quote:
        "Visa Navigator made the process so easy. I got my visa approved in no time!",
    },
    {
      image: "https://via.placeholder.com/100", // Replace with the actual image URL
      name: "Jane Smith",
      position: "Business Owner",
      quote:
        "Their service is top-notch. Highly recommended for anyone seeking visas.",
    },
    {
      image: "https://via.placeholder.com/100", // Replace with the actual image URL
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
          <h2 className="text-4xl font-bold text-primary">What Our Clients Say</h2>
          <p className="text-lg text-textSecondary mt-4">
            Read the experiences of our satisfied customers.
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
              <div className="shadow-lg bg-neutral rounded-lg p-8 text-center w-fit mx-auto">
                {/* Client Image */}
                <div className="mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 mx-auto rounded-full border-4 border-primary"
                  />
                </div>
                {/* Client Quote */}
                <p className="text-lg italic text-textSecondary mb-4">
                  "{testimonial.quote}"
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

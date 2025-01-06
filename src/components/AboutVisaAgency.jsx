import { FaCheckCircle, FaBullseye, FaLightbulb } from "react-icons/fa";
import Lottie from "lottie-react";
import airplaneAnimation from "../assets/images/airplaneAnimation.json";
const AboutVisaAgency = () => {
  return (
    <section className="py-10 bg-background px-3 md:px-0">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="relative">
          <div className="w-full h-auto overflow-hidden">
          <Lottie animationData={airplaneAnimation} />
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-xl mb-4 font-semibold text-secondary leading-tight">
            About VisaSphere
          </h2>
          <h2 className="text-4xl font-bold text-textPrimary leading-tight">
          Welcome to immigration Advisory services
          </h2>
          <p className="text-lg text-textSecondary mt-6">
            Our team has been helping individuals achieve their dream of
            exploring the world. Whether you are a tourist, student, or
            professional, our services are designed to meet your specific needs.
          </p>
          {/* Mission and Vision Section */}
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Our Mission */}
              <div className="flex gap-6 items-start">
                <FaBullseye className="text-secondary text-4xl w-[30%]" />
                <div>
                  <h3 className="text-2xl font-semibold text-textPrimary">
                    Our Mission
                  </h3>
                  <p className="text-textSecondary mt-4">
                  To be the leading visa agency recognized globally for our
                exceptional service quality and commitment to customer
                satisfaction.
                  </p>
                </div>
              </div>

              {/* Our Vision */}
              <div className="flex gap-6 items-start">
                <FaLightbulb className="text-secondary text-4xl w-[30%]" />
                <div>
                  <h3 className="text-2xl font-semibold text-textPrimary">
                    Our Vision
                  </h3>
                  <p className="text-textSecondary mt-4">
                  To simplify the visa application process, ensuring a hassle-free
                experience for our clients while meeting their unique travel
                requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            {/* Highlighted Features */}
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <FaCheckCircle className="text-secondary text-2xl" />
                <span className="text-textPrimary font-medium">
                  Professional Visa Consultants
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FaCheckCircle className="text-secondary text-2xl" />
                <span className="text-textPrimary font-medium">
                  Hassle-Free Application Processing
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FaCheckCircle className="text-secondary text-2xl" />
                <span className="text-textPrimary font-medium">
                  Affordable Service Packages
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FaCheckCircle className="text-secondary text-2xl" />
                <span className="text-textPrimary font-medium">
                  24/7 Customer Support
                </span>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <button
            className="btn hover:bg-secondary bg-primary mt-8 hover:text-gray-700 font-semibold px-6 py-3 shadow-lg hover:shadow-xl text-gray-50 transition-all duration-300"
          >
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutVisaAgency;

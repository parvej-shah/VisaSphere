import { FaCheckCircle, FaBullseye, FaLightbulb } from "react-icons/fa";
import aboutVisa from "../assets/images/aboutVisa.png";
const AboutVisaAgency = () => {
  return (
    <section className="py-16 bg-neutral px-3 md:px-0">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="relative">
          <div className="w-full h-auto rounded-lg overflow-hidden shadow-lg">
            <img
              src={aboutVisa}
              alt="About Visa Agency"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-xl mb-4 font-semibold text-secondary leading-tight">
            About VisaSphere
          </h2>
          <h2 className="text-4xl font-bold text-primary leading-tight">
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
                  <h3 className="text-2xl font-semibold text-primary">
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
                  <h3 className="text-2xl font-semibold text-primary">
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
                <FaCheckCircle className="text-primary text-2xl" />
                <span className="text-textPrimary font-medium">
                  Professional Visa Consultants
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FaCheckCircle className="text-primary text-2xl" />
                <span className="text-textPrimary font-medium">
                  Hassle-Free Application Processing
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FaCheckCircle className="text-primary text-2xl" />
                <span className="text-textPrimary font-medium">
                  Affordable Service Packages
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FaCheckCircle className="text-primary text-2xl" />
                <span className="text-textPrimary font-medium">
                  24/7 Customer Support
                </span>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <a
            href="#"
            className="btn bg-secondary hover:bg-primary mt-8 text-white font-semibold px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutVisaAgency;

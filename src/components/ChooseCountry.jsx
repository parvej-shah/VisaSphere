import australia from '../assets/images/australia.png'
import germany from '../assets/images/germany.png'
import England from '../assets/images/England.png'
import canada from '../assets/images/canada.png'
import flagAus from '../assets/images/flagAus.png'
import flagger from '../assets/images/flagger.png'
import flageng from '../assets/images/flageng.png'
import flagcan from '../assets/images/flagcan.png'
import { AiOutlineArrowRight } from 'react-icons/ai'
const ChooseCountry = () => {
  const countries = [
    {
      image: australia,
      flag: flagAus, 
      country_name: "Australia",
      description:
        "Explore visa options for Australia. Skilled worker, study, or family sponsorship made easy.",
    },
    {
      image: germany,
      flag: flagger, 
      country_name: "Germany",
      description:
        "Opportunities in Germany await you. Learn about visas for study, work, or entrepreneurship.",
    },
    {
      image: canada,
      flag: flagcan, 
      country_name: "Canada",
      description:
        "Experience the best of Canada. Find visas for permanent residency, work, or education.",
    },
    {
      image: England,
      flag: flageng, 
      country_name: "England",
      description:
        "Move to England with ease. Options for work, study, or business visas tailored to you.",
    },
  ];

  return (
    <section className="py-16 bg-background px-3 md:px-0">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-xl font-semibold text-secondary">
          Choose Country
          </h2>
          <p className="text-4xl font-bold text-textPrimary mt-4">
          Immigration and citizenship <br />
          Choose your country!
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {countries.map((country, index) => (
            <div
              key={index}
              className="bg-accent group shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Country Image */}
              <div className="relative group">
                <img
                  src={country.image}
                  alt={country.country_name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute -bottom-8 -right-8 w-28 flex justify-center items-center h-28 bg-accent border border-accent rounded-full group-hover:scale-110 group-hover:bg-accent/60  transition-all duration-300">
                <img
                  src={country.flag}
                  alt={`${country.country_name} flag`}
                  className="w-12 h-auto pb-2 pr-2 group-hover:scale-125 transition-all duration-300"
                />
                </div>
              </div>

              {/* Country Details */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-textPrimary">
                  {country.country_name}
                </h3>
                <p className="text-textSecondary mt-4">{country.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-10 flex justify-center items-center'>
        <button className="btn hover:bg-secondary text-gray-50 hover:text-gray-700 border-none font-bold px-6 py-3 rounded-lg bg-primary flex items-center gap-2">
                  View More<AiOutlineArrowRight className="text-lg" />
                </button>
        </div>
      </div>
    </section>
  );
};

export default ChooseCountry;

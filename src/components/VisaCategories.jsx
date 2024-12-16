import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'
import studentVisa from '../assets/images/studentVisa.png'
import faimlyVisa from '../assets/images/familyVisa.png'
import businessVisa from '../assets/images/businessVisa.png'
const VisaCategories = () => {
  const categories = [
    {
      title: "Study Visa",
      description:
        "Pursue your education in top universities worldwide. Discover study visas.",
      image: studentVisa, 
      link: "/study-visa",
    },
    {
      title: "Family Visa",
      description:
        "Plan your vacations and travel the world. Check Family visa options.",
      image: faimlyVisa, 
      link: "/tourist-visa",
    },
    {
      title: "Business Visa",
      description:
        "Grow your business globally with the right visa for entrepreneurs.",
      image: businessVisa, 
      link: "/business-visa",
    },
  ];

  return (
    <section className="py-16 bg-neutral">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold text-secondary">Visa Categories</h2>
          <p className="text-4xl font-bold  text-textPrimary mt-4">
          Outstanding <br className="md:hidden"/>
            <span className="italic text-secondary"> 
             <Typewriter
            words={[' Study', ' Family', ' Business', ' Tourist']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
            </span><br />
          Visa Services.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="card shadow-xl border rounded-lg overflow-hidden bg-accent"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-textPrimaryText">
                  {category.title}
                </h3 >
                <p className="text-sm text-textSecondary mt-2">
                  {category.description}
                </p>
                <Link
                  to={category.link}
                  className="flex items-center gap-2 text-secondary mt-4 font-semibold hover:underline"
                >
                  Learn More <FaRegArrowAltCircleRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaCategories;

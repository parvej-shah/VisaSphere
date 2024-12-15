import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllVisas = () => {
  const navigate = useNavigate();
  const [allVisas, setAllVisas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-visas")
      .then((res) => res.json())
      .then((data) => setAllVisas(data));
  }, []);

  const handleSeeDetails = (id) => {
    navigate(`/visa-details/${id}`);
  };

  return (
    <section className="bg-accent py-10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl font-semibold text-primary text-center mb-8">
          All Visas
        </h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allVisas.map((visa) => (
            <div
              key={visa.id}
              className="bg-neutral group rounded-lg shadow-lg p-4 hover:shadow-xl transition-all hover:scale-105 duration-300"
            >
              {/* Country Image */}
              <img
                src={visa.countryImage}
                alt={visa.countryName}
                className="w-full h-40 object-cover rounded-md group-hover:scale-105 duration-300 transition-all"
              />

              {/* Visa Information */}
              <h3 className="text-lg font-bold text-textPrimary mt-4">
                {visa.countryName}
              </h3>
              <p className="text-sm text-textSecondary">
                Visa Type:{" "}
                <span className="text-textPrimary">{visa.visaType}</span>
              </p>
              <p className="text-sm text-textSecondary">
                Processing Time:{" "}
                <span className="text-textPrimary">{visa.processingTime}</span>
              </p>
              <p className="text-sm text-textSecondary">
                Fee: <span className="text-textPrimary">${visa.fee}</span>
              </p>
              <p className="text-sm text-textSecondary">
                Validity:{" "}
                <span className="text-textPrimary">{visa.validity}</span>
              </p>
              <p className="text-sm text-textSecondary">
                Application Method:{" "}
                <span className="text-textPrimary">
                  {visa.applicationMethod}
                </span>
              </p>

              {/* See Details Button */}
              <button
                onClick={() => handleSeeDetails(visa.id)}
                className="mt-4 bg-secondary text-neutral px-4 py-2 rounded-md hover:bg-primary transition-all"
              >
                See Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllVisas;

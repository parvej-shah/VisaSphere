import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingClip from "../components/LoadingClip";
import { FaFilter, FaLocationArrow } from 'react-icons/fa6';
import { FcCalendar } from 'react-icons/fc';
import { RiHourglassFill } from 'react-icons/ri';
const AllVisas = () => {
  const navigate = useNavigate();
  const [nonFilteredVisas, setNonFilteredVisas] = useState([]);
  const [allVisas, setAllVisas] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://visasphere-server.vercel.app/all-visas")
      .then((res) => res.json())
      .then((data) => {
        setAllVisas(data);
        setNonFilteredVisas(data);
        setLoading(false);
      });
  }, []);

  const handleFiltering = (filterBy) => {
    if (filterBy == "all-visas") {
      setAllVisas(nonFilteredVisas);
    } else {
      const filteredVisas = nonFilteredVisas.filter(
        (visa) => visa.visaType == filterBy
      );
      setAllVisas(filteredVisas);
    }
  };
  return (
    <section className="bg-background pb-10 pt-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
        {/* Section Header */}
        <h2 className="text-3xl font-semibold text-textPrimary text-center">
          All Visas
        </h2>
          <div className="dropdown w-[50%] md:w-[30%]">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-secondary btn-sm border-none text-gray-700 hover:bg-primary hover:text-gray-50 m-1 w-full"
            >
              <FaFilter /> Filter By 
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-accent rounded-box z-[10] w-full p-3 space-y-2 shadow"
            >
              <li>
                <button
                  onClick={() => handleFiltering("all-visas")}
                  className="btn btn-sm  bg-primary hover:bg-primary/80 text-white border-none"
                >
                  All Visa
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFiltering("Tourist visa")}
                  className="btn btn-sm bg-primary hover:bg-primary/80 text-white border-none"
                >
                  Tourist Visa
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFiltering("Business visa")}
                  className="btn btn-sm bg-primary hover:bg-primary/80 text-white border-none"
                >
                  Business Visa
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFiltering("Family visa")}
                  className="btn btn-sm bg-primary hover:bg-primary/80 text-white border-none"
                >
                  Family Visa
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFiltering("Student visa")}
                  className="btn btn-sm bg-primary hover:bg-primary/80 text-white border-none"
                >
                  Student Visa
                </button>
              </li>
            </ul>
          </div>
        </div>
        {isLoading ? (
          <LoadingClip />
        ) : allVisas.length === 0 ? (
          <p className="text-xl text-secondary text-center mb-2">
            No Visa Found
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allVisas.map((visa) => (
              <div
                key={visa._id}
                className="bg-accent relative group rounded-sm shadow-lg p-4 hover:shadow-xl transition-all hover:scale-105 duration-300 overflow-hidden space-y-1"
              >
                {/* Country Image */}
                <img
                  src={visa.countryImage}
                  alt={visa.countryName}
                  className="w-32 rounded-bl-full absolute top-0 right-0 h-32 object-cover rounded-md group-hover:scale-110 duration-300 transition-all"
                />

                {/* Visa Information */}
                <h3 className="text-lg font-bold text-textPrimary mt-4">
                  {visa.visaType}
                </h3>
                <p className="text-sm text-textSecondary">
                  <span className="text-textPrimary">
                    {visa.countryName} - ${visa.fee}
                  </span>
                </p>
                <p className="text-sm text-textSecondary flex items-center gap-1">
                  <FcCalendar className="text-lg" />{" "}
                  <span className="text-textPrimary">{visa.validity}</span>
                </p>
                <p className="text-lg flex items-center gap-1 text-textSecondary">
                  <RiHourglassFill />
                  <span className="text-textPrimary text-sm">
                    {visa.processingTime}
                  </span>
                </p>
                <p className=" text-textSecondary text-lg flex items-center gap-1 ">
                  <FaLocationArrow />
                  <span className="text-textPrimary text-sm">
                    {visa.applicationMethod}
                  </span>
                </p>

                {/* See Details Button */}
                <button
                  onClick={() => navigate(`/visa-details/${visa._id}`)}
                  className="mt-4 hover:bg-secondary hover:text-gray-700 px-4 py-2 rounded-md bg-primary text-gray-50 duration-300 transition-all"
                >
                  See Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllVisas;

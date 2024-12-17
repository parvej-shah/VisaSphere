import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* const latestVisas = [
  {
    id: 1,
    country: "Canada",
    countryImage: "https://i.ibb.co/YWY5qsm/canada.png",
    visaType: "Tourist Visa",
    processingTime: "15 days",
    fee: "$150",
    validity: "6 months",
    applicationMethod: "Online or Embassy",
  },
  {
    id: 2,
    country: "United Kingdom",
    countryImage: "https://i.ibb.co/Z8RbZyf/uk.png",
    visaType: "Student Visa",
    processingTime: "30 days",
    fee: "$350",
    validity: "4 years",
    applicationMethod: "Online or Consulate",
  },
  {
    id: 3,
    country: "Australia",
    countryImage: "https://i.ibb.co/JFVG5n5/australia.png",
    visaType: "Official Visa",
    processingTime: "20 days",
    fee: "$200",
    validity: "1 year",
    applicationMethod: "Embassy Submission",
  },
  {
    id: 4,
    country: "United States",
    countryImage: "https://i.ibb.co/Wc2y4WJ/usa.png",
    visaType: "Tourist Visa",
    processingTime: "25 days",
    fee: "$160",
    validity: "10 years",
    applicationMethod: "Online & Interview",
  },
  {
    id: 5,
    country: "Japan",
    countryImage: "https://i.ibb.co/3m3M2VR/japan.png",
    visaType: "Student Visa",
    processingTime: "40 days",
    fee: "$250",
    validity: "3 years",
    applicationMethod: "Embassy Submission",
  },
  {
    id: 6,
    country: "Singapore",
    countryImage: "https://i.ibb.co/Y07yCGQ/singapore.png",
    visaType: "Tourist Visa",
    processingTime: "7 days",
    fee: "$100",
    validity: "3 months",
    applicationMethod: "Online Submission",
  },
]; */

const LatestVisas = () => {
  const navigate = useNavigate();
  const [latestVisas,setLatestVisas] = useState([]);
  useEffect(()=>{
    fetch('https://visasphere-server.vercel.app/visas')
    .then(res=>res.json())
    .then(data=>setLatestVisas(data))
  },[])




  return (
    <section className="bg-neutral py-10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl font-semibold text-textPrimary text-center mb-8">
          Latest Visas
        </h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestVisas.map((visa) => (
            <div
              key={visa._id}
              className="bg-accent group rounded-lg shadow-lg p-4 hover:shadow-xl transition-all hover:scale-105 duration-300"
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
                Visa Type: <span className="text-textPrimary">{visa.visaType}</span>
              </p>
              <p className="text-sm text-textSecondary">
                Processing Time:{" "}
                <span className="text-textPrimary">{visa.processingTime}</span>
              </p>
              <p className="text-sm text-textSecondary">
                Fee: <span className="text-textPrimary">${visa.fee}</span>
              </p>
              <p className="text-sm text-textSecondary">
                Validity: <span className="text-textPrimary">{visa.validity}</span>
              </p>
              <p className="text-sm text-textSecondary">
                Application Method:{" "}
                <span className="text-textPrimary">{visa.applicationMethod}</span>
              </p>

              {/* See Details Button */}
              <button
                onClick={() => navigate(`/visa-details/${visa._id}`)}
                className="mt-4 bg-secondary text-white px-4 py-2 rounded-md hover:bg-primary transition-all"
              >
                See Details
              </button>
            </div>
          ))}
        </div>

        {/* See All Visas Button */}
        <div className="text-center mt-8">
          <button
            onClick={()=> navigate("/all-visas")}
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition-all"
          >
            See All Visas
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestVisas;

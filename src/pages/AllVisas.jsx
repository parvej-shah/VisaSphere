import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllVisas = () => {
  const navigate = useNavigate();
  const [nonFilteredVisas, setNonFilteredVisas] = useState([]);
  const [allVisas, setAllVisas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-visas")
      .then((res) => res.json())
      .then((data) => {
        setAllVisas(data);
        setNonFilteredVisas(data);
      });
  }, []);

  const handleSeeDetails = (id) => {
    navigate(`/visa-details/${id}`);
  };
const handleFiltering = (filterBy)=>{
  if(filterBy=='all-visas'){
    setAllVisas(nonFilteredVisas);
  }
  else{
    const filteredVisas = nonFilteredVisas.filter(visa=>visa.visaType==filterBy);
    setAllVisas(filteredVisas);
  }
}
  return (
    <section className="bg-neutral py-10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl font-semibold text-textPrimary text-center mb-4">
          All Visas
        </h2>
        <div className="flex items-center justify-center mb-2">
        <div className="dropdown w-[30%]">
          <div tabIndex={0} role="button" className="btn bg-secondary border-none text-neutral hover:bg-red-600  m-1 w-full">
            Filter By 
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-primary/30 rounded-box z-[10] w-full p-3 space-y-2 shadow"
          >
            <li>
              <button onClick={()=>handleFiltering('all-visas')} className="btn bg-primary hover:bg-primary/80 text-neutral border-none">All Visa</button>
            </li>
            <li>
              <button onClick={()=>handleFiltering('Tourist visa')} className="btn bg-primary hover:bg-primary/80 text-neutral border-none">Tourist Visa</button>
            </li>
            <li>
              <button onClick={()=>handleFiltering('Business visa')} className="btn bg-primary hover:bg-primary/80 text-neutral border-none">Business Visa</button>
            </li>
            <li>
              <button onClick={()=>handleFiltering('Family visa')} className="btn bg-primary hover:bg-primary/80 text-neutral border-none">Family Visa</button>
            </li>
            <li>
              <button onClick={()=>handleFiltering('Student visa')} className="btn bg-primary hover:bg-primary/80 text-neutral border-none">Student Visa</button>
            </li>
          </ul>
        </div>
        </div>
        {allVisas.length === 0 && (
          <p className="text-xl text-secondary text-center mb-2">
            No Visa Found
          </p>
        )}
        
        
        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allVisas.map((visa) => (
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

              <button
                onClick={() => handleSeeDetails(visa._id)}
                className="mt-4 bg-secondary text-neutral text-semibold px-4 py-2 rounded-md hover:bg-primary transition-all"
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

import { useEffect, useState } from "react";
import { useAuth } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const MyVisaApplications = () => {
  const [applications, setApplications] = useState([]);
  const { user } = useAuth(); 

  useEffect(() => {
    fetch(`http://localhost:5000/applications/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setApplications(data))
      .catch((err) => console.error(err));
    }, [user]);

  
  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to cancel this visa application?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#E63946",
      cancelButtonColor: "#002147", 
      confirmButtonText: "Yes, Cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/applications/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.deletedCount>0){
                Swal.fire("Cancelled!", "Your application has been cancelled.", "success");
                setApplications(applications.filter((app) => app._id !== id));
            }
          })
          .catch((err) => console.error(err));
      }
    });
  };

  return (
    <section className="min-h-screen py-10 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">
          My Visa Applications
        </h2>

        {applications.length === 0 ? (
          <p className="text-center text-textPrimary">
            You haven&apos;t applied for any visas yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app) => (
              <div
                key={app._id}
                className="bg-neutral shadow-lg rounded-lg overflow-hidden"
              >
                {/* Visa Image */}
                <img
                  src={app.countryImage}
                  alt={app.country}
                  className="w-full h-40 object-cover"
                />

                {/* Visa Details */}
                <div className="p-4 text-textPrimary">
                  <h3 className="text-xl font-semibold mb-2">
                    {app.countryName} - {app.visaType}
                  </h3>
                  <p>
                    <strong>Processing Time:</strong> {app.processingTime}
                  </p>
                  <p>
                    <strong>Fee:</strong> ${app.fee}
                  </p>
                  <p>
                    <strong>Validity:</strong> {app.validity}
                  </p>
                  <p>
                    <strong>Application Method:</strong> {app.applicationMethod}
                  </p>
                  <p>
                    <strong>Applied Date:</strong> {app.appliedDate}
                  </p>
                  <p>
                    <strong>Applicant Name:</strong> {app.firstName} {app.lastName}
                  </p>
                  <p>
                    <strong>Email:</strong> {app.applicantsEmail}
                  </p>

                  {/* Cancel Button */}
                  <div className="mt-4">
                    <button
                      onClick={() => handleCancel(app._id)}
                      className="bg-secondary text-neutral px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyVisaApplications;

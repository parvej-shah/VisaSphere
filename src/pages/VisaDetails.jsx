import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2"; 

const VisaDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();
  const currentDate = new Date().toISOString().split("T")[0];
  const visa = useLoaderData();
  const handleApply = (e) => {
    e.preventDefault();
    const applicationData = {
      visaId: visa?._id,
      countryName: visa?.countryName,
      countryImage: visa?.countryImage,
      visaType: visa?.visaType,
      processingTime: visa?.processingTime,
      fee: visa?.fee,
      validity: visa?.validity,
      applicationMethod: visa?.applicationMethod,
      appliedDate: currentDate,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      applicantsEmail: user?.email,
    };
    // Submit application data to the backend
    fetch("https://visasphere-server.vercel.app/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(applicationData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire(
            "Success!",
            "Your visa application has been submitted!",
            "success"
          );
          navigate("/my-applications");
        } else {
          Swal.fire(
            "Error!",
            "Something went wrong. Please try again later.",
            "error"
          );
        }
      });

    setIsModalOpen(false);
  };
  return (
    <section className="bg-accent min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Visa Details */}
        <div className="bg-background rounded-lg shadow-lg p-6 mx-auto max-w-4xl">
          <img
            src={visa?.countryImage}
            alt={visa.countryName}
            className="w-full h-60 object-cover rounded-md mb-6"
          />
          <h2 className="text-3xl font-bold text-textPrimary mb-4">
            {visa.countryName}{" "}
            <span className="text-xl">- {visa.visaType}</span>
          </h2>
          <p className="text-textPrimary mb-2">
            <strong>Processing Time:</strong> {visa.processingTime}
          </p>
          <p className="text-textPrimary mb-2">
            <strong>Fee:</strong> ${visa.fee}
          </p>
          <p className="text-textPrimary mb-2">
            <strong>Validity:</strong> {visa.validity}
          </p>
          <p className="text-textPrimary mb-2">
            <strong>Age Restriction:</strong> {visa.ageRestriction}+
          </p>
          <p className="text-textPrimary mb-2">
            <strong>Application Method:</strong> {visa.applicationMethod}
          </p>
          <p className="text-textSecondary mb-4">{visa.description}</p>
          <div className="mb-4">
            <strong>Required Documents:</strong>
            <ul className="list-disc ml-6 text-textSecondary">
              {visa.documents?.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          </div>

          {/* Apply for Visa Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 bg-secondary text-white px-6 py-3 rounded-md hover:bg-primary transition-all"
          >
            Apply for the Visa
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-accent p-6 rounded-lg shadow-lg w-full max-w-md">
              <h3 className="text-2xl font-semibold text-textPrimary mb-4">
                Apply for {visa.countryName} Visa
              </h3>
              <form onSubmit={handleApply}>
                <label className="block mb-2 text-sm">
                  Email:
                  <input
                    type="email"
                    value={user?.email || ""}
                    readOnly
                    className="w-full border px-3 py-2 rounded mt-1"
                  />
                </label>
                <label className="block mb-2 text-sm">
                  First Name:
                  <input
                    type="text"
                    name="firstName"
                    className="w-full border px-3 py-2 rounded mt-1"
                    required
                  />
                </label>
                <label className="block mb-2 text-sm">
                  Last Name:
                  <input
                    type="text"
                    name="lastName"
                    className="w-full border px-3 py-2 rounded mt-1"
                    required
                  />
                </label>
                <label className="block mb-2 text-sm">
                  Applied Date:
                  <input
                    type="date"
                    value={currentDate}
                    readOnly
                    className="w-full border px-3 py-2 rounded mt-1"
                  />
                </label>
                <label className="block mb-4 text-sm">
                  Fee:
                  <input
                    type="text"
                    value={`$${visa.fee}`}
                    readOnly
                    className="w-full border px-3 py-2 rounded mt-1"
                  />
                </label>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-primary text-white px-4 py-2 rounded"
                  >
                    Apply
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VisaDetails;

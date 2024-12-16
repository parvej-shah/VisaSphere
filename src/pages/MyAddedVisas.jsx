import { useEffect, useState } from "react";
import { useAuth } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Modal from "react-modal";

const MyAddedVisas = () => {
  const [visas, setVisas] = useState([]); 
  const [selectedVisa, setSelectedVisa] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {
    fetch(`http://localhost:5000/visas/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setVisas(data))
  }, [user]);

  // Handle Delete Action
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/visas/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.deletedCount>0){
                Swal.fire("Deleted!", "Your visa has been deleted.", "success");
                setVisas(visas.filter((visa) => visa._id !== id));
            }
          })
      }
    });
  };

  // Open Modal for Update
  const openModal = (visa) => {
    setSelectedVisa(visa);
    setIsModalOpen(true);
    reset(visa);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVisa(null);
  };

  // Handle Update Submission
  const onSubmit = (updatedData) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update the visa details?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/visas/${selectedVisa._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedData),
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.acknowledged){
              Swal.fire("Updated!", "Visa details have been updated.", "success");
              setIsModalOpen(false);
              setVisas(
                visas.map((visa) =>
                  visa._id === selectedVisa._id
                    ? { ...visa, ...updatedData }
                    : visa
                )
              );
            }
          })
      }
    });
  };

  return (
    <section className="min-h-screen py-10 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-textPrimary mb-8">
          My Added Visas
        </h2>

        {visas.length === 0 ? (
          <p className="text-center">No visas added yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visas.map((visa) => (
              <div
                key={visa._id}
                className="bg-neutral text-textPrimary rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={visa.countryImage}
                  alt={visa.countryName}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">
                    {visa.countryName} - {visa.visaType}
                  </h3>
                  <p>
                    <strong>Processing Time:</strong> {visa.processingTime}
                  </p>
                  <p>
                    <strong>Fee:</strong> ${visa.fee}
                  </p>
                  <p>
                    <strong>Validity:</strong> {visa.validity}
                  </p>
                  <p>
                    <strong>Method:</strong> {visa.applicationMethod}
                  </p>

                  <div className="mt-4 flex justify-between">
                    <button
                      onClick={() => openModal(visa)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(visa._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* React Modal for Update */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          contentLabel="Update Visa Details"
          className="bg-accent p-3 rounded-lg shadow-lg w-full max-w-4xl mx-auto outline-none"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <h3 className="text-2xl font-bold mb-2 text-textPrimary">
            Update Visa Details
          </h3>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-2"
          >
            {/* Country Image */}
            <div>
              <label className="block mb-1 font-medium">
                Country Image URL:
                <input
                  {...register("countryImage")}
                  type="text"
                  placeholder="Enter image URL"
                  className="w-full border rounded px-3 py-2 mt-1"
                  required
                />
              </label>
            </div>

            {/* Country Name */}
            <div>
              <label className="block mb-1 font-medium">
                Country Name:
                <input
                  {...register("countryName")}
                  type="text"
                  className="w-full border rounded px-3 py-2 mt-1"
                  required
                />
              </label>
            </div>

            {/* Visa Type */}
            <div className="hidden md:block">
              <label className="block mb-1 font-medium">
                Visa Type:
                <select
                  {...register("visaType")}
                  className="w-full border rounded px-3 py-2 mt-1"
                  required
                >
                  <option value="Tourist visa">Tourist Visa</option>
                  <option value="Student visa">Student Visa</option>
                  <option value="Business visa">Business Visa</option>
                  <option value="Family visa">Family Visa</option>
                </select>
              </label>
            </div>

            {/* Processing Time */}
            <div>
              <label className="block mb-1 font-medium">
                Processing Time:
                <input
                  {...register("processingTime")}
                  type="text"
                  placeholder="e.g., 7-10 business days"
                  className="w-full border rounded px-3 py-2 mt-1"
                  required
                />
              </label>
            </div>

            {/* Required Documents */}
            <div  className="md:col-span-2 md:block hidden">
              <label className="block mb-1 font-medium">
                Required Documents:
              </label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center">
                  <input
                    {...register("documents")}
                    type="checkbox"
                    value="Valid passport"
                    className="mr-2"
                  />
                  Valid Passport
                </label>
                <label className="flex items-center">
                  <input
                    {...register("documents")}
                    type="checkbox"
                    value="Visa application form"
                    className="mr-2"
                  />
                  Visa Application Form
                </label>
                <label className="flex items-center">
                  <input
                    {...register("documents")}
                    type="checkbox"
                    value="Recent passport-sized photograph"
                    className="mr-2"
                  />
                  Recent Passport-Sized Photograph
                </label>
              </div>
            </div>

            {/* Description */}
            <div className="md:col-span-2 md:block hidden">
              <label className="block mb-1 font-medium">
                Description:
                <input
                  {...register("description")}
                  rows="3"
                  placeholder="Provide visa details or special instructions."
                  className="w-full border rounded px-3 py-2 mt-1"
                  type="text"
                ></input>
              </label>
            </div>

            {/* Age Restriction */}
            <div>
              <label className="block mb-1 font-medium">
                Age Restriction:
                <input
                  {...register("ageRestriction")}
                  type="number"
                  placeholder="Enter minimum age (if any)"
                  className="w-full border rounded px-3 py-2 mt-1"
                />
              </label>
            </div>

            {/* Fee */}
            <div>
              <label className="block mb-1 font-medium">
                Fee (USD):
                <input
                  {...register("fee")}
                  type="number"
                  placeholder="e.g., 100"
                  className="w-full border rounded px-3 py-2 mt-1"
                  required
                />
              </label>
            </div>

            {/* Validity */}
            <div className="hidden md:block">
              <label className="block mb-1 font-medium">
                Validity:
                <input
                  {...register("validity")}
                  type="text"
                  placeholder="e.g., 1 year, 6 months"
                  className="w-full border rounded px-3 py-2 mt-1"
                  required
                />
              </label>
            </div>

            {/* Application Method */}
            <div className="hidden md:block">
              <label className="block mb-1 font-medium">
                Application Method:
                <input
                  {...register("applicationMethod")}
                  type="text"
                  placeholder="e.g., Online, In-Person"
                  className="w-full border rounded px-3 py-2 mt-1"
                  required
                />
              </label>
            </div>

            {/* Buttons */}
            <div className="md:col-span-2 flex justify-end gap-4 mt-4">
              <button
                type="button"
                onClick={closeModal}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Update
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </section>
  );
};

export default MyAddedVisas;

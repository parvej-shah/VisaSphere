import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const AddVisaForm = () => {
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    // Simulating API call to store data
    try {
      console.log("Visa Data Submitted:", data);

      // Show success message
      Swal.fire({
        title: "Success!",
        text: "Visa added successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });

      // Reset the form
      reset();
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg my-10">
      <h2 className="text-2xl font-bold text-primary text-center mb-6">Add Visa</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Country Image */}
        <div>
          <label className="block text-gray-700 mb-2">Country Image URL</label>
          <input
            type="url"
            placeholder="Image link from imgbb"
            className="input input-bordered w-full"
            {...register("countryImage", { required: "Country image URL is required" })}
          />
          {errors.countryImage && <p className="text-red-500 text-sm">{errors.countryImage.message}</p>}
        </div>

        {/* Country Name */}
        <div>
          <label className="block text-gray-700 mb-2">Country Name</label>
          <input
            type="text"
            placeholder="Enter country name"
            className="input input-bordered w-full"
            {...register("countryName", { required: "Country name is required" })}
          />
          {errors.countryName && <p className="text-red-500 text-sm">{errors.countryName.message}</p>}
        </div>

        {/* Visa Type */}
        <div>
          <label className="block text-gray-700 mb-2">Visa Type</label>
          <select
            className="input input-bordered w-full"
            {...register("visaType", { required: "Visa type is required" })}
          >
            <option value="">Select Visa Type</option>
            <option value="Tourist visa">Tourist Visa</option>
            <option value="Student visa">Student Visa</option>
            <option value="Official visa">Official Visa</option>
          </select>
          {errors.visaType && <p className="text-red-500 text-sm">{errors.visaType.message}</p>}
        </div>

        {/* Processing Time */}
        <div>
          <label className="block text-gray-700 mb-2">Processing Time</label>
          <input
            type="text"
            placeholder="e.g., 7-14 days"
            className="input input-bordered w-full"
            {...register("processingTime", { required: "Processing time is required" })}
          />
          {errors.processingTime && <p className="text-red-500 text-sm">{errors.processingTime.message}</p>}
        </div>

        {/* Required Documents */}
        <div>
          <label className="block text-gray-700 mb-2">Required Documents</label>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" value="Valid passport" {...register("documents")} />
              <span>Valid Passport</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" value="Visa application form" {...register("documents")} />
              <span>Visa Application Form</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" value="Recent passport-sized photograph" {...register("documents")} />
              <span>Recent Passport-Sized Photograph</span>
            </label>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            rows="3"
            placeholder="Describe the visa"
            className="textarea textarea-bordered w-full"
            {...register("description", { required: "Description is required" })}
          ></textarea>
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>

        {/* Age Restriction */}
        <div>
          <label className="block text-gray-700 mb-2">Age Restriction</label>
          <input
            type="number"
            placeholder="Minimum age (if any)"
            className="input input-bordered w-full"
            {...register("ageRestriction")}
          />
        </div>

        {/* Fee */}
        <div>
          <label className="block text-gray-700 mb-2">Fee</label>
          <input
            type="number"
            placeholder="Enter visa fee"
            className="input input-bordered w-full"
            {...register("fee", { required: "Fee is required" })}
          />
          {errors.fee && <p className="text-red-500 text-sm">{errors.fee.message}</p>}
        </div>

        {/* Validity */}
        <div>
          <label className="block text-gray-700 mb-2">Validity</label>
          <input
            type="text"
            placeholder="e.g., 1 year, 6 months"
            className="input input-bordered w-full"
            {...register("validity", { required: "Validity is required" })}
          />
        </div>

        {/* Application Method */}
        <div>
          <label className="block text-gray-700 mb-2">Application Method</label>
          <input
            type="text"
            placeholder="e.g., Online, In-person"
            className="input input-bordered w-full"
            {...register("applicationMethod", { required: "Application method is required" })}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn bg-primary text-white w-full hover:bg-primary/80">
          Add Visa
        </button>
      </form>
    </div>
  );
};

export default AddVisaForm;

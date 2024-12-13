import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseConfig"; */
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { name, email, photoURL, password } = data;
    console.log(data);
   /*  try {
      // Simulate successful registration (use your own registration logic)
      console.log("User Registered:", { name, email, photoURL, password });
      toast.success("Registration Successful!");
      navigate("/"); // Redirect to home page
    } catch (error) {
      toast.error("Registration Failed: " + error.message);
    } */
  };

  const handleGoogleLogin = async () => {
    /* const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("Google Login Successful!");
      navigate("/");
    } catch (error) {
      toast.error("Google Login Failed: " + error.message);
    } */
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <Fade direction="up" triggerOnce>
          <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        </Fade>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Photo URL Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Photo URL</label>
            <input
              type="url"
              placeholder="Enter your photo URL"
              className="input input-bordered w-full"
              {...register("photoURL", { required: "Photo URL is required" })}
            />
            {errors.photoURL && <p className="text-red-500 text-sm">{errors.photoURL.message}</p>}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              {...register("password", {
                required: "Password is required",
                validate: {
                  hasUpperCase: (value) => /[A-Z]/.test(value) || "Must include an uppercase letter",
                  hasLowerCase: (value) => /[a-z]/.test(value) || "Must include a lowercase letter",
                  minLength: (value) => value.length >= 6 || "Must be at least 6 characters",
                },
              })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="btn btn-primary w-full shadow-lg hover:shadow-xl">
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="divider my-6">OR</div>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline btn-secondary w-full flex items-center gap-2 justify-center shadow-lg hover:shadow-xl">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            alt="Google Logo"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>

        {/* Link to Login */}
        <p className="text-center mt-4 text-gray-600">
          Already have an account?          
          <a href="/login" className="text-blue-500 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseConfig"; */
import { Fade } from "react-awesome-reveal";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useAuth } from "../../AuthProvider/AuthProvider";
import { useState } from "react";
import { auth } from "../../../firebase.init";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const LoginForm = () => {
    const {loginUser} = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { email, password } = data;
    console.log(data);

    loginUser(email,password)
    // eslint-disable-next-line no-unused-vars
    .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
        toast.success("Login Successful!");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Login Failed: " + error.message);
      });
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("Google Login Successful!");
      navigate("/");
    } catch (error) {
      toast.error("Google Login Failed: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-accent py-20">
      <div className="bg-neutral p-8 rounded-lg shadow-lg w-full max-w-md">
        <Fade direction="down" triggerOnce>
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        </Fade>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-textPrimary mb-2">Email</label>
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

          {/* Password Field */}
          <div className="mb-4 relative">
            <label className="block text-textPrimary mb-2">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="input input-bordered w-full pr-10"
              {...register("password", {
                required: "Password is required",
              })}
            />
            <span
              className="absolute right-3 top-12 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </span>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn bg-primary hover:bg-primary/80 text-white w-full shadow-lg hover:shadow-xl">
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="divider my-6">OR</div>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline text-textPrimary w-full flex items-center gap-2 justify-center shadow-lg hover:shadow-xl">
          <FcGoogle className="text-3xl" />
          Sign in with Google
        </button>

        {/* Link to Register */}
        <p className="text-center mt-4 text-textPrimary">
          Don&apos;t have an account?
          <Link to={"/registration"} className="text-blue-500 hover:underline ml-1">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

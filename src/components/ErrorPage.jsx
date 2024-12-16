import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <Fade direction="up" triggerOnce>
        <div className="text-center">
          {/* Error Code */}
          <h1 className="text-9xl font-extrabold text-textPrimary drop-shadow-lg mb-4">404</h1>
          
          {/* Error Message */}
          <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Oops! The page you&apos;re looking for doesn&apos;t exist.
          </p>

          {/* Subtext */}
          <p className="text-gray-500 mb-8">
            It seems we can&apos;t find the page you&apos;re looking for. Try going back to the homepage.
          </p>

          {/* Back to Homepage Button */}
          <Link to="/" className="btn bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/80 shadow-lg transition duration-300">
            Go Back Home
          </Link>
        </div>
      </Fade>
    </div>
  );
};

export default ErrorPage;

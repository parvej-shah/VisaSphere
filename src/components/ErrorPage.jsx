import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import gif404 from "../assets/images/404.gif";
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <Fade direction="up" triggerOnce>
        <div className="text-center">
          
          <img src={gif404} alt="" />

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

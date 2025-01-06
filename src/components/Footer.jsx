import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary/10 to-transparent text-textPrimary">
      <div className="container mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">VisaSphere</h2>
          <p className="mb-4 text-sm">
            Your one-stop solution for immigration and visa consulting services. Helping you achieve your dreams to explore, study, and work abroad.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-3 bg-secondary rounded-full text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="p-3 bg-secondary rounded-full text-white">
              <FaTwitter />
            </a>
            <a href="#" className="p-3 bg-secondary rounded-full text-white">
              <FaInstagram />
            </a>
            <a href="#" className="p-3 bg-secondary rounded-full text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-secondary">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-secondary">
                Work Visa
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary">
                Study Visa
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary">
                Business Visa
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-secondary">
                Tourist Visa
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <p className="text-sm">
            <strong>Address:</strong> 123 Immigration St, Gulistan City,Bangladesh
          </p>
          <p className="text-sm">
            <strong>Phone:</strong> +123 456 7890
          </p>
          <p className="text-sm">
            <strong>Email:</strong> support@VisaSphere.com
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-background-focus text-textPrimary py-4 text-center text-sm">
        <p>&copy; 2024 VisaSphere. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

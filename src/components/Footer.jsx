const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Yalla Shabab</h2>
            <p className="text-gray-400">
              Connecting professors, students, and companies to create a
              collaborative learning environment and offer valuable training
              opportunities.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row gap-6 md:w-1/3 justify-center">
            <div>
              <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="#" className="hover:text-[#aa85e3]">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#aa85e3]">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#aa85e3]">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#aa85e3]">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Resources</h4>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="#" className="hover:text-[#aa85e3]">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#aa85e3]">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#aa85e3]">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#aa85e3]">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="text-lg font-semibold mb-3 ">
            <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#aa85e3] transition"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#aa85e3] transition"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#aa85e3] transition"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#aa85e3] transition"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2025 Our Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

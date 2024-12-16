import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="px-6 sm:px-10 lg:px-12 py-10 bg-gray-50 text-gray-800">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0 lg:space-x-10">
        {/* Brand Logo Section */}
        <div className="lg:max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left">
          <a href="#" className="flex items-center space-x-3">
            <div className="w-52 flex items-center justify-center">
              <img src={assets.logo} alt="Medico Hospital Logo" />
            </div>
          </a>
          <p className="mt-4 text-sm text-gray-500 leading-relaxed">
            Dedicated to providing compassionate care and trusted medical
            services. Explore our team of experienced doctors, advanced
            treatments, and state-of-the-art facilities. Book appointments and
            access quality healthcare tailored to your needs. Empowering
            healthier lives, one step at a time.
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-16 text-center lg:text-left">
          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="uppercase font-semibold text-gray-700">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-emerald-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="space-y-4">
            <h3 className="uppercase font-semibold text-gray-700">Get in Touch</h3>
            <ul className="space-y-2">
              <li className="text-gray-500">+880 4575 5325 665</li>
              <li className="text-gray-500 text-xs ">mehedi.shanto.contract@gmail.com</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h3 className="uppercase font-semibold text-gray-700">Follow Us</h3>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-emerald-400"
                title="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-emerald-400"
                title="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 text-center text-gray-500 text-xs">
        &copy; 2024 Medico Hospital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

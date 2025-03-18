import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import FooterImg from "../Images/FooterImg.jpg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscription = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div
  className="text-white py-10 font-[poppins] bg-cover bg-center bg-no-repeat min-h-[100vh]"
  style={{ backgroundImage: `url(${FooterImg})` }}
>
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">About Us</h2>
            <p className="text-sm leading-relaxed">
              GSNR Rice Industries Private Limited is committed to providing
              pesticide-free, premium rice from the heart of the Cauvery Delta.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm hover:text-[#9f0712] transition-all">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm hover:text-[#9f0712] transition-all">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm hover:text-[#9f0712] transition-all">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-xl md:text-2xl hover:text-[#9f0712]">
                <FaFacebook />
              </a>
              <a href="#" className="text-xl md:text-2xl hover:text-[#9f0712]">
                <FaTwitter />
              </a>
              <a href="#" className="text-xl md:text-2xl hover:text-[#9f0712]">
                <FaInstagram />
              </a>
              <a href="#" className="text-xl md:text-2xl hover:text-[#9f0712]">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Contact Info</h2>
            <p className="text-sm">Phone: +91 123 456 7890</p>
            <p className="text-sm">Email: info@gsnr.com</p>
            <h3 className="text-lg font-semibold">Our Addresses:</h3>
            <p className="text-sm leading-relaxed">
              #21, C V Raman Road, Alwarpet, Chennai-600018
            </p>
            <p className="text-sm leading-relaxed">
              #56, Kodikal Street, Mathanam South, Poovalur, Lalgudi, Tiruchirappalli - 621 712
            </p>
          </div>
        </div>

        {/* Subscription Section */}
        <div className="mt-10 border-t border-[#9f0712] pt-8 text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
          <form
            onSubmit={handleSubscription}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 w-full sm:w-[300px] border border-[#9f0712] rounded-lg sm:rounded-l-lg sm:rounded-r-none"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 w-full sm:w-auto bg-[#9f0712] text-white rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-[#4CAF50] transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
          {subscribed && (
            <p className="text-sm text-[#9f0712] mt-4">Thank you for subscribing!</p>
          )}
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-[#9f0712] pt-4 text-center text-xs sm:text-sm">
          <p>&copy; 2025 GSNR Rice Industries Private Limited. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

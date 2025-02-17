import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscription = (e) => {
    e.preventDefault();
    // Handle subscription logic here (e.g., send email to the server or store in DB)
    setSubscribed(true);
  };

  return (
    <div className="bg-[#333] text-white py-10 font-[poppins]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">About Us</h2>
            <p className="text-sm">
              GSNR Rice Industries Private Limited is committed to providing
              pesticide-free, premium rice from the heart of the Cauvery Delta.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm hover:text-[#5FCF80] transition-all">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm hover:text-[#5FCF80] transition-all">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm hover:text-[#5FCF80] transition-all">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-[#5FCF80]">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl hover:text-[#5FCF80]">
                <FaTwitter />
              </a>
              <a href="#" className="text-2xl hover:text-[#5FCF80]">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl hover:text-[#5FCF80]">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact Info</h2>
            <p className="text-sm">Phone: +91 123 456 7890</p>
            <p className="text-sm">Email: info@gsnr.com</p>

            {/* Addresses */}
            <h3 className="text-lg font-semibold">Our Addresses:</h3>
            <p className="text-sm">#21, C V Raman Road,
Alwarpet,
Chennai-600018</p>
            <p className="text-sm">#56, Kodikal Street,
Mathanam South, Poovalur,
Lalgudi, Tiruchirappalli - 621 712</p>
          </div>
        </div>

        {/* Subscription Section */}
        <div className="mt-8 border-t border-[#5FCF80] pt-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
          <form onSubmit={handleSubscription} className="flex justify-center items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 w-[300px] sm:w-[400px] border border-[#5FCF80] rounded-l-lg"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#5FCF80] text-white rounded-r-lg hover:bg-[#4CAF50] transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
          {subscribed && (
            <p className="text-sm text-[#5FCF80] mt-4">Thank you for subscribing!</p>
          )}
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-[#5FCF80] pt-4 text-center text-sm">
          <p>&copy; 2025 GSNR Rice Industries Private Limited. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

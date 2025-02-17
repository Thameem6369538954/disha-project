import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import LOGO from "../Images/LOGO.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white bg-opacity-20 backdrop-blur-lg fixed top-0 left-0 w-full p-4 shadow-lg z-50 font-[Poppins]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center text-[#5fcf80] text-3xl font-semibold bg-black p-2">
          <img src={LOGO} alt="Logo" className="h-20 w-20 mr-2" /> 
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[#5fcf80] text-lg font-medium">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="relative group cursor-pointer hover:text-[#3e8e41] transition-colors duration-300 ease-in-out">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5fcf80] group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </Link>
          </li>
          <li>
            <Link
              to="target"
              smooth={true}
              duration={500}
              className="relative group cursor-pointer hover:text-[#3e8e41] transition-colors duration-300 ease-in-out">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5fcf80] group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </Link>
          </li>
          <li>
            <Link
              to="pro"
              smooth={true}
              duration={500}
              className="relative group cursor-pointer hover:text-[#3e8e41] transition-colors duration-300 ease-in-out">
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5fcf80] group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </Link>
          </li>
          <li>
            <Link
              to="con"
              smooth={true}
              duration={500}
              className="relative group cursor-pointer hover:text-[#3e8e41] transition-colors duration-300 ease-in-out">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5fcf80] group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-[#5fcf80] text-3xl">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden text-[#5fcf80] flex flex-col items-center py-6 space-y-5 bg-white bg-opacity-80 rounded-lg shadow-lg"
          >
            <Link to="/" className="hover:text-[#5fcf80] text-lg" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="hover:text-[#5fcf80] text-lg" onClick={toggleMenu}>About</Link>
            <Link to="/services" className="hover:text-[#5fcf80] text-lg" onClick={toggleMenu}>Services</Link>
            <Link to="/contact" className="hover:text-[#5fcf80] text-lg" onClick={toggleMenu}>Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

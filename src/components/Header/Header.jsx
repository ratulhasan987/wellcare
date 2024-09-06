import { useState, useEffect } from 'react';
import logo from '../../Assets/images/wellcareLogo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-50 fixed top-0 left-0 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-gray-100 shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between md:px-16 px-4 py-2 max-w-7xl mx-auto">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none absolute left-4"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Logo */}
        <div className="md:flex hidden items-center flex-1 md:justify-start  md:ml-0 ml-auto">
          <img src={logo} alt="Wellcare Logo" className="h-10" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-700 hover:text-blue-500">
            Home
          </a>
          <a href="#services" className="text-gray-700 hover:text-blue-500">
            Services
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-500">
            About Us
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500">
            Contact
          </a>
        </div>
        <div className="border border-gray-300 rounded flex ">
          <button className="px-4 py-2 bg-gray-100 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">
            English
          </button>
          <button className="px-4 py-2 bg-gray-100 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">
            বাংলা
          </button>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Login
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black bg-opacity-90 fixed top-0 left-0 right-0 bottom-0 z-40">
          <div className="flex flex-col items-center h-full justify-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 focus:outline-none absolute top-4 left-4"
            >
              <FaTimes size={24} />
            </button>
            {/* <img src={logo} alt="Wellcare Logo" className="h-10 mb-6" /> */}

            <nav className="flex flex-col items-center space-y-4">
              <a href="#home" className="text-gray-300 hover:text-blue-500">
                Home
              </a>
              <a href="#services" className="text-gray-300 hover:text-blue-500">
                Services
              </a>
              <a href="#about" className="text-gray-300 hover:text-blue-500">
                About Us
              </a>
              <a href="#contact" className="text-gray-300 hover:text-blue-500">
                Contact
              </a>
            </nav>
            <div className="flex flex-col space-y-4 mt-6">
              <button className="text-sm py-2 px-4 text-white bg-blue-500 rounded hover:bg-blue-600">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

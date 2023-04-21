import React, { useState } from 'react';
import { navigation } from '../data';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-end">
      <div className="flex items-center lg:hidden">
        <button
          className="block ml-auto border border-white p-2 rounded-md text-white font-medium hover:text-fuchsia-500 hover:border-fuchsia-500 bg-primary"
          onClick={toggleMenu}
        >
          Menu
        </button>
      </div>

      {isMenuOpen && (
        <ul className="mt-4 absolute bg-primary top-12 right-0 cursor-pointer text-base font-medium rounded-md shadow-md overflow-hidden transition-all duration-300 z-10">
          {navigation.map((item, index) => (
            <li className="mb-2 py-1" key={index}>
              <Link
                to={item.href}
                className="block px-4 py-2 text-white hover:text-fuchsia-500 transition-all duration-200"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <ul className="hidden lg:flex space-x-8 capitalize text-lg font-medium mt-4">
        {navigation.map((item, index) => (
          <li
            className="text-white hover:text-fuchsia-500 cursor-pointer transition-all duration-200"
            key={index}
          >
            <Link
              to={item.href}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={400}
              offset={-70}
              className="transition-all duration-200"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

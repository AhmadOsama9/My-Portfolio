import React, { useState } from 'react';
import { navigation } from '../data';
import { Link } from 'react-scroll';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <footer className="bg-n-8 text-white py-8">
      <nav className="flex justify-center mb-4">
        <ul className="flex space-x-8 capitalize text-lg font-medium">
          {navigation.map((item, index) => (
            <li
              className="hover:text-fuchsia-500 cursor-pointer transition-all duration-200"
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
      <div className="text-center">
        <p className="text-sm mb-2">© {new Date().getFullYear()} Ahmed Osama</p>
        <p className="text-sm mb-2">
          <button onClick={toggleModal} className="underline">
            Credits
          </button>
        </p>
        <p className="text-sm">Contact me at: <a href="mailto:ahmedosama@example.com" className="underline">ahmedosamaa975@gmail.com</a></p>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white text-black p-6 rounded-lg relative">
            <button onClick={toggleModal} className="absolute top-2 right-2 text-black">
              &times;
            </button>
            <h2 className="text-lg font-bold mb-4">Credits</h2>
            <ul className="list-disc pl-6">
              <li>
                <a href="https://sketchfab.com/3d-models/gaming-desktop-pc-blend-file-9468eae06d5e464eaebe3a7ea73ea7c7" className="underline">
                  Gaming Desktop PC by Yolala1232
                </a> licensed under <a href="http://creativecommons.org/licenses/by/4.0/" className="underline">CC-BY-4.0</a>
              </li>
              <li>
                <a href="https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70" className="underline">
                  Stylized Planet by cmzw
                </a> licensed under <a href="http://creativecommons.org/licenses/by/4.0/" className="underline">CC-BY-4.0</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;

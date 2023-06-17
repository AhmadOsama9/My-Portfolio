import React from 'react';
import Navbar from "./Navbar";

import '../CSS/logo.css';


const Header = () => {
  return (
    <header className="h-20 flex bg-black item-center fixed top-0 w-full text-white z-10">
      <div className="container mx-auto h-full grid grid-flow-col gap-8 items-center ">
        <div className="text-white">
        <h1 className="logo text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight text-gray-400"
         content = "My_3D_Portfolio"
        >
          My_3D_Portfolio
        </h1>

        </div>
        <div>
          <Navbar />
        </div>
      </div>

    </header>
  )
}

export default Header
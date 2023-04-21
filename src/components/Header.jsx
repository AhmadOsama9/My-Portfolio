import React from 'react';
import Navbar from "./Navbar";


const Header = () => {
  return (
    <header className="h-20 flex bg-black item-center fixed top-0 w-full text-white z-10">
      <div className="container mx-auto h-full grid grid-flow-col gap-8 items-center ">
        <div className="text-white">
        <h1 className="text-3xl sm:text-2xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight text-gray-400">
          Ahmed Osama
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
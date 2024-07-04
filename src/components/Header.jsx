import { useState, useEffect } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { navigation } from "../data";
import { HamburgerMenu } from "./helperComponents/HamburgerMenu";
import  MenuSvg  from "./helperComponents/svg/MenuSvg";

import '../CSS/logo.css';


const Header = () => {
  
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isHeroSection, setIsHeroSection ] = useState(true);

  const toggleNavigation = () => {
    if(openNavigation) {
        setOpenNavigation(false);
        enablePageScroll();
    }
    else {
        setOpenNavigation(true)
        disablePageScroll();
    }
  }

  const handleClick = () => {
    if (!setOpenNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = document.getElementById('hero').offsetHeight;
      if (window.scrollY > heroSectionHeight) {
        setIsHeroSection(false);
      } else {
        setIsHeroSection(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm
        ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`}
    >
        <div className="flex items-center justify-between px-2 lg:px-3 xl:px-5 max-lg:py-4"> 
                <a className="block xl:mr-8" href="#hero">
                    <div className="flex items-center">
                    {/*Can add An Icon or image here */}
                      <h1 className=" xs:text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold text-white ml-2 lg:ml-4">
                        Ahmed Osama
                      </h1>
                    </div>
                </a>
            <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:max-auto lg:bg-transparent`}>
                <div className="relative z-2 flex flex-col items-center justify-center m-auto gap-8 lg:flex-row">
                    {navigation.map((item) => (
                        <a key={item.id} href={item.url}
                          className={`xs:text-xl  block relative font-code sm:text-2xl uppercase text-n-1 transition-colors hover:text-color-1`} 
                            onClick={handleClick}
                       >
                            {item.title}
                        </a>
                    ))}
                </div>
                <HamburgerMenu />


            </nav>

            <button className="ml-auto lg:hidden" px="px-3"
              onClick={toggleNavigation}
            >
                <MenuSvg openNavigation={openNavigation}/>
            </button>
        </div>
    </div>
  );
};

export default Header;
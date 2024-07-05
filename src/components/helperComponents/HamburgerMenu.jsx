
  
export const SideLines = () => {
    return (
      <>
        <div className="absolute top-0 left-5 w-0.25 h-full bg-gradient-to-b from-[#55f4ff] to-[#1e8bf1]"></div>
        <div className="absolute top-0 right-5 w-0.25 h-full bg-gradient-to-b from-[#558bff] to-[#0483fa]"></div>
      </>
    );
};
  
  
export const HamburgerMenu = () => {
    return (
      <div className="absolute inset-0 pointer-events-none lg:hidden">
        <div className="absolute inset-0 opacity-[.03]">
        </div>
  
        <SideLines />
  
      </div>
    );
};
  
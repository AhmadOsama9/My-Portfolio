export const Rings = () => {
    return (
      <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
        <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    );
};
  
export const SideLines = () => {
    return (
      <>
        <div className="absolute top-0 left-5 w-0.25 h-full bg-gradient-to-b from-[#ff55fc] to-[#214d76]"></div>
        <div className="absolute top-0 right-5 w-0.25 h-full bg-gradient-to-b from-[#ff55fc] to-[#214d76]"></div>
      </>
    );
};
  
  
export const HamburgerMenu = () => {
    return (
      <div className="absolute inset-0 pointer-events-none lg:hidden">
        <div className="absolute inset-0 opacity-[.03]">
        </div>
  
        <Rings />
  
        <SideLines />
  
      </div>
    );
};
  
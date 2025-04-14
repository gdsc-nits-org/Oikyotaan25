'use client';
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isMobileOrLaptop = useMediaQuery({
    query: "(max-width: 768px)", 
  });

  return (
    <div>
      {!isMobileOrLaptop ? <NavbarDesktop /> : <NavbarMobile />}
    </div>
  );
};

export default Navbar;

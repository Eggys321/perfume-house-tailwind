import React from "react";
import { Outlet } from "react-router-dom";
import navLogo from "../assets/Group 9283.svg";
import AuthBtn from "../components/AuthBtn";
import menuImg from "../assets/menu_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";

const Navbar = () => {
  return (
    <>
      <nav className="container mx-auto p-[25px] md:px-[15px] lg:py-[33px] lg:px-[99px] flex justify-between items-center">
        {/* div-1 for nav logo */}
        <div className="flex items-center gap-1">
          <img src={navLogo} alt="nav-logo" />
          <h2 className="hidden md:block font-[sansita] text-[28.33px] font-[700]">
            Perfume House
          </h2>
        </div>
        {/* div-2, for auth btns */}
        <div>
          {/* div for btns */}
          <div className="hidden md:block">
            <AuthBtn />
          </div>
          {/* div for menu / hamburger img */}
          <div className="md:hidden ">
            <div className="dropdown dropdown-end ">
              <div tabIndex={0} role="button" className="">
                <img src={menuImg} alt="menu-img" />
                {/* Click ⬇️ */}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-70 p-4 shadow-sm"
              >
                <AuthBtn />
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;

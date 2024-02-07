import { useState } from "react";
import logo from "../../assets/icon/logo.svg";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { useEffect } from "react";
const Navbar = () => {
  const [isRotate, setIsRotate] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItem = (
    <>
      <li>House</li>
      <li>Page</li>
      <li>Blog</li>
      <li>Contact</li>
    </>
  );
  return (
    <div
      className={`${
        isScrolled
          ? "bg-[#fff] duration-500 py-1 shadow-2xl"
          : "transition-all duration-500 py-[35px]"
      } w-full fixed top-0 left-0 z-[999]`}
    >
      <div className="w-full relative max-w-[1680px] mx-auto px-5">
        <div className="flex justify-between items-center">
          <img className="max-w-[192px]" src={logo} alt="" />
          <ul
            className={`md:flex items-center hidden space-x-12  ${
              isScrolled ? "text-[#000000]" : "text-[#fff]"
            }`}
          >
            {navItem}
          </ul>
          <button className="md:flex hidden btn btn-orange px-[35px] py-[15px] hover:text-[#fff] hover:scale-[1.03] duration-300">
            contact Us
          </button>
          <div className="md:hidden" onClick={() => setIsRotate(!isRotate)}>
            <HiOutlineMenuAlt1
              className={`${
                isRotate ? "rotate-360 duration-500" : "rotate-180 duration-500"
              } text-[35px]`}
            />
          </div>
        </div>
        <div
          className={`${
            isRotate ? "flex flex-col md:hidden" : "hidden"
          } w-1/2 h-[80vh] bg-red-500 absolute top-14 right-0`}
        >
          <ul className="flex flex-col items-center gap-2">
            <li className="hover:bg-slate-400 hover:font-semibold hover:text-[#fff] duration-300 w-full text-center py-5">
              House
            </li>
            <li className="hover:bg-slate-400 hover:font-semibold hover:text-[#fff] duration-300 w-full text-center py-5">
              Page
            </li>
            <li className="hover:bg-slate-400 hover:font-semibold hover:text-[#fff] duration-300 w-full text-center py-5">
              Blog
            </li>
            <li className="hover:bg-slate-400 hover:font-semibold hover:text-[#fff] duration-300 w-full text-center py-5">
              Contact
            </li>
          </ul>
          <button className="w-full mt-10 btn btn-orange px-[35px] py-[15px]">
            contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

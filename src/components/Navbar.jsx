import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <nav className="w-full flex py-6 justify-between items-center navbar">
        <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal text-white cursor-pointer text-[16px]  ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile version */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggleMenu ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            //🟡Explanation of this line:
            // setToggleMenu: This appears to be a state-setting function, probably part of the useState hook in a React functional component.
            // ((prev) => !prev): This is a function that takes the previous state (prev) and returns the negation of it (!prev). It's using the functional form of setState that takes the previous state as an argument and returns the new state. The !prev is a shorthand way of toggling a boolean value.
            // In summary, this code is likely part of a React component that manages a boolean state variable named toggleMenu, and when the associated element is clicked, it toggles the value of toggleMenu to the opposite of its current state. If toggleMenu is true, it becomes false, and if it's false, it becomes true. This is a common pattern for implementing toggles in React components.

            onClick={() => setToggleMenu((prev) => !prev)}
          />

          <div className={`${toggleMenu ? 'flex' : 'hidden'} px-6 bg-black-gradient absolute top-20 right-0 mx-4 py-10 min-w-[180px] rounded-xl sidebar h-[18rem]`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1 gap-6">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal text-white cursor-pointer text-[16px]  ${
                index === navLinks.length - 1 ? "mr-0" : "mb-4"
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

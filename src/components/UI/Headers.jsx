import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Headers = () => {
    const [show, setShow] = useState(false);

    const handleButtonToggle = () => {
        setShow(!show);
    };

    const handleCloseMenu = () => {
        setShow(false); // Close the menu when a link is clicked
    };

    return (
        <header className="flex justify-between items-center bg-[#2d2d2d] p-5 rounded-b-xl mb-5 select-none relative">
            <div className="text-3xl cursor-pointer hover:text-[#b5b3b3] active:text-[#ffffff]">
                CountryDetails
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="lg:hidden">
                <button
                    onClick={handleButtonToggle}
                    className="text-white text-3xl focus:outline-none"
                >
                    <GiHamburgerMenu />
                </button>
            </div>

            {/* Navigation Menu */}
            <nav
                className={`${
                    show ? "block" : "hidden"
                } lg:flex flex-col lg:flex-row items-center space-x-0 lg:space-x-4 absolute lg:static top-16 right-0 lg:w-auto lg:mt-0 bg-[#2d2d2d] lg:bg-transparent transition-all ease-in-out duration-300 z-10`}
            >
                <ul className="flex flex-col lg:flex-row items-center lg:space-x-2 p-5 lg:p-0 lg:space-y-0 space-y-4">
                    <li className="rounded-xl">
                        <NavLink
                            to="/"
                            onClick={handleCloseMenu} // Close menu on click
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#ffffff] bg-[#4a4a4a] px-3 py-2 rounded-xl"
                                    : "hover:bg-slate-50 hover:text-black px-3 py-2 rounded-xl"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="rounded-xl">
                        <NavLink
                            to="/country"
                            onClick={handleCloseMenu} // Close menu on click
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#ffffff] bg-[#4a4a4a] px-3 py-2 rounded-xl"
                                    : "hover:bg-slate-50 hover:text-black px-3 py-2 rounded-xl"
                            }
                        >
                            Country
                        </NavLink>
                    </li>
                    <li className="rounded-xl">
                        <NavLink
                            to="/about"
                            onClick={handleCloseMenu} // Close menu on click
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#ffffff] bg-[#4a4a4a] px-3 py-2 rounded-xl"
                                    : "hover:bg-slate-50 hover:text-black px-3 py-2 rounded-xl"
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="rounded-xl">
                        <NavLink
                            to="/contact"
                            onClick={handleCloseMenu} // Close menu on click
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#ffffff] bg-[#4a4a4a] px-3 py-2 rounded-xl"
                                    : "hover:bg-slate-50 hover:text-black px-3 py-2 rounded-xl"
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Headers;

import React from "react";
import { BiChevronRight, BiSearch, BiMenu } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";

const NavSm = () => {
    return (
        <>

            <div className="text-white flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold">It All start Here!</h3>
                    <span className="text-gray-400 text-xs flex items-center mt-1">
                        Chennai <BiChevronRight />
                    </span>
                </div>
                <div className="w-8 h-8">
                    <BiSearch className="w-full h-full" />
                </div>
            </div>



        </>
    );

};

const NavMd = () => {
    return (
        <div className="w-full flex items-center gap-4 bg-white py-2 px-3 rounded-md" >
            <BiSearch className="" />
            <input type="search"
                className="w-full bg-transparent border-none focus:outline-none"
                placeholder="Search for Movies, Plays, Sports and Activites." />
        </div>
    );
};

const NavLg = () => {
    return (
        <>
            <div className="container mx-auto px-20 flex items-center justify-between">
                <div className="flex items-center w-1/2 gap-3">
                    <div className="w-12 h-12">
                        <img
                            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                            alt="logo"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-full flex items-center gap-4 bg-white py-2 px-3 rounded-md" >
                        <BiSearch className="" />
                        <input type="search"
                            className="w-full bg-transparent border-none focus:outline-none"
                            placeholder="Search for Movies, Plays, Sports and Activites." />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-gray-200 text-xs flex items-center hover:text-white cursor-pointer">
                        Chennai <FiChevronDown className="ml-1 " />
                    </span>
                    <button className="bg-red-600 text-white px-2 py-1 text-sm rounder">Sign in</button>
                    <div className="w-8 h-8 text-white">
                        <BiMenu className="w-full h-full" />
                    </div>
                </div>
            </div>
        </>
    );
};

const Navbar = () => {
    return (
        <>
            <nav className="bg-bms-700 p-4">
                <div className="md:hidden">
                    {/*{Mobile Screen}*/}
                    <NavSm />
                </div>
                <div className="hidden md:flex lg:hidden">
                    <NavMd />
                </div>
                <div className="hidden lg:flex">
                    <NavLg />
                </div>
            </nav>
        </>
    );

};

export default Navbar;

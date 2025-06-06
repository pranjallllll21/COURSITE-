import React from "react";
import logo from "../../assets/window/logo.png";
import { FaCaretDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { data } from "autoprefixer";
import DarkMode from "../Navbar/DarkMode";

const Menu = [
    {
        id:1,
        name:"Home",
        link:"/#",
    },
    {
         id:2,
         name:"Best Seller",
         link:"/#services",
    }
];

const DropdownLinks =[
    {
        name:"Trending cources",
        link:"#",
    },
    {
        name:"Best Selling",
        link:"#",
    },
    {
        name:"Authors",
        link:"#",
    },
];

const Navbar = ({ handleOrderPopup, handleShowSignIn, showSignIn, handleBackToHome }) => {

  return( 
      <div className="shadow-lg bg-white dark:bg-gray-900 dark:text-white duration-200">
         <div className="container py-3 sm:y-0">
            <div className="flex justify-between items-center">
                <div>
                    <a href="#" 
                       onClick={(e) => {
                         e.preventDefault();
                         if (showSignIn) {
                           handleBackToHome();
                         }
                       }}
                       className="font-bold 
                                  text-2xl sm:text-3xl
                                  flex gap-2">
                        <img src={logo} alt="Logo" className="w-10" />
                        Coursite
                    </a>
                </div>
                <div className="flex items-center justify-between gap-4 ">
                    <DarkMode/>
                    <ul className="items-center gap-4 hidden sm:flex">
                       {
                        Menu.map((menu)=> (
                            <li key={menu.id}>
                                <a href={menu.link}
                                   className="inline-block py-4 px-4 
                                              hover:text-primary
                                              duration-200">
                                    {menu.name}
                                </a>
                            </li>
                        ))}
                        {/*Dropdown section */}
                        <li className="group relative cursor-pointer">
                            <a href="#" className="flex h-[72px] items-center gap-[2px]"> Quick Links
                                <span>
                                    <FaCaretDown className="transition-all duration-300 group-hover:rotate-180"/>
                                </span>
                            </a>
                             {/*Dropdown Link section */}
                        <div className="absolute -left-9 z-[10] hidden group-hover:block text-black bg-white p-2 shadow-md w-[150px]">
                            <ul>
                                {
                                    DropdownLinks.map
                                    ((data, index) => (
                                        <li key={index}>
                                            <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">{data.name}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        </li>
                    </ul>
                    <button
                        onClick={handleShowSignIn}
                        className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-black py-1 px-4 rounded-full flex items-center gap-3"
                    > 
                        Sign In
                    </button>
                </div>
            </div>
         </div>
      </div>
      );
};

export default Navbar;
import {Link} from "react-router-dom";
// import {motion} from "framer-motion"

import {MdFastfood} from "react-icons/md";
import {FaHome} from "react-icons/fa";
import { GrRestaurant } from "react-icons/gr";
import { BiSolidFoodMenu } from "react-icons/bi";
import { IoRestaurantSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import {FaCartShopping} from "react-icons/fa6";

export default function Navbar(props) {
    const navStyle ={
        backgroundColor: "#F4EAE0",
    };

    // object destructuring
    const {amountFood} = props; 
    
    return(
        <div className="sticky top-0 z-10">
            <div className="navbar text-[#4D4D4D] w-screen px-2" style={navStyle}>

                {/* class button link */}
                <div className="flex-1">
                    <a href="/" className="btn btn-ghost text-2xl">ATLANTA<MdFastfood className="size-8"/></a>
                </div>
                {/* screen */}
                <div className="hidden md:block px-2">
                    <ul className="menu menu-horizontal font-medium text-lg ">
                        <li>
                            <Link to="/"
                            // whileHover={{scale:1.05,originX:0, textShadow: "0px 0px 8px rgb(0,0,0)", boxShadow:"0px 0px 0px rgb(0,0,0)"}}
                            ><FaHome/> Home </Link>
                        </li>
                        <li>
                            {/* <Link to="/about">About</Link> */}
                            <a href="#about"><GrRestaurant/>About</a>
                        </li>
                        <li>
                            <Link to="/menu"><BiSolidFoodMenu/> Menu</Link>
                        </li>
                        <li>
                            <Link to="/reservation"><IoRestaurantSharp/>Reservation</Link>
                        </li>
                    </ul>

                </div>

                {/* Shopping Icon */}
                <div className="w-full translate-x-14 flex justify-end md:hidden ">
                    <FaCartShopping className="size-7"/>
                    <div className="badge badge-xs badge-warning">{amountFood}</div>
                </div>

                {/* sidebar */}
                <div className="drawer drawer-end flex justify-end md:hidden">
                    <input type="checkbox" id="my-drawer1" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer1" className="drawer-button btn btn-ghost"><IoMenu className="size-8"/></label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer1" aria-label="" className="drawer-overlay"></label>
                        <ul className="menu menu-vertical bg-[#faf6f0] min-h-full w-3/5 p-4 font-medium text-lg">
                            <li>
                                <Link to="/" className=""
                                ><FaHome/>Home</Link>
                            </li>
                            <li>
                                <a href="#about"><GrRestaurant/>About</a>
                            </li>
                            <li>
                                <Link to="/menu"><BiSolidFoodMenu/>Menu</Link>
                            </li>
                            <li>
                                <Link to="/reservation"><IoRestaurantSharp/>Reservation</Link>
                            </li>
                        </ul>
                    </div>
                
                </div>
            </div>

            
        </div>
    )
}


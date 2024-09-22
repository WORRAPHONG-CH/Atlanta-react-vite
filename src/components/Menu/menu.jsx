// import React from 'react'
import {motion} from "framer-motion";
import {useState} from "react";


import {BiSolidFoodMenu} from "react-icons/bi"
import {FaCartShopping} from "react-icons/fa6";
// import breakfast from "../../assets/fried-egg-3409076_1280.jpg"
import hamburger from "../../assets/sandwich.jpg"
import bowl from "../../assets/bowl.jpg"
import chicken from "../../assets/fried-chicken-250863_1280.jpg"

// import {images} from "./imgs";


// Framer motion

const containerVariants ={
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition:{
            delay:0.2,
            duration:0.75,
            when:"beforeChildren",
            // stagg
        }
    }
}


export default function Menu(props){

    const [amountFood,setAmountFood] = useState(0);


    // function 
    const amountFoodAll = () =>{
        console.log(props.getAmountFood(amountFood+1));
        setAmountFood((amountFood) => amountFood+1)
        
    }
    
    
    return (
        <motion.div className="min-h-screen min-w-full z-0"
        variants={containerVariants} initial={"hidden"} animate={"visible"}
        >
            <div className="flex flex-row justify-center p-5">
                <h1 className="flex  text-3xl text-[#E79E4F] font-bold md:text-4xl ">
                    Menu <BiSolidFoodMenu className="size-10 md:size-14"/></h1>

                <div className="flex">
                    <FaCartShopping className=" size-10 md:size-14"/>
                    <div className="badge badge-warning">+{amountFood}</div>

                </div>
                
            </div>
            <div className="grid grid-cols-1 gap-5 px-10 md:grid-cols-3 min-w-full1 md:px-10 md:gap-2">
                
                {/* card1 */}
                <div className="card card-compact bg-base-100 w-full shadow-xl  "> 
                    <figure className="h-64">
                        <img src={hamburger} alt="breakfast" className=" hover:scale-110 transition-transform" />
                    </figure>
                    <div className="card-body bg-white">
                        <h2 className="card-title text-slate-800 sm:text-2xl">Hamburger</h2>
                        <p className="text-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni culpa alias iste, pariatur perspiciatis repellendus!</p>
                    </div>
                    <div className="card-actions justify-end bg-white px-3 pb-3">
                        
                        <button type="button" className="btn btn-warning " onClick={amountFoodAll}>Buy Now</button>
                    </div>
                </div>

                {/* card2 */}
                <div className="card card-compact bg-base-100 w-full shadow-xl"> 
                    <figure className=" h-64">
                        <img src={bowl} alt="breakfast" className=" object-contain hover:scale-110 transition-transform" />
                    </figure>
                    <div className="card-body bg-white">
                        <h2 className="card-title text-slate-800 sm:text-2xl">French Fries</h2>
                        <p className="text-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni culpa alias iste, pariatur perspiciatis repellendus!</p>
                    </div>
                    <div className="card-actions justify-end bg-white px-3 pb-3">
                        
                        <button className="btn btn-warning " onClick={amountFoodAll}>Buy Now</button>
                    </div>
                </div>

                {/* card3 */}
                <div className="card card-compact bg-base-100 w-full shadow-xl"> 
                    <figure className="h-64">
                        <img src={chicken} alt="breakfast" className="object-fill hover:scale-110 transition-transform" />
                    </figure>
                    <div className="card-body bg-white">
                        <h2 className="card-title text-slate-800 sm:text-2xl">Chicken Wings</h2>
                        <p className="text-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni culpa alias iste, pariatur perspiciatis repellendus!</p>
                    </div>
                    <div className="card-actions justify-end bg-white px-3 pb-3">
                        <button className="btn btn-warning" onClick={amountFoodAll}>Buy Now</button>
                    </div>
                </div>
            </div>
            
            
        </motion.div>
    )
}


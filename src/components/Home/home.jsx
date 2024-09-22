// import React from 'react'
// import {useState} from 'react';
import { motion} from "framer-motion";
// import {Link} from "react-dom";

// images
import hamburger from '../../assets/sandwich-5930496_1280-Photoroom.png';
// import images from './img-carousel'

// component 
import About from "../About/about"

// framer motion
const containerVariants ={
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition:{
            delay:0.2,
            // duration:1,
            when:"beforeChilden", // ทำก่อนตัวลูก
            stagger:2 //ให้ตัวลูกมี delay ห่างกัน 2 วิ
        }
    }
}
// childVariants
const headerVariants = {
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition:{
            delay:0.5,
            duration:1
        }
    }
}
const imgVariants = {
    hidden:{
        x:"100vw"
    },
    visible:{
        x:0,
        transition:{
            delay:0.3,
            duration:1,
            type:"spring"
        }
    }
}
const textVariants ={
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition:{delay:0.8,duration:1}
    }
}


export default function Home() {
    

    return (
    <motion.div className="container mx-auto min-w-full min-h-screen bg-slate-4001"
    variants={containerVariants} initial={"hidden"} animate={"visible"}
    >
        <motion.div className="flex flex-col flex-wrap1 min-h-96 w-full sm:flex-row bg-orange-3001 "
        // variants={containerVariants} initial={"hidden"} animate={"visible"}  
        >
            {/* Text Content section*/}
            <div className="flex flex-col text-center justify-center px-10 mb-2 sm:w-6/12 sm:text-left lg:ps-20 lg:w-6/12 bg-yellow-4001"
            >
                <motion.h1 className="text-4xl font-bold font-head pb-5 pt-8  text-[#E79E4F] sm:text-5xl lg:text-6xl "
                variants={headerVariants} initial={"hidden"} animate={"visible"}
                
                >
                Atlanta, The best flavor for you</motion.h1>
                <motion.p className="text-para  my-3  md:text-xl"
                    variants={textVariants} initial={"hidden"} animate={"visible"}
                    >Indulge in a culinary journey here, where passion meets palate. 
                    Our chefs artfully blend flavors to create exquisite dishes that tantalize taste buds for you.
                </motion.p>
                <div className="flex flex-row justify-center md:justify-start">
                    <motion.a href="/menu" className="bg-[#f59e0b] py-4 text-slate-800 font-semibold rounded-xl text-center w-2/4 lg:w-2/4 lg:text-lg  "
                    initial = {{x:"-100vw"}} animate = {{x:0}} transition={{delay:0.2 , duration:1}}
                    whileHover={{scale:1.05, duration:2}}
                    >Let`s Order</motion.a>
                </div>
            </div>

            {/* img section */}
            <motion.section className="flex flex-col justify-center items-center min-h-full mb-5 sm:w-6/12 lg:w-6/12 sm:p-4 bg-green-4001"
            variants={imgVariants} initial={"hidden"} animate={"visible"}  
            >
                <div className="">
                    <img src={hamburger} 
                    alt="hamburger" 
                    className="rounded-3xl w-[300px] object-cover relative1 sm:w-[400px]  lg:w-[480px] shadow-2xl1" />
                </div>

            </motion.section>
        </motion.div>
        <section className="container min-w-full">
            <About/>
        </section>
    </motion.div>
    )
}


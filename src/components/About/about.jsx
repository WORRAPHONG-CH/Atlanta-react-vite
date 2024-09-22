// import React from 'react'
import {motion} from "framer-motion"

// import Asset
import restaurantImg from "../../assets/other/chairs-2179044_1280.jpg";
// import { IoRestaurant } from "react-icons/io5";
import { GrRestaurant } from "react-icons/gr";

export default function About() {
    return (
        <div id="about" className="bg-slate-5001 min-h-full">
            <div className="flex flex-col sm:flex-row">

                <motion.h1 className="flex justify-center text-3xl pt-3 pb-5 font-head font-bold text-[#E79E4F] sm:hidden
                    sm:text-left sm:text-3xl sm:justify-start md:text-4xl md:pb-5 md:pt-3 lg:text-5xl"
                    initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.8,duration:1.5}}
                    ><GrRestaurant/> About Atlanta <GrRestaurant/></motion.h1>
                
                <motion.div className="flex justify-center sm:ps-4 md:w-3/6 bg-green-4001 object-cover"
                initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2, duration:2}}
                >
                    <img src={restaurantImg} alt="restaurant" 
                    className="w-full sm:w-full shadow-xl"/>
                </motion.div>
                
                <div className="flex flex-col sm:flex-col justify-center md:w-3/6 px-8 pb-5 bg-yellow-3001">
                    <motion.h1 className=" text-3xl pt-3 pb-5 font-head font-bold text-[#E79E4F] hidden
                    sm:text-left sm:text-3xl sm:flex sm:justify-start md:text-4xl md:pb-5 md:pt-3 lg:text-5xl"
                    initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1,duration:1}}
                    ><GrRestaurant/> About Atlanta <GrRestaurant/></motion.h1>
                    <motion.p className="text-para my-5 md:my-0"
                    initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.5,duration:2}}
                    >From fresh, locally-sourced ingredients to curated wine selection every detail is crafted to elevate your dining experience.
                        Discover a symphony of tastes and textures at Atlanta.
                    </motion.p>
                </div>
            </div>
            <div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}


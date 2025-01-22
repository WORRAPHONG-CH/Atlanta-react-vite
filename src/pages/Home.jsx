// import React from "react";
import { motion } from "framer-motion";
import { Utensils, Truck, Wine, Star } from "lucide-react"; // Importing icons
import hamburger from "../assets/other/sandwich-5930496_1280-Photoroom.png";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const headerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const imgVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { type: "spring", stiffness: 120 } },
};

const Home = () => {
  return (
    <motion.div
      className=" mx-auto min-h-screen bg-gradient-to-b from-orange-50 via-orange-100 to-yellow-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <div className="flex flex-wrap items-center justify-center lg:flex-row">
        <motion.div
          className="text-center lg:text-left p-8 lg:w-1/2"
          variants={headerVariants}
        >
          <h1 className="text-5xl font-extrabold text-orange-600">
            Atlanta: Where Every Bite Tells a Story
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Experience a fusion of exquisite flavors and creative dishes crafted
            by world-class chefs.
          </p>
          <a
            href="/menu"
            className="inline-block mt-6 px-8 py-4 text-lg font-semibold text-white bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 transition"
          >
            Explore Our Menu
          </a>
        </motion.div>
        <motion.div
          className="p-4 lg:w-5/12"
          variants={imgVariants}
        >
          <img
            src={hamburger}
            alt="Delicious Hamburger"
            className="rounded-xl shadow-xl"
          />
        </motion.div>
      </div>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-r from-orange-100 to-teal-100">
        <h2 className="text-4xl font-bold text-center text-orange-700">
          Our Exclusive Services
        </h2>
        <div className="flex flex-wrap justify-center mt-8 gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition"
            variants={headerVariants}
          >
            <Utensils className="text-orange-500 w-10 h-10 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800">Fine Dining</h3>
            <p className="mt-2 text-gray-600">
              Luxurious dining experiences crafted for elegance and flavor.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition"
            variants={headerVariants}
          >
            <Truck className="text-orange-500 w-10 h-10 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800">Delivery</h3>
            <p className="mt-2 text-gray-600">
              Enjoy our flavors delivered straight to your door.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition"
            variants={headerVariants}
          >
            <Wine className="text-orange-500 w-10 h-10 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800">
              Private Events
            </h3>
            <p className="mt-2 text-gray-600">
              Host your celebrations in our private and stylish spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section className="py-16 bg-orange-50">
        <h2 className="text-4xl font-bold text-center text-orange-700">
          Menu Highlights
        </h2>
        <div className="flex flex-wrap justify-center mt-8 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg w-64 hover:shadow-2xl transform hover:scale-105 transition">
            <Star className="text-orange-500 w-8 h-8 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-800">Signature Burger</h3>
            <p className="mt-2 text-gray-600">
              Juicy beef patty with fresh toppings and a secret sauce.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-64 hover:shadow-2xl transform hover:scale-105 transition">
            <Star className="text-orange-500 w-8 h-8 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-800">Gourmet Pizza</h3>
            <p className="mt-2 text-gray-600">
              Handcrafted pizzas with thai ingredients.
            </p>
          </div>
        </div>
      </section>

     
    </motion.div>
  );
};

export default Home;

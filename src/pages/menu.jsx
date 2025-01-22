import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { BiSolidFoodMenu } from "react-icons/bi";
import Reveal from "../components/Reveal";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.2, duration: 0.75, when: "beforeChildren" },
  },
};

export default function Menu() {
  const itemsPerPage = 12;
  const [allData, setAllData] = useState({ foods: [], desserts: [], drinks: [] });
  const [limitData, setLimitData] = useState({ foods: [], desserts: [], drinks: [] });
  const [allPages, setAllPages] = useState({ foods: 1, desserts: 1, drinks: 1 });
  const [countPage, setCountPage] = useState({ foods: 1, desserts: 1, drinks: 1 });
  const [select, setSelect] = useState("foods");

  // console.log(limitData)

  const fetchApi = async () => {
    try {
      const response = await fetch("https://free-food-menus-api-two.vercel.app/all");
      if (!response.ok) throw new Error("Fetch data failed");
      const data = await response.json();

      setAllData({
        foods: data["our-foods"],
        desserts: data["ice-cream"],
        drinks: data["drinks"],
      });

      setAllPages({
        foods: Math.ceil(data["our-foods"].length / itemsPerPage),
        desserts: Math.ceil(data["ice-cream"].length / itemsPerPage),
        drinks: Math.ceil(data["drinks"].length / itemsPerPage),
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    const getSlice = (type) => 
      allData[type]?.slice((countPage[type] - 1) * itemsPerPage, countPage[type] * itemsPerPage);
    setLimitData({
      foods: select === "foods" ? getSlice("foods") : [],
      desserts: select === "desserts" ? getSlice("desserts") : [],
      drinks: select === "drinks" ? getSlice("drinks") : [],
    });
  }, [select, countPage, allData]);

  const renderCards = (items) =>
    items.map((item, index) => (
      <Reveal
        key={index}
        className="card card-compact bg-base-100 shadow-lg hover:shadow-2xl transition-shadow col-span-12 sm:col-span-6 lg:col-span-4"
      >
        <figure className="h-52 overflow-hidden">
          {
            item.img &&
            <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
          }
          
        </figure>
        <div className="card-body bg-white">
          <div className="flex justify-between items-center"> 
            <h2 className="card-title text-gray-800">{item.name}</h2>
            <h2 className="card-title text-gray-800">{item.price}฿</h2>
          </div>
          
          <p className="text-sm text-gray-600">{item.dsc}</p>
          <div className="card-actions justify-between items-center">
            <button className="btn btn-warning">Buy Now</button>
          </div>
        </div>
      </Reveal>
    ));

  const renderPagination = (type) => (
    <div className="flex justify-center items-center gap-4 mt-5">
        <button
          className={`btn btn-sm ${countPage[type] > 1 ? "btn-warning" : "btn-disabled"}`}
          onClick={() => {
            setCountPage((prev) => ({ ...prev, [type]: prev[type] - 1 }));
            document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
          }}
        >
          Previous
        </button>
      <span className="text-gray-700">
        Page {countPage[type]} of {allPages[type]}
      </span>
      
        <button
          className={`btn btn-sm ${countPage[type] < allPages[type] ? "btn-warning" : "btn-disabled"}`}
          onClick={() => {
            setCountPage((prev) => ({ ...prev, [type]: prev[type] + 1 }));
            document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
          }}
        >
          Next
        </button>
    </div>
  );

  return (
    <motion.div 
      className="min-h-screen bg-gray-50 px-5 pb-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center py-8" id="menu">
        <h1 className="text-4xl text-orange-500 font-bold  flex items-center justify-center gap-2">
          Menu <BiSolidFoodMenu />
        </h1>
      </div>
      <div className="flex justify-center gap-4 mb-6">
        {["foods", "drinks", "desserts"].map((category) => (
          <button
            key={category}
            className={`btn ${select === category ? "btn-active btn-warning" : "btn-outline btn-warning"}`}
            onClick={() => setSelect(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-12 gap-6">{renderCards(limitData[select] || [])}</div>
      {renderPagination(select)}
    </motion.div>
  );
}

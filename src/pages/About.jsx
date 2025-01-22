import { motion } from "framer-motion";
import { Heart, Users, Award } from "lucide-react"; // Icons for About page
import restaurantImg from "/src/assets/other/chairs-2179044_1280.jpg";

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="container mx-auto min-h-screen bg-gradient-to-b from-orange-50 via-orange-100 to-yellow-50 px-8 py-16"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      {/* About Header */}
      <section className="text-center mb-16 w-full flex flex-col justify-center items-center gap-3">
        <h1 className="text-5xl font-bold text-orange-600">About Us</h1>
        <p className="mt-3 text-lg text-gray-700">
          Discover the story behind Atlantis, a restaurant built on passion,
          flavor, and community.
        </p>
        <img src={restaurantImg} alt="restaurant" className="w-3/4  h-96"/>
      </section>

      {/* History Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-orange-700 mb-4">Our History</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-700 text-lg leading-relaxed">
            Established in 2005, Atlantis started as a small family-owned
            eatery with a mission to redefine dining experiences. Inspired by
            the mythical city of Atlantis, we envisioned a place where
            tradition meets creativity, offering an unforgettable culinary
            journey. Over the years, our dedication to quality, innovation, and
            customer satisfaction has made us a cornerstone of the community.
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <motion.section
        className="flex flex-col items-center text-center py-10 bg-gradient-to-r from-orange-100 to-teal-100 rounded-lg shadow-lg"
        variants={sectionVariants}
      >
        <blockquote className="text-xl italic text-gray-800">
          {`"Good food is the foundation of genuine happiness."`}
        </blockquote>
        <cite className="text-lg text-gray-600 mt-2">- Auguste Escoffier</cite>
      </motion.section>

      {/* Values Section */}
      <section className="mt-16">
        <h2 className="text-4xl font-semibold text-orange-700 mb-6">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition"
            variants={sectionVariants}
          >
            <Heart className="text-orange-500 w-10 h-10 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 text-center">
              Passion
            </h3>
            <p className="mt-2 text-gray-600 text-center">
              We pour our hearts into every dish, ensuring that each bite is a
              celebration of flavors.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition"
            variants={sectionVariants}
          >
            <Users className="text-orange-500 w-10 h-10 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 text-center">
              Community
            </h3>
            <p className="mt-2 text-gray-600 text-center">
              Building relationships with our customers and local suppliers is
              at the heart of what we do.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition"
            variants={sectionVariants}
          >
            <Award className="text-orange-500 w-10 h-10 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 text-center">
              Excellence
            </h3>
            <p className="mt-2 text-gray-600 text-center">
              We strive to deliver the highest quality food and service, every
              single time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="mt-16">
        <h2 className="text-4xl font-semibold text-orange-700 mb-4">Our Vision</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-700 text-lg leading-relaxed">
            To become a global symbol of culinary excellence, fostering
            memorable experiences and inspiring future generations of chefs and
            restaurateurs.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-orange-600 mb-4">
          Join Us on This Flavorful Journey
        </h2>
        <a
          href="/menu"
          className="inline-block mt-4 px-8 py-4 text-lg font-semibold text-white bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 transition"
        >
          Explore Our Menu
        </a>
      </section>
    </motion.div>
  );
};

export default About;

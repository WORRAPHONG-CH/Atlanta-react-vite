import { motion } from "framer-motion";
import { Calendar, Clock, User, Mail, Phone, MapPin } from "lucide-react";

// Framer Motion animations
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.75,
    },
  },
};

export default function Reservation() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-[#FFEDD5] to-[#FFFAF0] flex flex-col justify-center items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.75 }}
      >
        <h1 className="text-5xl font-bold text-[#E79E4F]">Make a Reservation</h1>
        <p className="text-lg text-gray-600 mt-3">
          Reserve your table now and indulge in an unforgettable dining experience.
        </p>
      </motion.div>

      {/* Reservation Form */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.75 }}
      >
        <h2 className="text-2xl text-center font-semibold text-gray-700 mb-6">
          Fill in Your Details
        </h2>
        <form className="space-y-4 w-full">
          {/* Date */}
          <div className="relative w-full">
            <label htmlFor="date" className="block text-lg font-medium text-gray-700">
              Date
            </label>
            <div className="relative w-full">
              <Calendar className="absolute top-2 left-2 text-gray-500" />
              <input
                type="date"
                id="date"
                className="pl-10 w-full border border-gray-300 rounded-md p-2 focus:ring-[#E79E4F] focus:border-[#E79E4F]"
              />
            </div>
          </div>

          {/* Time */}
          <div className="relative w-full">
            <label htmlFor="time" className="block text-lg font-medium text-gray-700">
              Time
            </label>
            <div className="relative w-full">
              <Clock className="absolute top-2 left-2 text-gray-500" />
              <select
                id="time"
                className="pl-10 w-full border border-gray-300 rounded-md p-2 focus:ring-[#E79E4F] focus:border-[#E79E4F]"
              >
                <option>5:00 PM</option>
                <option>6:00 PM</option>
                <option>7:00 PM</option>
                <option>8:00 PM</option>
                <option>9:00 PM</option>
                <option>10:00 PM</option>
              </select>
            </div>
          </div>

          {/* Name */}
          <div className="relative w-full">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Name
            </label>
            <div className="relative w-full">
              <User className="absolute top-2 left-2 text-gray-500" />
              <input
                type="text"
                id="name"
                placeholder="Your full name"
                className="pl-10 w-full border border-gray-300 rounded-md p-2 focus:ring-[#E79E4F] focus:border-[#E79E4F]"
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative w-full">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute top-2 left-2 text-gray-500" />
              <input
                type="email"
                id="email"
                placeholder="Your email address"
                className="pl-10 w-full border border-gray-300 rounded-md p-2 focus:ring-[#E79E4F] focus:border-[#E79E4F]"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="relative">
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
              Phone
            </label>
            <div className="relative">
              <Phone className="absolute top-2 left-2 text-gray-500" />
              <input
                type="tel"
                id="phone"
                placeholder="Your phone number"
                className="pl-10 w-full border border-gray-300 rounded-md p-2 focus:ring-[#E79E4F] focus:border-[#E79E4F]"
              />
            </div>
          </div>

          {/* Address */}
          <div className="relative w-full">
            <label htmlFor="address" className="block text-lg font-medium text-gray-700">
              Address
            </label>
            <div className="relative">
              <MapPin className="absolute top-2 left-2 text-gray-500" />
              <textarea
                id="address"
                placeholder="Your address"
                rows={3}
                className="pl-10 w-full border border-gray-300 rounded-md p-2 focus:ring-[#E79E4F] focus:border-[#E79E4F]"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#E79E4F] text-white font-semibold py-3 px-6 rounded-md shadow-lg hover:bg-[#d48c3d] transition duration-300"
            >
              Book Now
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

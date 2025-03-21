import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/banner.jpg')" }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      <motion.div
        className="flex flex-col items-center justify-center h-screen w-screen text-center relative z-10 text-white"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Smriti Bhawana
        </motion.h1>
        <motion.p
          className="text-2xl text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Front-End Developer | React | UI/UX | TypeScript
        </motion.p>
        <motion.div
          className="flex space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a
            href="https://www.linkedin.com/in/smriti-bhawana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:EngSmritiBhawana@gmail.com"
            className="text-red-400 text-3xl"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;

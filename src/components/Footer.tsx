import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-14 text-center">
      <p className="text-xl font-semibold">Contact</p>
      <p className="text-gray-400 mt-2">"We all can work; but together we win"</p>
      <p className="text-gray-400 mb-4">- Smriti Bhawana</p>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-300 text-sm pt-5">
      
      <a href="https://github.com/SmritiBhawana" className="flex items-center gap-2 hover:text-gray-100">
      <FaGithub className="text-white text-2xl hover:text-gray-400" /> github.com/SmritiBhawana
        </a>
        <a href="mailto:engsmritibhawana@gmail.com" className="flex items-center gap-2 hover:text-gray-100">
        <FaEnvelope className="text-white text-2xl hover:text-gray-400" /> engsmritibhawana@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/smriti-bhawana" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-100">
        <FaLinkedin className="text-white text-2xl hover:text-gray-400" /> linkedin.com/in/smriti-bhawana
        </a>
      </div>
    </footer>
  );
};

export default Footer;

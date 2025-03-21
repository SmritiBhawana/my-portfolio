const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-14 text-center">
      <p className="text-xl font-semibold">Contact</p>
      <p className="text-gray-400 mt-2">"We all can work; but together we win"</p>
      <p className="text-gray-400 mb-4">- Smriti Bhawana</p>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-300 text-sm">
        
        <a href="mailto:engsmritibhawana@gmail.com" className="flex items-center gap-2 hover:text-gray-100">
          <i className="fas fa-envelope"></i> engsmritibhawana@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/smriti-bhawana" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-100">
          <i className="fab fa-linkedin"></i> linkedin.com/in/smriti-bhawana
        </a>
      </div>
    </footer>
  );
};

export default Footer;

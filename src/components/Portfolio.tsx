export default function Portfolio() {
    return (
        <div className="">
             <section className="bg-[#fafafa] py-14 text-center">
        <h2 className="text-4xl font-semibold text-teal-600">Portfolio</h2>
        <p className="text-gray-600 mt-2">"My work is the dress of my thoughts."<br /> - Smriti Bhawana</p>
        <div className="w-1/2 border-t border-gray-300 my-6 mx-auto"></div>
  
        <div className="flex justify-center">
          <a href="we-care-git-main-smritibhawanas-projects.vercel.app" target="_blank" rel="noopener noreferrer">
            <img
              src="images/wecare.jpg"
              alt="Personal Project: WeCare"
              className="w-40 h-40 mx-auto rounded-md shadow-lg object-cover"
            />
          </a>
        </div>
        <p className="text-gray-700 mt-2">WeCare Web Application</p>
      </section>
            </div>
     
    );
  }
  
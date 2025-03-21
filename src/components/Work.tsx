const Work = () => {
  return (
    <div className="py-14 work">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-teal-600">Experiences</h1>
        <p className="text-gray-600 mt-2 italic">
          "Getting started, hard work and never give up attitude is the key to success."
        </p>
        <p className="text-gray-600">- Smriti Bhawana</p>
        <hr className="mt-4 border-gray-400 w-3/4 mx-auto" />
      </div>
      <div className="max-w-6xl mx-auto p-10">
        <table className="w-full border-collapse">
          <thead>
            <tr>
            <th className="w-1/4 align-top text-2xl font-semibold text-teal-600 p-4 col-span-3">
                Career
              </th>
            </tr>
          </thead>
          <tbody>            
            <tr className="border-b border-gray-300">       
              <td> <h3 className="text-xl font-bold text-gray-800">Tech Analyst - Infosys</h3>
              <p className="text-gray-500">2020 - Present</p></td>      
              <td className="w-3/4 p-4">
               
                <p className="mt-2 text-gray-700">
                  Worked on front-end development, focusing on React, Angular, and UI/UX improvements. Contributed to multiple projects and optimized performance for better user experience.
                </p>
              </td>
            </tr>

            <tr className="border-b border-gray-300">
              <td> <h3 className="text-xl font-bold text-gray-800">Frontend Developer - Thynkblynk</h3>
              <p className="text-gray-500">2017 - 2020</p></td>
              <td className="p-4">
               
                <p className="mt-2 text-gray-700">
                  Developed web applications using React and JavaScript. Worked closely with designers to bring creative UI/UX ideas to life.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Work;

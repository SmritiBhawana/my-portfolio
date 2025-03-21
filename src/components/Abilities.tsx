const Abilities = () => {
  const abilities = [
    { name: "Javascript", rating: 4 },
    { name: "React", rating: 3 },
    { name: "Angular", rating: 2 },
    { name: "ES6", rating: 3 },
    { name: "JSON", rating: 3 },
    { name: "Bootstrap Framework", rating: 4 },
    { name: "CSS", rating: 3 },
    { name: "HTML(5)", rating: 2 },
    { name: "C#", rating: 2 },
    { name: "Command line Interface", rating: 2 },
    { name: "Node JS", rating: 3 }
  ];

  const abilities2 = [
    { name: "Git/Git Flow", rating: 4 },
    { name: "Redux", rating: 3 },
    { name: "Object Oriented Programming", rating: 4 },
    { name: "MVC Pattern", rating: 3 },
    { name: "Singleton Pattern", rating: 3 },
    { name: "Performance Optimization", rating: 4 },
    { name: "MySQL", rating: 3 },
    { name: "Mongo DB", rating: 2 },
    { name: "Azure DevOps", rating: 2 },
    { name: "Command line Interface", rating: 2 },
    { name: "Material Design", rating: 3 },
  ];

  return (
    <div className="bg-[#F9F8E3] p-14">
      <h2 className="text-3xl font-bold text-center text-teal-700">Abilities</h2>
      <p className="text-center text-gray-600 italic mb-10">
        "Knowledge is the power of the wise man." - William Pen
      </p>
      <div className="grid grid-cols-2 max-w-4xl mx-auto gap-10">
        <div>
          <h3 className="text-xl font-bold text-teal-700">Skills</h3>
          <ul className="mt-4 space-y-2">
            {abilities.map((ability, index) => (
              <li key={index} className="flex justify-between text-gray-700">
                {ability.name}
                <span className="text-teal-500">{"★".repeat(ability.rating)}{"☆".repeat(5 - ability.rating)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="mt-4 space-y-2 pt-7">
            {abilities2.map((ability, index) => (
              <li key={index} className="flex justify-between text-gray-700">
                {ability.name}
                <span className="text-teal-500">{"★".repeat(ability.rating)}{"☆".repeat(5 - ability.rating)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Abilities;

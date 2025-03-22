const Abilities = () => {
  const abilities = [
    { name: "Javascript", rating: 4 },
    { name: "TypeScript", rating: 4 },
    { name: "React", rating: 3 },

    { name: "Tailwind CSS", rating: 4 },
    { name: "CSS", rating: 3 },
    { name: "HTML", rating: 4 },
    { name: "Bootstrap Framework", rating: 4 },
    { name: "Node JS", rating: 3 },
    { name: "Git/Git Flow", rating: 4 },
    { name: "Object Oriented Programming", rating: 4 },
    { name: "Web Performance Optimization", rating: 4 },
  ];

  return (
    <div className="bg-[#F9F8E3] p-14">
      <h2 className="text-3xl font-bold text-center text-teal-700">
        Abilities
      </h2>
      <p className="text-center text-gray-600 italic mb-10">
        "Knowledge is the power of the wise man." - William Pen
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <div className="sm:w-1/2 w-full">
          <h3 className="text-xl font-bold text-teal-700">Skills</h3>
          <ul className="mt-4">
            {abilities.map((ability, index) => (
              <li key={index} className="flex justify-between text-gray-700">
                {ability.name}
                <span className="text-teal-500">
                  {"★".repeat(ability.rating)}
                  {"☆".repeat(5 - ability.rating)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Abilities;

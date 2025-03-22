const About: React.FC = () => {
  return (
    <section className="py-14 flex flex-col items-center justify-center px-6 md:px-20">
      <h2 className="text-4xl font-bold text-teal-600 mb-2">Profile</h2>
      <p className="text-lg  mb-10">I'm a creative Web Developer</p>

      <div className="flex flex-col md:flex-row items-center max-w-5xl w-full">
        {/* Left Section - About Me Text */}
        <div className="md:w-1/3 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-teal-600">About Me</h3>
          <p className="mt-4">
            I am a creative software engineer, diligence and passion to learn
            and work on new technologies are two traits that I believe most
            reflect me as an individual. I always try to achieve a higher level
            of perfection in my work. I believe true wisdom lies in gathering
            the precious things out of each day as it goes by. I like working in
            a team, you will learn faster and much more. As the saying goes:
            'two heads are better than one.'
          </p>
        </div>

        {/* Center Section - Profile Image */}
        <div className="md:w-1/3 flex justify-center my-6 md:my-0">
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-48 h-48 rounded-full border-4 border-teal-300 object-cover"
          />
        </div>

        {/* Right Section - Personal Details */}
        <div className="md:w-1/3 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-teal-600">Details</h3>
          <p className="mt-4">
            <strong>Name:</strong> Smriti Bhawana
          </p>
          <p className="mt-2">
            <strong>Location:</strong> Varanasi
          </p>
          <p className="mt-10">
            {" "}
            <a
              href="/front_end.pdf"
              download
              className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 "
            >
              Download Resume
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;

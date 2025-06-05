function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 py-12 overflow-hidden"
    >
      {/* 💚 Background Emerald Circles */}
      <div className="absolute w-72 h-72 bg-emerald-500 rounded-full opacity-30 top-[-80px] left-[-80px] z-0"></div>
      <div className="absolute w-56 h-56 bg-emerald-500 rounded-full opacity-30 top-[60%] left-[10%] z-0"></div>
      <div className="absolute w-96 h-96 bg-emerald-500 rounded-full opacity-30 bottom-[-120px] right-[-100px] z-0"></div>
      <div className="absolute w-48 h-48 bg-emerald-500 rounded-full opacity-30 bottom-[20%] right-[15%] z-0"></div>
      <div className="absolute w-80 h-80 bg-emerald-500 rounded-full opacity-30 top-1/4 left-[calc(50%-24rem)] z-0"></div>

      {/* 🧱 Main Content Box */}
      <div className="relative z-10 bg-white shadow-md w-full max-w-3xl flex flex-col md:flex-row items-stretch overflow-hidden border border-gray-200">
        
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 p-4 sm:p-6 flex flex-col justify-center max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center md:text-left">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            I’m Mamatha Iruvaram, a full stack developer with a love for clean code, creative problem solving, and building things that actually work.
            <br /><br />
            I earned my Master’s in Information Systems from George Mason University and bring over two years of hands-on experience as a developer, working on scalable web applications in production environments.
            <br /><br />
            I enjoy turning ideas into functional products, from building user interfaces to testing backend systems. I approach every project with curiosity, focus, and a mindset to keep learning and improving.
            <br /><br />
            I believe good software should not only work well, but be thoughtfully built.
          </p>
        </div>

        {/* Right: Profile Image */}
        <div className="w-full md:w-1/2">
  <div className="w-full h-full md:h-[100%]">
    <img
      src={`${import.meta.env.BASE_URL}Mamatha.jpg`}
      alt="Mamatha Iruvaram"
      className="w-full h-full object-cover"
    />
  </div>
  </div>
      </div>
    </section>
  );
}

export default About;

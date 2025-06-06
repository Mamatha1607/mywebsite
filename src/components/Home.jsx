import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen pl-[20%] pr-8 flex items-center justify-center bg-white text-black relative"
    >
      <div className="max-w-2xl w-full text-left space-y-6">
        {/* Static Greeting */}
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          Hi, I am Mamatha Iruvaram
        </h1>

        {/* Typing Animation - Role Titles */}
        <div className="text-2xl md:text-3xl font-semibold text-gray-800 flex gap-2 items-center">
          <span>I am</span>
          <TypeAnimation
            sequence={[
              'a Full-Stack Developer', 2000,
              'a Frontend Developer', 2000,
              'a QA Engineer', 2000,
              'a Software Developer', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-emerald-600"
          />
        </div>

        {/* Short Intro */}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          I combine full-stack development with automation testing to ensure performant and bug-free applications.
        </p>

        {/* Resume Button */}
        <div className="flex gap-4">
          <a
            href="https://mamatha1607.github.io/mywebsite/MamathaIruvaram.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600 transition"
          >
            View Resume
          </a>
        </div>

        {/* Developer Illustration (bottom right) */}
        <img
          src="illustration.png"
          alt="Developer Illustration"
          className="absolute bottom-4 right-4 w-32 sm:w-40 h-auto opacity-90"
        />
      </div>

      {/* GitHub & LinkedIn Section - even cards */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full px-4 max-w-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 justify-center items-stretch">
          {/* LinkedIn Card */}
          <div className="bg-white px-3 py-3 rounded-md border border-emerald-200 shadow hover:shadow-md transition-all duration-200 flex flex-col justify-between min-h-[100px]">
            <h3 className="text-sm font-semibold text-emerald-600 mb-1">
              Say hi on LinkedIn
            </h3>
            <a
              href="https://www.linkedin.com/in/mamatha-iruvaram/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-emerald-700 transition"
            >
              <span className="p-1 rounded-full" style={{ backgroundColor: '#E8F4FB' }}>
                <FaLinkedin className="w-4 h-4" style={{ color: '#0077B5' }} />
              </span>
              <span className="text-black">LinkedIn</span>
            </a>
          </div>

          {/* GitHub Card */}
          <div className="bg-white px-3 py-3 rounded-md border border-gray-200 shadow hover:shadow-md transition-all duration-200 flex flex-col justify-between min-h-[100px]">
            <h3 className="text-sm font-semibold text-emerald-600 mb-1">
              See what I’ve been working on
            </h3>
            <a
              href="https://github.com/Mamatha1607"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-emerald-600 transition"
            >
              <span className="p-1 rounded-full bg-gray-200">
                <FaGithub className="w-4 h-4" style={{ color: '#000' }} />
              </span>
              <span className="text-black">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

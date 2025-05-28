import { TypeAnimation } from 'react-type-animation';

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen px-8 pt-24 text-center flex flex-col items-center justify-center
                 bg-gradient-to-br from-blue-100 via-indigo-100 to-teal-50 
                 dark:from-gray-800 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white"
    >
      <div className="max-w-2xl w-full px-2">
        <TypeAnimation
          sequence={['Hi, I am Mamatha Iruvaram', 2000, '', 1000]}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
<<<<<<< HEAD
          className="text-4xl md:text-8xl font-extrabold text-accent mb-10"
        />

        <p className="text-2xl text-gray-700 dark:text-gray-300 max-w-4xl">
=======
          className="text-2xl md:text-2xl font-bold text-accent mb-6"
        />

        <p className="text-lg md:text-1xl text-gray-700 dark:text-gray-300 leading-relaxed">
>>>>>>> cc61877 (Updated Projects section with flashcard functionality)
          Building clean, tested, and scalable web applications with a focus on performance and insight-driven decisions.
        </p>
      </div>
    </section>
  );
}

export default Home;

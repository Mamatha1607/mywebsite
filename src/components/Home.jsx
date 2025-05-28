import { TypeAnimation } from 'react-type-animation';


function Home() {
  return (
    <section
      id="home"
className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 bg-white dark:bg-dark text-gray-900 dark:text-white"

    >
      
      <div className="max-w-5xl">
        <TypeAnimation
          sequence={[
            'Hi, I am Mamatha Iruvaram',
            2000,
            '',
            1000,
          ]}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
          className="text-4xl md:text-8xl font-extrabold text-accent mb-10"
        />

        <p className="text-2xl text-gray-700 dark:text-gray-300 max-w-4xl">
          Building clean, tested, and scalable web applications with a focus on performance and insight-driven decisions.
        </p>
      </div>
    </section>
  );
}

export default Home;

function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 bg-white dark:bg-base text-gray-900 dark:text-white flex flex-col md:flex-row items-center justify-between gap-12"
    >
      {/* Text Content */}
      <div className="md:w-7/12 flex flex-col justify-center h-full text-left">
        <h2 className="text-2xs md:text-1xs font-bold mb-8 text-accent">About Me</h2>
        <p className="text-lg md:text-3xs text-gray-700 dark:text-gray-300 leading-relaxed">
          I’m Mamatha Iruvaram, an aspiring developer with a curious mind and a problem-solving heart.
          I enjoy building full stack applications that are not only functional but thoughtful systems
          that solve real problems and deliver real value.

          <br /><br />

          With a background in Computer Science Engineering and a Master’s in Information Systems from George Mason University,
          I’ve explored development, testing, and data analytics to understand how technology works from every angle.

          <br /><br />

          I believe in writing clean code, asking the right questions, and never settling for quick fixes.
          Whether I am developing a dynamic web application, ensuring quality through test automation,
          or uncovering patterns in data, I approach every project with intention and clarity.

          <br /><br />

          I am currently strengthening my skills across full stack development, test automation, and data analytics,
          always eager to build reliable systems, uncover insights, and deliver clean, scalable solutions.
        </p>
      </div>

      {/* Profile Image */}
      <div className="md:w-5/12 flex justify-center items-center h-full">
  <img
    src={`${import.meta.env.BASE_URL}Mamatha.jpg`} // ✅ case-sensitive!
    alt="Mamatha Iruvaram"
    className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-lg border-2 border-accent 
               shadow-[0_0_40px_rgba(102,252,241,0.6)] animate-pulse-glow"
  />
</div>
    </section>
  );
}

export default About;

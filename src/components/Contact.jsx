import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 scroll-mt-32 bg-white dark:bg-[#0B0C10] text-center"
    >
      <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-12">
  Let’s Work Together
      </h2>

      {/* Contact Form */}
      <form
        action="https://formspree.io/f/xeogbbzn"
        method="POST"
        className="max-w-xl mx-auto bg-gray-50 dark:bg-base p-8 rounded-xl shadow-lg space-y-6 text-left"
      >
        <div>
          <label className="block mb-2 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-3 rounded-md bg-white dark:bg-[#0B0C10] text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 rounded-md bg-white dark:bg-[#0B0C10] text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full p-3 rounded-md bg-white dark:bg-[#0B0C10] text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#1F2833] text-white font-bold py-3 rounded-md hover:bg-accent transition"

        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="mt-12 flex justify-center space-x-10 text-4xl text-accent">
        <a
          href="https://github.com/Mamatha1607"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-white transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/mamathairuvaram"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-white transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}

export default Contact;

import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-4 py-12 scroll-mt-32 bg-white dark:bg-[#0B0C10] text-center"
    >
      <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-8">
        Let’s Work Together
      </h2>

      {/* Contact Form */}
      <form
        action="https://formspree.io/f/xeogbbzn"
        method="POST"
        className="max-w-md mx-auto bg-gray-50 dark:bg-base p-4 rounded-lg shadow space-y-4 text-left text-xs"
      >
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-2 rounded-md bg-white dark:bg-[#0B0C10] text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 text-xs"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 rounded-md bg-white dark:bg-[#0B0C10] text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 text-xs"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Message</label>
          <textarea
            name="message"
            rows="4"
            required
            className="w-full p-2 rounded-md bg-white dark:bg-[#0B0C10] text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 text-xs"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#1F2833] text-white font-bold py-2 rounded-md hover:bg-accent transition text-xs"
        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="mt-8 flex justify-center space-x-6 text-lg text-accent">
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

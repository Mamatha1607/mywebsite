import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-16 bg-white text-center text-black"
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold text-emerald-600 mb-10">Let’s Work Together</h2>

      {/* Contact Form */}
      <form
        action="https://formspree.io/f/xeogbbzn"
        method="POST"
        className="max-w-md mx-auto bg-gray-50 border border-emerald-200 p-6 rounded-md shadow-md text-left space-y-4"
      >
        <div>
          <label className="block text-sm font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Message</label>
          <textarea
            name="message"
            rows="4"
            required
            className="w-full p-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-emerald-600 text-white font-semibold py-2 rounded-md hover:bg-emerald-700 transition"
        >
          Send Message
        </button>
      </form>

      {/* Social Icons */}
      <div className="mt-10 flex justify-center space-x-6">
        <a
          href="https://github.com/Mamatha1607"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-black hover:text-gray-800 transition"
        >
          <FaGithub className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com/in/mamathairuvaram"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-[#0077B5] hover:text-emerald-600 transition"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}

export default Contact;

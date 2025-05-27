import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Loyalty Program Management System',
    tech: 'Java, Spring Boot, Servlets, JSP, MySQL, JDBC, Android Studio, Apache Tomcat, RESTful APIs',
    link: 'https://github.com/Mamatha1607/CustomerLoyaltySystem-Java-Android.git',
    bullets: [
      'Architected a rewards system with backend integration and Oracle-powered data storage.',
      'Developed a mobile app using Android Studio and Retrofit for 1,000+ users.',
      'Improved API performance by 20% and reduced query execution time by 25%.',
    ],
  },
  {
    title: 'Automated E-Commerce Website Testing',
    tech: 'Selenium, TestNG, Java, Maven, Jenkins, GitHub, JIRA',
    link: null,
    bullets: [
      'Automated end-to-end flows like login, cart, and checkout using POM structure.',
      'Integrated test execution into Jenkins CI/CD with automated reporting.',
      'Cut regression testing effort by 70% and tracked 25+ bugs via JIRA.',
    ],
  },
  {
    title: 'Collaborative Task Manager',
    tech: 'React.js, Node.js, Express.js, PostgreSQL, JWT, Axios, bcrypt',
    link: 'https://github.com/Mamatha1607/Taskmanager.git',
    bullets: [
      'Built a full-stack task platform with secure JWT/bcrypt-based authentication.',
      'Supported 100+ users with real-time updates and RESTful APIs.',
      'Improved productivity with full CRUD features and optimized latency by 30%.',
    ],
  },
  {
    title: 'Student Survey Application',
    tech: 'Angular, Spring Boot, Node.js, MySQL, RESTful APIs, AWS, Azure',
    link: 'https://github.com/Mamatha1607/A-Full-Stack-Student-Survey-Application.git',
    bullets: [
      'Created an interactive survey platform with Angular and TypeScript.',
      'Handled 5,000+ responses with secure, role-based backend in Spring Boot.',
      'Deployed on AWS EC2/S3 with 99.9% uptime and 35% faster data retrieval.',
    ],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 scroll-mt-32 bg-gray-50 dark:bg-[#1F2833] text-center"
    >
      <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-16">
        Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-8 rounded-2xl border-2 border-accent bg-white dark:bg-base shadow-md hover:shadow-[0_0_30px_#66FCF1] transition-all"
          >
            <h3 className="text-2xl font-bold text-accent mb-3">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 italic text-lg">{project.tech}</p>
            <ul className="text-left space-y-2 text-gray-800 dark:text-gray-200 text-lg mb-4">
              {project.bullets.map((point, index) => (
                <li key={index}>• {point}</li>
              ))}
            </ul>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
              >
                <FaGithub /> View Code
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

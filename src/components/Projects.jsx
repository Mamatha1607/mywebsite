import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Loyalty Program Management System',
    tech: 'Java, Spring Boot, JSP, MySQL, Android',
    link: 'https://github.com/Mamatha1607/CustomerLoyaltySystem-Java-Android.git',
    bullets: [
      'Rewards system backend with Oracle DB.',
      'Android app for 1,000+ users.',
      '20% faster APIs, 25% faster queries.',
    ],
  },
  {
    title: 'Automated E-Commerce Testing',
    tech: 'Selenium, TestNG, Java, Jenkins',
    link: null,
    bullets: [
      'Tested flows: login, cart, checkout.',
      'CI/CD integration with reporting.',
      'Reduced regression effort by 70%.',
    ],
  },
  {
    title: 'Collaborative Task Manager',
    tech: 'React.js, Node.js, PostgreSQL, JWT',
    link: 'https://github.com/Mamatha1607/Taskmanager.git',
    bullets: [
      'Full-stack CRUD task app.',
      'JWT auth for 100+ users.',
      'Latency improved by 30%.',
    ],
  },
  {
    title: 'Student Survey Application',
    tech: 'Angular, Spring Boot, AWS, MySQL',
    link: 'https://github.com/Mamatha1607/A-Full-Stack-Student-Survey-Application.git',
    bullets: [
      'Survey app with Angular UI.',
      'Handled 5,000+ secure responses.',
      '35% faster data access, 99.9% uptime.',
    ],
  },
  {
    title: 'Customer Churn Prediction',
    tech: 'Python, Scikit-learn, Pandas, Seaborn',
    link: null,
    bullets: [
      'Logistic regression with 82% accuracy.',
      'Processed 7,000+ customer records.',
      'Identified top churn factors.',
      'Training time cut by 40%.',
      'Visualized churn patterns.',
    ],
  },
];

function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="projects"
      className="min-h-screen px-4 py-12 scroll-mt-32 bg-gray-50 dark:bg-[#1F2833] text-center"
    >
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="p-4 rounded-xl border border-accent bg-white dark:bg-base shadow-md cursor-pointer hover:shadow-[0_0_20px_#66FCF1] transition-all"
            onClick={() => toggleCard(index)}
          >
            <h3 className="text-sm font-semibold text-accent mb-1">{project.title}</h3>
            <p className="text-xs text-gray-700 dark:text-gray-300 mb-2 italic">{project.tech}</p>
            {openIndex === index && (
              <ul className="text-left space-y-1 text-gray-800 dark:text-gray-200 text-xs mb-3">
                {project.bullets.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent text-xs font-medium hover:underline"
              >
                <FaGithub className="text-base" /> View Code
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;

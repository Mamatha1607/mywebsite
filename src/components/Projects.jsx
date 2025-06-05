function Projects() {
  const projects = [
    {
      title: 'Customer Loyalty Program',
      image: 'loyalty.png',
      description: 'Manage customer loyalty points and rewards efficiently.',
      stack: ['Java', 'Spring Boot', 'JSP', 'MySQL', 'Android'],
      github: 'https://github.com/Mamatha1607/CustomerLoyaltySystem-Java-Android',
    },
    {
      title: 'E-Commerce Testing',
      image: 'ecommerce.png',
      description: 'Automation testing for an e-commerce platform.',
      stack: ['Selenium', 'TestNG', 'Java', 'Maven', 'Jenkins'],
    },
    {
      title: 'Task Manager App',
      image: 'Taskmanager.png',
      description: 'A secure task manager built with React and Node.js.',
      stack: ['React', 'Node.js', 'PostgreSQL', 'Express', 'JWT'],
      github: 'https://github.com/Mamatha1607/Taskmanager',
    },
    {
      title: 'Student Survey App',
      image: 'survey.png',
      description: 'A full-stack survey platform deployed on the cloud.',
      stack: ['Angular', 'Spring Boot', 'MySQL', 'AWS', 'Azure'],
      github: 'https://github.com/Mamatha1607/A-Full-Stack-Student-Survey-Application',
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-4 py-12 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-emerald-600 mb-8"> Projects I've Built</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-emerald-500 rounded-md shadow-sm hover:shadow-md transition bg-white"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover rounded-t-md"
              />
              <div className="p-3">
                <h3 className="text-sm font-bold text-emerald-700">{project.title}</h3>
                <p className="text-xs text-gray-700 mt-1 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 text-[10px] mb-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 border border-gray-300 px-2 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-emerald-600 font-semibold underline"
                  >
                    View Code →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

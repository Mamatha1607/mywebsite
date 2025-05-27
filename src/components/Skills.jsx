import { FaCode, FaChartLine, FaBug, FaCloud, FaTools } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

function Skills() {
  const skillGroups = [
    {
      title: 'Programming Languages',
      items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C/C++'],
    },
    {
      title: 'Web Development',
      items: ['HTML', 'CSS', 'React', 'AngularJS', 'Node.js', 'Spring Boot'],
    },
    {
      title: 'Testing & QA',
      items: ['Selenium WebDriver', 'JUnit', 'TestNG', 'Postman', 'Test Automation', 'Manual Testing'],
    },
    {
      title: 'DevOps & Tools',
      items: ['Git', 'GitHub', 'GitHub Actions', 'Maven', 'Jenkins', 'JIRA', 'Confluence'],
    },
    {
      title: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'SQL Server'],
    },
    {
      title: 'Cloud & Deployment',
      items: ['AWS (EC2, S3)', 'Docker', 'CI/CD Pipelines'],
    },
  ];

  const services = [
    { icon: <FaCode className="text-3xl text-accent" />, text: 'Web Development' },
    { icon: <FaChartLine className="text-3xl text-accent" />, text: 'Data Analysis' },
    { icon: <FaBug className="text-3xl text-accent" />, text: 'Automation & Manual Testing' },
    { icon: <FaCloud className="text-3xl text-accent" />, text: 'Cloud Deployment' },
    { icon: <FaTools className="text-3xl text-accent" />, text: 'Full-Stack App Building' },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20 scroll-mt-32 bg-white dark:bg-[#0B0C10] text-gray-900 dark:text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left: What I Can Do */}
        <div className="md:w-5/12 space-y-8">
          <h2 className="text-4xl font-bold text-accent mb-6">💼 What I Can Do</h2>
          <div className="space-y-6">
            {services.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 text-lg font-medium p-5 rounded-xl border border-accent bg-white dark:bg-base shadow hover:scale-105 transition-transform"
              >
                {item.icon}
                <TypeAnimation
                  sequence={[item.text, 2000, '']}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-xl text-gray-800 dark:text-gray-200"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Skills Section */}
        <div className="md:w-7/12">
          <h2 className="text-5xl font-bold text-accent mb-12 text-center md:text-left">🛠 Skills</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="p-6 rounded-2xl border-2 border-accent bg-gray-50 dark:bg-base shadow-lg hover:shadow-2xl transition-all"
              >
                <h3 className="text-2xl font-bold text-accent mb-4">{group.title}</h3>
                <ul className="space-y-2 text-left text-lg text-gray-800 dark:text-gray-200">
                  {group.items.map((skill) => (
                    <li key={skill}>• {skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

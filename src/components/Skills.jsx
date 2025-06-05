import { TypeAnimation } from 'react-type-animation';
import { FaCode, FaChartLine, FaBug, FaCloud, FaTools } from 'react-icons/fa';

function Skills() {
  const services = [
    { icon: <FaCode className="text-sm text-emerald-600" />, text: 'Web Development' },
    { icon: <FaChartLine className="text-sm text-emerald-600" />, text: 'Data Analysis' },
    { icon: <FaBug className="text-sm text-emerald-600" />, text: 'Testing & QA' },
    { icon: <FaCloud className="text-sm text-emerald-600" />, text: 'Cloud Deployment' },
    { icon: <FaTools className="text-sm text-emerald-600" />, text: 'Full-Stack App Building' },
  ];

  const skillGroups = [
    {
      title: 'Programming Languages',
      items: ['Java', 'Python', 'JavaScript', 'C/C++', 'TypeScript', 'Go'],
    },
    {
      title: 'Frontend Development',
      items: ['AngularJS', 'Bootstrap', 'Vue.js', 'React.js', 'HTML', 'CSS'],
    },
    {
      title: 'Backend Development',
      items: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Bcrypt', 'Spring Boot', 'Servlet/JSP'],
    },
    {
      title: 'Data Analysis',
      items: ['SQL', 'Pandas', 'NumPy', 'Data Visualization', 'EDA'],
    },
    {
      title: 'Testing & QA',
      items: ['CI/CD Testing', 'Selenium', 'JUnit', 'TestNG', 'Postman', 'Automation', 'Manual Testing'],
    },
    {
      title: 'DevOps & Tools',
      items: ['Jenkins', 'Maven', 'Agile', 'JIRA', 'Confluence', 'Git', 'GitHub'],
    },
    {
      title: 'Databases',
      items: ['MySQL', 'Oracle', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: 'Cloud & Deployment',
      items: ['Azure', 'GCP', 'Docker', 'AWS (S3, EC2)', 'CI/CD Pipelines'],
    },
  ];

  return (
    <section id="skills" className="min-h-screen px-6 py-16 bg-white text-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left: What I Can Do */}
        <div className="md:w-4/12 space-y-6">
          <h2 className="text-base font-bold text-emerald-600 mb-2"> Look What I Can Do</h2>
          <div className="space-y-3">
            {services.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm font-medium p-3 border border-emerald-500 rounded-md bg-white shadow hover:scale-[1.02] transition"
              >
                {item.icon}
                <TypeAnimation
                  sequence={[item.text, 2000, '']}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-sm text-gray-800"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Skills Grid */}
        <div className="md:w-8/12">
          <h2 className="text-lg font-bold text-emerald-600 mb-6 text-center md:text-left">My  Skill Page</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillGroups.map((group, index) => (
              <div
                key={index}
                className="p-4 border border-emerald-500 bg-white shadow-sm rounded-md flex flex-col h-full"
              >
                <div className="bg-emerald-600 text-white text-sm font-semibold px-3 py-2">
                  {group.title}
                </div>
                <ul className="flex flex-wrap gap-2 mt-4 text-sm">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="bg-gray-100 text-black px-3 py-1 rounded-full border border-gray-300 text-xs"
                    >
                      {item}
                    </li>
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

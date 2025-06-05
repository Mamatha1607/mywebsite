function Experience() {
  const experiences = [
    {
      title: 'Programmer Analyst — Cognizant',
      date: 'Dec 2021 – Jul 2023 | India',
      points: [
        'Designed and maintained automated test frameworks using Selenium WebDriver, JUnit, and Java, automating over 300+ test cases and ensuring high quality assurance across multiple enterprise applications.',
        'Developed and debugged backend systems and APIs in Java, handling over 100K requests per day and optimizing response time by 30%, contributing to scalable enterprise-grade solutions.',
        'Implemented continuous testing into DevOps pipelines with Jenkins, Maven, and GitHub, improving automated build/test cycles and reducing manual intervention by 70%.',
        'Collaborated with Agile Scrum teams over 20+ sprints, contributing to sprint planning, backlog refinement, and release readiness through detailed defect tracking and root cause analysis in JIRA.',
        'Worked closely with cross-functional teams to validate product lifecycle stages and align testing strategies to evolving business requirements.',
        'Actively communicated with development, QA, and management teams, leveraging interpersonal skills to ensure clear reporting on test results, defect priorities, and quality status.',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-16 bg-white text-black"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-emerald-600 text-center mb-12">
          Work Experience 
        </h2>

        <div className="relative border-l-4 border-emerald-600 pl-8 space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Bubble dot */}
              <div className="absolute left-[-19px] top-1 w-6 h-6 bg-white border-4 border-emerald-600 rounded-full shadow-md z-10"></div>

              {/* Experience Card */}
              <div className="bg-gray-50 border border-emerald-200 p-5 rounded-md shadow hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-emerald-700">{exp.title}</h3>
                <p className="text-xs text-gray-600 mb-3">{exp.date}</p>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-800">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

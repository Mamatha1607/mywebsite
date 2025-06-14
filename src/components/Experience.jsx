function Experience() {
  const experiences = [
    {
      title: 'Software Engineer - Cognizant',
      date: 'Dec 2021 – Jul 2023 | India',
      points: [
        'Developed and maintained RESTful APIs using Java and Spring Boot and Maven supporting 5,000+ daily users and increasing system efficiency by 30% through backend optimization.',
        'Built interactive, responsive UI components with React.js, JavaScript and Typescript leading to a 20% increase in user engagement and positive stakeholder feedback.',
        'Optimized database queries and schemas in MySQL and PostgreSQL, accelerating data retrieval by 25% and enabling seamless scaling for larger datasets.',
        'Utilized Jenkins for CI/CD automation and Postman for API testing, streamlining the build, deployment, and validation process across environments.',
        'Tracked issues and managed sprints in Jira, contributing to timely project delivery and effective Agile collaboration.',
        'Delivered multiple product releases in Agile teams by leading code reviews and onboarding 2+ junior developers, reducing post-release defects and boosting team productivity.',
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

function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-20 scroll-mt-32 bg-white dark:bg-[#0B0C10] text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-accent text-center mb-16">
          Experience
        </h2>

        <div className="bg-gray-100 dark:bg-base border-2 border-accent p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">
            Programmer Analyst — Cognizant
          </h3>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            December 2021 – Jul 2023 | India
          </p>
          <ul className="list-disc list-inside space-y-5 text-lg md:text-xl text-gray-800 dark:text-gray-200">
            <li>
              Designed and maintained automated test frameworks using Selenium WebDriver, JUnit, and Java, automating over 300+ test cases and ensuring high quality assurance across multiple enterprise applications.
            </li>
            <li>
              Developed and executed unit, system, and integration tests for backend services and RESTful APIs, handling over 100K API requests/day, and optimizing product reliability by 30%.
            </li>
            <li>
              Implemented continuous testing into DevOps pipelines with Jenkins, Maven, and GitHub, improving automated build/test cycles and reducing manual intervention by 70%.
            </li>
            <li>
              Collaborated with Agile Scrum teams over 20+ sprints, contributing to sprint planning, backlog refinement, and release readiness through detailed defect tracking and root cause analysis in JIRA.
            </li>
            <li>
              Worked closely with cross-functional teams to validate product lifecycle stages and align testing strategies to evolving business requirements.
            </li>
            <li>
              Actively communicated with development, QA, and management teams, leveraging interpersonal skills to ensure clear reporting on test results, defect priorities, and quality status.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;

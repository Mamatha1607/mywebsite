function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen px-4 py-12 scroll-mt-32 bg-white dark:bg-[#0B0C10] text-gray-900 dark:text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-accent text-center mb-10">
          Experience
        </h2>

        <div className="bg-gray-100 dark:bg-base border border-accent p-4 rounded-xl shadow hover:shadow-xl transition-all">
          <h3 className="text-sm md:text-base font-semibold mb-2">
            Programmer Analyst — Cognizant
          </h3>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-4">
            December 2021 – Jul 2023 | India
          </p>
          <ul className="list-disc list-inside space-y-2 text-xs text-gray-800 dark:text-gray-200">
            <li>
              Designed and maintained test frameworks using Selenium WebDriver, JUnit, and Java, automating 300+ test cases.
            </li>
            <li>
              Executed unit/system/integration tests for backend and RESTful APIs, improving product reliability by 30%.
            </li>
            <li>
              Integrated Jenkins, Maven, GitHub into pipelines, reducing manual testing by 70%.
            </li>
            <li>
              Participated in 20+ sprints for sprint planning, defect tracking, and JIRA-based QA readiness.
            </li>
            <li>
              Coordinated with cross-functional teams to align testing with evolving requirements.
            </li>
            <li>
              Communicated test results and quality metrics clearly to dev and management teams.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;

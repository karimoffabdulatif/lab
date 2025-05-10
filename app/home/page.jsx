import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto px-5 lg:px-12">
      {/* Hero Section */}
      <section className="text-center">
        <div className="flex flex-col items-center text-center px-4 lg:pb-12">
          <h1 className="text-2xl sm:text-3xl pb-5 pt-4 lg:text-5xl font-semibold w-full lg:w-[700px] lg:pt-[80px] text-blue-950">
            Inspire Students with Immersive Learning
          </h1>

          <p className="text-base sm:text-lg pb-4 lg:text-xl w-full lg:w-[700px] lg:pt-[40px] text-gray-600">
            Intro Lab.UZ website can be a springboard for university success.
            Attracting students is key. Lab.UZ virtual laboratories strengthen our
            knowledge and skills in life by enhancing competence and confidence.
          </p>
        </div>

        <Link href="/labaratory">
          <button className="bg-blue-700 animate-pulse z-10 text-white p-3 font-semibold rounded-[8px] transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-800">
            Visiting the virtual laboratory
          </button>
        </Link>
      </section>

      {/* Statistics Section */}
      <section className="lg:flex justify-center pt-10">
        <div className="w-full bg-blue-200 rounded-3xl shadow-xl p-4 lg:p-8 space-y-6">
          {/* First Block */}
          <div className="lg:flex lg:justify-between items-center p-5 rounded-xl bg-gray-100 hover:bg-gray-200 transition">
            <div className="pb-2 lg:pb-0 lg:max-w-[70%] text-gray-700 text-base sm:text-lg lg:text-2xl font-medium">
              Students who passed all of their gateway courses have retention rates up to 42% higher than others during the critical first two years of college.
            </div>
            <div className="bg-green-100 text-green-600 font-semibold text-base sm:text-lg lg:text-xl px-3 lg:px-4 py-2 rounded-full shadow-md hover:scale-105 transition mt-2 lg:mt-0">
              +42%
            </div>
          </div>

          {/* Second Block */}
          <div className="lg:flex lg:justify-between items-center p-4 rounded-xl bg-gray-100 hover:bg-gray-200 transition">
            <div className="lg:max-w-[70%] text-gray-700 text-base sm:text-lg lg:text-2xl font-medium">
              Gamedic course interfaces are proven to captivate students, boosting their retention by an impressive 25%.
            </div>
            <div className="bg-green-100 text-green-600 font-semibold text-base sm:text-lg lg:text-xl px-4 py-2 rounded-full shadow-md hover:scale-105 transition mt-2 lg:mt-0">
              +25%
            </div>
          </div>

          {/* Third Block */}
          <div className="lg:flex lg:justify-between items-center p-4 rounded-xl bg-gray-100 hover:bg-gray-200 transition">
            <div className="lg:max-w-[70%] text-gray-700 text-base sm:text-lg lg:text-2xl font-medium">
              Underrepresented students are less likely to persist if they perform below a C-, but more likely to persist if they get a C or better.
            </div>
            <div className="bg-green-100 text-green-600 font-semibold text-base sm:text-lg lg:text-xl px-4 py-2 rounded-full shadow-md hover:scale-105 transition mt-2 lg:mt-0">
              ≥
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-25 pb-25 px-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-blue-950 opacity-80 w-full sm:w-[600px]">
          Institutions Use Lab.UZ to Remove Roadblocks for Faculty
        </h2>

        {/* First Feature */}
        <div className="flex flex-col md:flex-row rounded-2xl bg-blue-100 overflow-hidden shadow-2xl mt-10">
          <div className="w-full md:w-1/2 p-10 space-y-6">
            <p className="text-sm font-semibold text-gray-700">
              No need for extra grading or planning time
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 leading-tight">
              Students look forward to learning at their own pace
            </h2>
            <p className="text-gray-700 text-base">
              Instructors assign Labster's virtual science labs because it helps them engage their students
              without adding to their busy workloads. Higher engagement leads to better learning, grades, and
              retention rates.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 pt-4">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-blue-950">C- to B+</p>
                <p className="text-gray-600 text-base sm:text-xl w-full sm:w-[300px]">
                  Labster increases student grades by an average of a full letter grade or higher.
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-blue-950">82%</p>
                <p className="text-gray-600 text-base sm:text-xl w-full sm:w-[300px]">
                  of students are highly engaged in Labster.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full pl-0 md:pl-[90px] md:w-1/2">
            <img
              src="/section1.jpg"
              alt="Student using virtual lab"
              className="w-full h-auto md:w-[600px] md:h-[453px] object-cover"
            />
          </div>
        </div>

        {/* Second Feature */}
        <div className="flex flex-col md:flex-row rounded-2xl bg-amber-100 overflow-hidden shadow-2xl mt-10">
          <div className="w-full md:w-1/2 p-10 space-y-6">
            <p className="text-sm font-semibold text-gray-700">
              Higher Pass Rates
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 leading-tight">
              Higher Retention Rates
            </h2>
            <p className="text-gray-700 text-base">
              Labster has been proven to increase student grades and pass rates. Success in early gateway science courses can increase the likelihood of a student continuing in STEM and staying enrolled.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 pt-4">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-blue-950">34%</p>
                <p className="text-gray-600 text-base sm:text-xl w-full sm:w-[300px]">
                  decrease in DFW rates (drop-fail-withdraw) across multiple semesters in three pairs of courses using Labster.
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-blue-950">93%</p>
                <p className="text-gray-600 text-base sm:text-xl w-full sm:w-[300px]">
                  of students report a positive experience with Labster
                </p>
              </div>
            </div>
          </div>

          <div className="w-full pl-0 md:pl-[90px] md:w-1/2">
            <img
              src="/sec2.jpg"
              alt="Student using virtual lab"
              className="w-full h-auto md:w-[600px] md:h-[453px] object-cover"
            />
          </div>
        </div>

        {/* Third Feature */}
        <div className="flex flex-col md:flex-row rounded-2xl bg-emerald-100 overflow-hidden shadow-2xl mt-10">
          <div className="w-full md:w-1/2 p-10 space-y-6">
            <p className="text-sm font-semibold text-gray-700">
              Increase Access
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 leading-tight">
              Dismantle Barriers to Achievement
            </h2>
            <p className="text-gray-700 text-base">
              Expand STEM equity and access among your students. Labster is designed to meet diverse student needs and offer a more consistent, accessible science learning experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 pt-4">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-blue-950">24%</p>
                <p className="text-gray-600 text-base sm:text-xl w-full sm:w-[300px]">
                  pre-to-post test knowledge increases for the lowest-performing students in Labster.
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-blue-950">9/10</p>
                <p className="text-gray-600 text-base sm:text-xl w-full sm:w-[300px]">
                  educators say they would recommend Labster to other educators or institutions.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full pl-0 md:pl-[90px] md:w-1/2">
            <img
              src="/sec3.jpg"
              alt="Student using virtual lab"
              className="w-full h-auto md:w-[600px] md:h-[453px] object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

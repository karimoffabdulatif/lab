import React from "react";

const Why = () => {
  return (
    <section className="container px-4 py-10">
      <div className="text-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
            Why You Should Join Our Community?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold  mb-4">Learning and Growth</h3>
              <p className="text-gray-700 text-base">
                In our community, learning and growth are essential components of continuous development. We offer a
                variety of resources and opportunities to enhance your knowledge and skills.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold  mb-4">Networking</h3>
              <p className="text-gray-700 text-base">
                Our community gives you the opportunity to connect with professionals in your field. This opens up new
                opportunities and collaborations.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold  mb-4">Support and Motivation</h3>
              <p className="text-gray-700 text-base">
                We are always here to support you. Our community members motivate each other and celebrate every success
                together.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold  mb-4">
              Joining Our Community:
            </h3>
            <p className="text-gray-700 sm:w-[400px] mx-auto mb-6 text-base">
              When you join our community, you will not only gain access to valuable resources and knowledge but also
              collaborate with a team to achieve new milestones. Our goal is to help every member grow and succeed.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;

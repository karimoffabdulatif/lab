const About = () => {
  return (
    <div className="container  px-4 lg:px-17 py-8">
      <div className="bg-blue-100 rounded-xl shadow-lg p-6 mb-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Lab.UZ</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Lab.UZ is a virtual physics laboratory aimed at providing an interactive and
          engaging experience for students and learners interested in the world of physics.
          The platform offers a wide range of virtual experiments, simulations, and tools
          to help users understand complex physical concepts and principles in an intuitive
          and hands-on way. Whether you are a high school student, university learner, or
          someone curious about physics, Lab.UZ offers the perfect environment for practical
          learning and exploration.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to revolutionize the way physics is taught and understood by
            providing interactive tools and resources that make learning physics fun, accessible,
            and effective. Through our virtual experiments and simulations, we aim to inspire the
            next generation of physicists and innovators, giving them the opportunity to explore
            and learn at their own pace.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Interactive simulations for various physics experiments.</li>
            <li>Virtual labs for hands-on learning experiences.</li>
            <li>Detailed explanations of physical concepts and theories.</li>
            <li>Real-time feedback and assessments to track progress.</li>
            <li>Accessible on any device, anywhere, anytime.</li>
          </ul>
        </div>

        <div className="bg-blue-100 p-6 rounded-xl mt-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Join Us Today!</h2>
          <p className="text-lg text-gray-700">
            Explore the fascinating world of physics through our virtual platform. Lab.UZ is designed
            for students, educators, and physics enthusiasts alike. Start your journey of discovery
            today by signing up and experiencing the power of virtual learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

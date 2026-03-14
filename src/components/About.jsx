import React from 'react';

function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Background Card */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
            <div className="mb-4">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.753 2 16.253s4.5 10 10 10 10-4.5 10-10S17.5 6.253 12 6.253z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Background</h3>
            <p className="text-gray-700 leading-relaxed">
              Sikya is a passionate law student who brings a unique blend of legal knowledge and technological innovation to everything she does. She is hardworking and dedicated to her studies.
            </p>
          </div>

          {/* Education Card */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
            <div className="mb-4">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.753 2 16.253s4.5 10 10 10 10-4.5 10-10S17.5 6.253 12 6.253z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Education</h3>
            <p className="text-gray-700 leading-relaxed">
              Currently a Law Student at the American University of Nigeria, Yola. Previously completed secondary education at Winners Comprehensive High School with distinction.
            </p>
          </div>

          {/* Traits Card */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
            <div className="mb-4">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Key Traits</h3>
            <p className="text-gray-700 leading-relaxed">
              Friendly, hardworking, and passionate about both law and technology. Committed to using innovation to make a positive impact on society and her community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

import React from 'react';

function Hero() {
  return (
    <section id="home" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center justify-center scroll-mt-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Sikya Kwambo
            </h1>
            <p className="text-xl sm:text-2xl text-blue-600 font-semibold mb-6">
              Law Student | Tech Enthusiast | Azure Tech Team Member
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Sikya Kwambo is a passionate and friendly law student at the American University of Nigeria, Yola. She completed her secondary education at Winners Comprehensive High School. She is dedicated to learning, leadership, and using technology to make positive impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center font-semibold"
              >
                Get In Touch
              </a>
              <a
                href="#about"
                className="inline-block px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 text-center font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right - Photo Placeholder */}
          <div className="flex justify-center items-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-xl flex items-center justify-center hover:shadow-2xl transition-shadow duration-300 animate-fadeIn">
              <div className="text-center">
                <svg className="w-24 h-24 text-blue-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <p className="text-blue-600 font-semibold">Photo Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

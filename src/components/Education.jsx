import React from 'react';

function Education() {
  const educationItems = [
    {
      institution: 'American University of Nigeria, Yola',
      degree: 'Law Student',
      year: 'Current',
      description: 'Pursuing a degree in Law with focus on legal research and technology integration.',
      icon: '🎓',
    },
    {
      institution: 'Winners Comprehensive High School',
      degree: 'Secondary Education',
      year: 'Completed',
      description: 'Completed secondary education with excellent academic performance and leadership roles.',
      icon: '📚',
    },
  ];

  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded"></div>
        </div>

        <div className="space-y-8">
          {educationItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 card-hover border-l-4 border-blue-600"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{item.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-900">{item.degree}</h3>
                  </div>
                  <p className="text-lg text-blue-600 font-semibold">{item.institution}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                    {item.year}
                  </span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

import React from 'react';

function Experience() {
  const experiences = [
    {
      company: 'Azure Tech',
      position: 'Team Member',
      description: 'Actively involved in technology projects and innovation initiatives. Contributing to the team\'s mission of leveraging technology for positive change.',
      highlights: [
        'Collaborate on technology and innovation projects',
        'Support team initiatives and strategic planning',
        'Bring legal perspective to tech solutions',
        'Foster innovation and creative problem-solving',
      ],
      icon: '💼',
    },
  ];

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 card-hover border-t-4 border-blue-600"
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="text-4xl">{exp.icon}</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">{exp.position}</h3>
                  <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">{exp.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exp.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

import React from 'react';

function Skills() {
  const skills = [
    {
      category: 'Legal Research',
      icon: '⚖️',
      description: 'Strong research capabilities in legal studies and case analysis.'
    },
    {
      category: 'Communication',
      icon: '💬',
      description: 'Excellent verbal and written communication skills for presenting ideas clearly.'
    },
    {
      category: 'Leadership',
      icon: '👥',
      description: 'Proven ability to lead teams and inspire others toward common goals.'
    },
    {
      category: 'Technology Collaboration',
      icon: '🤝',
      description: 'Comfortable working at the intersection of law and technology.'
    },
    {
      category: 'Critical Thinking',
      icon: '🧠',
      description: 'Strong analytical and problem-solving capabilities.'
    },
    {
      category: 'Innovation',
      icon: '💡',
      description: 'Creative approach to finding practical solutions and improvements.'
    },
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 card-hover hover:bg-blue-50 group"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{skill.category}</h3>
              <p className="text-gray-700 leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Always Learning & Growing</h3>
          <p className="text-lg opacity-90">
            Sikya is committed to continuous learning and professional development in both legal and technological domains.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;

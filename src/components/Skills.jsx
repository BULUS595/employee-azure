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
      description: 'Excellent verbal and written communication skills.'
    },
    {
      category: 'Leadership',
      icon: '👥',
      description: 'Proven ability to lead teams and inspire others.'
    },
    {
      category: 'Technology Collaboration',
      icon: '🤝',
      description: 'Comfortable at the intersection of law and technology.'
    },
    {
      category: 'Critical Thinking',
      icon: '🧠',
      description: 'Strong analytical and problem-solving capabilities.'
    },
    {
      category: 'Innovation',
      icon: '💡',
      description: 'Creative approach to finding practical solutions.'
    },
  ];

  return (
    <section id="skills" style={{
      padding: '64px 20px',
      backgroundColor: '#f9fafb',
      scrollMarginTop: '64px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '16px'
          }}>Skills</h2>
          <div style={{
            width: '60px',
            height: '4px',
            background: 'linear-gradient(90deg, #60a5fa, #2563eb)',
            borderRadius: '9999px',
            margin: '16px auto 0'
          }}></div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 1024 ? 'repeat(3, 1fr)' : window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr',
          gap: '24px',
          marginBottom: '32px'
        }}>
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                transition: 'all 0.3s',
                borderTop: '3px solid #2563eb',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-32px)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderTopColor = '#60a5fa';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderTopColor = '#2563eb';
              }}
            >
              <div style={{
                fontSize: '48px',
                marginBottom: '16px',
                transition: 'transform 0.3s',
                display: 'block'
              }}>
                {skill.icon}
              </div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '8px'
              }}>{skill.category}</h3>
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                lineHeight: '1.6'
              }}>{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div style={{
          background: 'linear-gradient(to right, #2563eb, #2563eb)',
          borderRadius: '12px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          padding: '32px',
          textAlign: 'center',
          color: '#fff'
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '12px'
          }}>Always Learning & Growing</h3>
          <p style={{
            fontSize: '18px',
            opacity: 0.9
          }}>
            Sikya is committed to continuous learning and professional development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;

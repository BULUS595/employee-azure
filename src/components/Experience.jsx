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
    <section id="experience" style={{
      padding: '64px 20px',
      backgroundColor: '#fff',
      scrollMarginTop: '64px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '16px'
          }}>Experience</h2>
          <div style={{
            width: '60px',
            height: '4px',
            background: 'linear-gradient(90deg, #60a5fa, #2563eb)',
            borderRadius: '9999px',
            margin: '16px auto 0'
          }}></div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {experiences.map((exp, index) => (
            <div
              key={index}
              style={{
                background: 'linear-gradient(to right, #f0f9ff, #fff)',
                padding: '32px',
                borderRadius: '12px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                borderTop: '4px solid #2563eb',
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
                <span style={{ fontSize: '32px' }}>{exp.icon}</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#1f2937'
                  }}>{exp.position}</h3>
                  <p style={{
                    fontSize: '18px',
                    color: '#2563eb',
                    fontWeight: '600'
                  }}>{exp.company}</p>
                </div>
              </div>
              
              <p style={{ color: '#6b7280', lineHeight: '1.6', marginBottom: '24px' }}>{exp.description}</p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr',
                gap: '16px'
              }}>
                {exp.highlights.map((highlight, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{
                      fontSize: '20px',
                      color: '#2563eb',
                      marginTop: '4px',
                      flexShrink: 0
                    }}>✓</span>
                    <span style={{ color: '#6b7280' }}>{highlight}</span>
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

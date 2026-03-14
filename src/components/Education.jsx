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
    <section id="education" style={{
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
          }}>Education</h2>
          <div style={{
            width: '60px',
            height: '4px',
            background: 'linear-gradient(90deg, #60a5fa, #2563eb)',
            borderRadius: '9999px',
            margin: '16px auto 0'
          }}></div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {educationItems.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#fff',
                padding: '32px',
                borderRadius: '12px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                borderLeft: '4px solid #2563eb',
                transition: 'all 0.3s',
                cursor: 'pointer'
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px', gap: '24px', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '24px' }}>{item.icon}</span>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#1f2937'
                    }}>{item.degree}</h3>
                  </div>
                  <p style={{
                    fontSize: '16px',
                    color: '#2563eb',
                    fontWeight: '600'
                  }}>{item.institution}</p>
                </div>
                <div style={{
                  display: 'inline-block',
                  backgroundColor: '#dbeafe',
                  color: '#1e40af',
                  padding: '8px 16px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                  {item.year}
                </div>
              </div>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

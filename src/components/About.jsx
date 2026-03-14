import React from 'react';

function About() {
  return (
    <section id="about" style={{
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
          }}>About Me</h2>
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
          gridTemplateColumns: window.innerWidth > 768 ? 'repeat(3, 1fr)' : '1fr',
          gap: '32px'
        }}>
          {[{
            title: 'Background',
            icon: '📍',
            desc: 'Sikya is a passionate law student who brings a unique blend of legal knowledge and technological innovation to everything she does.'
          }, {
            title: 'Education',
            icon: '📚',
            desc: 'Currently a Law Student at the American University of Nigeria, Yola. Previously completed secondary education at Winners Comprehensive High School.'
          }, {
            title: 'Key Traits',
            icon: '⚡',
            desc: 'Friendly, hardworking, and passionate about both law and technology. Committed to using innovation to make a positive impact.'
          }].map((item, idx) => (
            <div key={idx} style={{
              backgroundColor: '#f0f9ff',
              padding: '32px',
              borderRadius: '12px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.transform = 'translateY(-8px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <div style={{ marginBottom: '16px', fontSize: '24px' }}>{item.icon}</div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '12px'
              }}>{item.title}</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

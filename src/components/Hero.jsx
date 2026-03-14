import React from 'react';

function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
      padding: '60px 20px',
      paddingTop: '80px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
          gap: '48px',
          alignItems: 'center'
        }}>
          {/* Left Content */}
          <div>
            <h1 style={{
              fontSize: window.innerWidth > 768 ? '48px' : '36px',
              fontWeight: 'bold',
              color: '#1e40af',
              marginBottom: '16px'
            }}>
              Sikya Kwambo
            </h1>
            <p style={{
              fontSize: '24px',
              color: '#2563eb',
              fontWeight: 'bold',
              marginBottom: '16px'
            }}>
              Law Student | Tech Enthusiast | Azure Tech Team Member
            </p>
            <p style={{
              fontSize: '18px',
              color: '#374151',
              marginBottom: '32px',
              lineHeight: '1.8',
              maxWidth: '600px'
            }}>
              Sikya Kwambo is a passionate and friendly law student at the American University of Nigeria, Yola. She completed her secondary education at Winners Comprehensive High School. She is dedicated to learning, leadership, and using technology to make positive impact.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="#contact"
                style={{
                  padding: '12px 32px',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#1e40af'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
              >
                Get In Touch
              </a>
              <a
                href="#about"
                style={{
                  padding: '12px 32px',
                  border: '2px solid #2563eb',
                  color: '#2563eb',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#f0f9ff'}
                onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right - Photo */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src="/sikya.jpg"
              alt="Sikya Kwambo"
              style={{
                width: window.innerWidth > 768 ? '320px' : '256px',
                height: window.innerWidth > 768 ? '320px' : '256px',
                borderRadius: '20px',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                objectFit: 'cover',
                transition: 'box-shadow 0.3s, transform 0.3s',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

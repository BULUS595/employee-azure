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
          display: 'flex',
          flexDirection: window.innerWidth > 768 ? 'row' : 'column',
          gap: window.innerWidth > 768 ? '48px' : '32px',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Image - on mobile appears first */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            order: window.innerWidth > 768 ? 2 : 1,
            minWidth: window.innerWidth > 768 ? '50%' : '100%'
          }}>
            <img
              src="/sikya.jpg"
              alt="Sikya Kwambo"
              style={{
                width: window.innerWidth > 768 ? '320px' : '240px',
                height: window.innerWidth > 768 ? '320px' : '240px',
                borderRadius: '20px',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15)',
                objectFit: 'cover',
                transition: 'box-shadow 0.3s, transform 0.3s',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          </div>

          {/* Text Content - on mobile appears second */}
          <div style={{
            order: window.innerWidth > 768 ? 1 : 2,
            minWidth: window.innerWidth > 768 ? '50%' : '100%',
            textAlign: window.innerWidth > 768 ? 'left' : 'center'
          }}>
            <h1 style={{
              fontSize: window.innerWidth > 768 ? '48px' : '32px',
              fontWeight: 'bold',
              color: '#1e40af',
              marginBottom: '16px'
            }}>
              Sikya Kwambo
            </h1>
            <p style={{
              fontSize: window.innerWidth > 768 ? '24px' : '18px',
              color: '#2563eb',
              fontWeight: 'bold',
              marginBottom: '16px',
              lineHeight: '1.4'
            }}>
              Law Student | Tech Enthusiast | Azure Tech Team Member
            </p>
            <p style={{
              fontSize: window.innerWidth > 768 ? '18px' : '16px',
              color: '#374151',
              marginBottom: '32px',
              lineHeight: '1.8',
              maxWidth: '600px',
              margin: '0 auto 32px' + (window.innerWidth > 768 ? '; margin: 0 0 32px 0' : '')
            }}>
              Sikya Kwambo is a passionate and friendly law student at the American University of Nigeria, Yola. She completed her secondary education at Winners Comprehensive High School. She is dedicated to learning, leadership, and using technology to make positive impact.
            </p>
            <div style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              justifyContent: window.innerWidth > 768 ? 'flex-start' : 'center'
            }}>
              <a
                href="#contact"
                style={{
                  padding: window.innerWidth > 768 ? '12px 32px' : '10px 24px',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                  fontSize: window.innerWidth > 768 ? '16px' : '14px',
                  whiteSpace: 'nowrap'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#1e40af'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
              >
                Get In Touch
              </a>
              <a
                href="#about"
                style={{
                  padding: window.innerWidth > 768 ? '12px 32px' : '10px 24px',
                  border: '2px solid #2563eb',
                  color: '#2563eb',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                  fontSize: window.innerWidth > 768 ? '16px' : '14px',
                  whiteSpace: 'nowrap'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#f0f9ff'}
                onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

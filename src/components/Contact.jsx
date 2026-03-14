import React from 'react';

function Contact() {

  return (
    <section id="contact" style={{
      padding: '64px 20px',
      backgroundColor: '#fff',
      scrollMarginTop: '64px'
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '16px'
        }}>Get In Touch</h2>
        <div style={{
          width: '60px',
          height: '4px',
          background: 'linear-gradient(90deg, #60a5fa, #2563eb)',
          borderRadius: '9999px',
          margin: '16px auto 32px'
        }}></div>
        
        <div style={{
          backgroundColor: '#f0f9ff',
          padding: '48px 32px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ marginBottom: '24px' }}>
            <p style={{
              fontSize: '20px',
              color: '#1f2937',
              marginBottom: '8px'
            }}>
              <span style={{ fontSize: '24px', marginRight: '12px' }}>📞</span>
              <strong>Phone</strong>
            </p>
            <p style={{
              fontSize: '18px',
              color: '#2563eb',
              marginBottom: '4px',
              fontWeight: 'bold'
            }}>09123812588</p>
            <p style={{
              fontSize: '18px',
              color: '#2563eb',
              fontWeight: 'bold'
            }}>07072808487</p>
          </div>
          
          <div style={{
            borderTop: '1px solid #e0e7ff',
            paddingTop: '24px'
          }}>
            <p style={{
              fontSize: '20px',
              color: '#1f2937',
              marginBottom: '8px'
            }}>
              <span style={{ fontSize: '24px', marginRight: '12px' }}>📧</span>
              <strong>Email</strong>
            </p>
            <a
              href="mailto:sikyakwambo@gmail.com"
              style={{
                fontSize: '18px',
                color: '#2563eb',
                textDecoration: 'none',
                fontWeight: 'bold',
                transition: 'color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.color = '#1e40af'}
              onMouseOut={(e) => e.target.style.color = '#2563eb'}
            >
              sikyakwambo@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

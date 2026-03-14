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
              fontSize: '24px',
              color: '#1f2937',
              marginBottom: '16px'
            }}>
              <span style={{ fontSize: '48px', marginRight: '16px' }}>💬</span>
            </p>
            <p style={{
              fontSize: '20px',
              color: '#1f2937',
              marginBottom: '8px',
              fontWeight: 'bold'
            }}>Let's Connect on WhatsApp</p>
            <p style={{
              fontSize: '16px',
              color: '#6b7280',
              marginBottom: '24px'
            }}>Click the button below to reach out via WhatsApp</p>
            <a
              href="https://wa.me/09123812588"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 32px',
                backgroundColor: '#25d366',
                color: 'white',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                fontSize: '16px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#1fb855';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(37, 211, 102, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#25d366';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span>💬</span>
              Message on WhatsApp
            </a>
          </div>
          
          <div style={{
            borderTop: '1px solid #e0e7ff',
            paddingTop: '24px',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '14px',
              color: '#6b7280'
            }}>Phone: <strong>09123812588</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

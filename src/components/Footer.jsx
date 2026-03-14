import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'GitHub', icon: '🐙', url: '#' },
    { name: 'Email', icon: '✉️', url: '#' },
  ];

import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'GitHub', icon: '🐙', url: '#' },
    { name: 'Email', icon: '✉️', url: '#' },
  ];

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1e40af, #2563eb)',
      color: '#f8fafc',
      padding: '48px 20px',
      marginTop: '64px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 768 ? 'repeat(3, 1fr)' : '1fr',
          gap: '32px',
          marginBottom: '32px'
        }}>
          {/* Brand */}
          <div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#60a5fa',
              marginBottom: '8px'
            }}>Sikya Kwambo</h3>
            <p style={{ color: 'rgba(248, 250, 252, 0.7)' }}>
              Law Student | Tech Enthusiast | Azure Tech Team Member
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '16px',
              color: '#f8fafc'
            }}>Quick Links</h4>
            <ul style={{ listStyle: 'none' }}>
              {['Home', 'About', 'Education', 'Contact'].map((link, idx) => (
                <li key={idx} style={{ marginBottom: '8px' }}>
                  <a href={`#${link.toLowerCase()}`} style={{
                    color: 'rgba(248, 250, 252, 0.7)',
                    textDecoration: 'none',
                    transition: 'color 0.3s'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#f8fafc'}
                  onMouseOut={(e) => e.target.style.color = 'rgba(248, 250, 252, 0.7)'}
                  >{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '16px',
              color: '#f8fafc'
            }}>Connect</h4>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  title={link.name}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(248, 250, 252, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#f8fafc',
                    textDecoration: 'none',
                    fontSize: '18px',
                    transition: 'all 0.3s',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#60a5fa';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(248, 250, 252, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >{link.icon}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          borderTop: '1px solid rgba(248, 250, 252, 0.1)',
          paddingTop: '24px',
          textAlign: 'center',
          color: 'rgba(248, 250, 252, 0.7)'
        }}>
          <p>&copy; {currentYear} Sikya Kwambo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
}

export default Footer;

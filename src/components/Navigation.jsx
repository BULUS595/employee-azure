import React from 'react';

function Navigation({ menuOpen, setMenuOpen }) {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 999,
      backgroundColor: '#fff',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 24px '
      }}>
        {/* Logo */}
        <a href="#home" style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#2563eb',
          textDecoration: 'none'
        }}>
          Sikya
        </a>

        {/* Desktop Navigation */}
        <div style={{
          display: window.innerWidth >= 768 ? 'flex' : 'none',
          gap: '32px',
          listStyle: 'none'
        }}>
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              style={{
                background: 'none',
                border: 'none',
                color: '#374151',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.color = '#2563eb'}
              onMouseOut={(e) => e.target.style.color = '#374151'}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: window.innerWidth < 768 ? 'flex' : 'none',
            flexDirection: 'column',
            gap: '4px',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <span style={{
            width: '24px',
            height: '2px',
            backgroundColor: '#374151',
            borderRadius: '9999px'
          }}></span>
          <span style={{
            width: '24px',
            height: '2px',
            backgroundColor: '#374151',
            borderRadius: '9999px'
          }}></span>
          <span style={{
            width: '24px',
            height: '2px',
            backgroundColor: '#374151',
            borderRadius: '9999px'
          }}></span>
        </button>
      </div>
    </nav>
  );
}

export default Navigation;

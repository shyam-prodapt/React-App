import React from 'react';

function Header() {
  return (
    <header style={{ padding: '16px 0', background: '#1976d2', marginBottom: '24px' }}>
      <nav style={{ textAlign: 'center' }}>
        <a href="/" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>Home</a>
        <a href="/signup" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>Signup</a>
        <a href="/login" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>Login</a>
        <a href="/gallery" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>Gallery</a>
        <a href="/contactus" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>Contact Us</a>
        <a href="/dashboard" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>Dashboard</a>
      </nav>
    </header>
  );
}

export default Header;
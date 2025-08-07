function Footer() {
  return (
    <footer style={{
      position: 'fixed',
      bottom: 0,
      width: '100%',
      backgroundColor: '#1976d2',
      color: '#fff',
      textAlign: 'center',
      padding: '12px 0',
      fontSize: '14px',
      boxShadow: '0 -2px 6px rgba(0,0,0,0.2)',
      zIndex: 1000
    }}>
      <p>© 2025 My React App | All rights reserved</p>
    </footer>
  );
}

export default Footer;

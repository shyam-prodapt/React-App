function Home() {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '60px auto',
      padding: '40px',
      textAlign: 'center',
      border: '1px solid #ddd',
      borderRadius: '12px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{ marginBottom: '16px', color: '#1976d2' }}>Welcome to Our Website!</h1>
      <p style={{ fontSize: '18px', color: '#444' }}>
        We are glad to have you here. Explore our features by navigating through the menu.
        Whether you're looking to sign up, log in, or just browse through our gallery — everything is just a click away!
      </p>
    </div>
  );
}

export default Home;

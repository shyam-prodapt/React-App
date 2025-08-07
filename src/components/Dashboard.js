function Dashboard() {
  return (
    <div style={{ padding: '30px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Dashboard</h1>

      {/* Total Users */}
      <div style={simpleCard}>
        <h3>Total Users</h3>
        <p>1,245</p>
      </div>

      {/* Notifications */}
      <div style={simpleCard}>
        <h3>Notifications</h3>
        <ul>
          <li>🔔 New signup request</li>
          <li>🔔 Password reset needed</li>
          <li>🔔 New contact form submitted</li>
        </ul>
      </div>

      {/* Recent Activity */}
      <div style={simpleCard}>
        <h3>Recent Activity</h3>
        <p>No recent activity.</p>
      </div>
    </div>
  );
}

const simpleCard = {
  padding: '16px',
  marginBottom: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  background: '#f5f5f5'
};

export default Dashboard;

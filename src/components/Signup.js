import React from 'react';

function Signup() {
    return (
        <div style={{ maxWidth: '350px', margin: '40px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h2 style={{ textAlign: 'center' }}>Signup</h2>
            <form>
                <div style={{ marginBottom: '12px', textAlign: 'left' }}>
                    <label>Name:</label><br />
                    <input type="text" name="name" required style={{ width: '100%', padding: '6px' }} />
                </div>
                <div style={{ marginBottom: '12px', textAlign: 'left' }}>
                    <label>Email:</label><br />
                    <input type="email" name="email" required style={{ width: '100%', padding: '6px' }} />
                </div>
                <div style={{ marginBottom: '12px', textAlign: 'left' }}>
                    <label>Password:</label><br />
                    <input type="password" name="password" required style={{ width: '100%', padding: '6px' }} />
                </div>
                <div style={{ marginBottom: '16px', textAlign: 'left' }}>
                    <label>Confirm Password:</label><br />
                    <input type="password" name="confirmPassword" required style={{ width: '100%', padding: '6px' }} />
                </div>
                <button type="submit" style={{ width: '100%', padding: '8px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: '4px' }}>
                    Signup
                </button>
            </form>
        </div>
    );
}

export default Signup;
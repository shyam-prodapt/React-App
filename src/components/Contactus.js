import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contactus() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_gnpc89c',        // replace this
      'template_ypbruor',       // replace this
      form.current,
      'hoXgnwJ-gpnqHQnCz'         // replace this
    )
    .then(() => {
      alert('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      alert('Failed to send message. Error: ' + error.text);
    });
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '40px auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px'
    }}>
      <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div style={{ marginBottom: '12px', textAlign: 'left' }}>
          <label>Name:</label><br />
          <input type="text" name="name" required style={{ width: '100%', padding: '6px' }} />
        </div>
        <div style={{ marginBottom: '12px', textAlign: 'left' }}>
          <label>Email:</label><br />
          <input type="email" name="email" required style={{ width: '100%', padding: '6px' }} />
        </div>
        <div style={{ marginBottom: '16px', textAlign: 'left' }}>
          <label>Message:</label><br />
          <textarea name="message" rows="4" required style={{ width: '100%', padding: '6px' }}></textarea>
        </div>
        <button type="submit" style={{
          width: '100%',
          padding: '8px',
          background: '#1976d2',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contactus;

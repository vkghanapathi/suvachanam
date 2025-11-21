import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic can be added here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main>
      <h2>Contact Us</h2>
      <p>Get in touch with SUVACHANAM सुवचनम् - Online Indology Journal</p>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Contact Information</h3>
        <p><strong>Email:</strong> <a href="mailto:suvachanam@gmail.com">suvachanam@gmail.com</a></p>
        <p><strong>Phone:</strong> +91 9900082071</p>
        <p><strong>ISSN:</strong> 2998-7075</p>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Send us a Message</h3>
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Send Message
          </button>
        </form>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>About Our Journal</h3>
        <p>SUVACHANAM is a half-yearly online Indology journal inspired by our Sadguru Sri Ganapathy Sachchidananda Swamiji.</p>
        <p>We promote good values across cultural, heritage, language, and indology spectrum.</p>
      </div>
    </main>
  );
};

export default Contact;

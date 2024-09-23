import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <div className="contact-container">
      <div className="contact-text">
        <h1>Contact Me</h1>
        <p>Feel free to drop a message — I’m always open to new opportunities.</p>
      </div>
      <form className="contact-form">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea id="message"></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div className="extra">
      </div>
    </div>
  );
};

export default ContactMe;

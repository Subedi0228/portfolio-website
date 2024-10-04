import React, { useState } from 'react';
import './ContactMe.css';

const ContactMe = () => {
  const [namePlaceholder, setNamePlaceholder] = useState('Name');
  const [emailPlaceholder, setEmailPlaceholder] = useState('Email');
  const [messagePlaceholder, setMessagePlaceholder] = useState('Message');

  const handleInputChange = (e, setPlaceholder, defaultText) => {
    if (e.target.value === '') {
      setPlaceholder(defaultText);
    }
  };

  return (
    <div className="contact_me_container">
      <div className="contact_me_text">
        <h1 id='header'>Contact Me</h1>
        <p id='subtext'>Feel free to drop a message — I’m always open to new opportunities.</p>
      </div>

      <form className="contact-form" action="https://formsubmit.co/chiransubedi2001@gmail.com" method="POST">
        <div className="contact_me_identifiers">
          <input
            type="text"
            name='name'
            id="name"
            placeholder={namePlaceholder}
            onFocus={() => setNamePlaceholder('')}
            onBlur={(e) => handleInputChange(e, setNamePlaceholder, 'Name')}
            onInput={(e) => handleInputChange(e, setNamePlaceholder, 'Name')}
          />
          <input
            type="email"
            name='email'
            id="email"
            placeholder={emailPlaceholder}
            onFocus={() => setEmailPlaceholder('')}
            onBlur={(e) => handleInputChange(e, setEmailPlaceholder, 'Email')}
            onInput={(e) => handleInputChange(e, setEmailPlaceholder, 'Email')}
          />
        </div>
        <textarea
          id="message"
          name='message'
          placeholder={messagePlaceholder}
          onFocus={() => setMessagePlaceholder('')}
          onBlur={(e) => handleInputChange(e, setMessagePlaceholder, 'Message')}
          onInput={(e) => handleInputChange(e, setMessagePlaceholder, 'Message')}
        ></textarea>
        <button type="submit" id='submit_button'>SEND</button>
      </form>
    </div>
  );
};

export default ContactMe;

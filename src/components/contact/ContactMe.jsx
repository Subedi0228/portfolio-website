import React, { useState } from "react";
import "./ContactMe.css";

const ContactMe = () => {
  const [namePlaceholder, setNamePlaceholder] = useState("Name");
  const [emailPlaceholder, setEmailPlaceholder] = useState("Email");
  const [messagePlaceholder, setMessagePlaceholder] = useState("Message");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e, setPlaceholder, defaultText) => {
    if (e.target.value === "") {
      setPlaceholder(defaultText);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true); // Set sending state to true when form is submitted
    const form = e.target;

    // Use the Formspark endpoint to submit the form data
    fetch("https://submit-form.com/ZzhKSNFuc", {
      method: "POST",
      body: new FormData(form),
    })
      .then(() => {
        setIsSubmitted(true);
        setIsSending(false); // Reset sending state
      })
      .catch(() => {
        alert("Form submission failed. Please try again.");
        setIsSending(false); // Reset sending state if submission fails
      });
  };

  return (
    <div className="contact_me_container">
      <div className="contact_me_text">
        <h1 id="header">Contact Me</h1>
        <p id="subtext">
          Feel free to drop a message — I’m always open to new opportunities.
        </p>
      </div>

      {!isSubmitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Honeypot field for spam protection */}
          <input type="text" name="_honey" style={{ display: "none" }} />

          {/* Disable captcha */}
          <input type="hidden" name="_captcha" value="false" />

          <div className="contact_me_identifiers">
            <input
              type="text"
              name="name"
              id="name"
              placeholder={namePlaceholder}
              onFocus={() => setNamePlaceholder("")}
              onBlur={(e) => handleInputChange(e, setNamePlaceholder, "Name")}
              onInput={(e) => handleInputChange(e, setNamePlaceholder, "Name")}
              disabled={isSending} // Disable during submission
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder={emailPlaceholder}
              onFocus={() => setEmailPlaceholder("")}
              onBlur={(e) => handleInputChange(e, setEmailPlaceholder, "Email")}
              onInput={(e) =>
                handleInputChange(e, setEmailPlaceholder, "Email")
              }
              disabled={isSending} // Disable during submission
              required
            />
          </div>
          <textarea
            id="message"
            name="message"
            placeholder={messagePlaceholder}
            onFocus={() => setMessagePlaceholder("")}
            onBlur={(e) =>
              handleInputChange(e, setMessagePlaceholder, "Message")
            }
            onInput={(e) =>
              handleInputChange(e, setMessagePlaceholder, "Message")
            }
            disabled={isSending} // Disable during submission
            required
          ></textarea>
          <button type="submit" id="submit_button" disabled={isSending}>
            {isSending ? "Sending..." : "SEND"}
          </button>
        </form>
      ) : (
        <div className="success-message">
          <h2>✔ Thank you!</h2>
          <p>
            Your message has been sent successfully. I'll get back to you
            shortly.
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactMe;

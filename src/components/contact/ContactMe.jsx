import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import "./ContactMe.css";

const ContactMe = () => {
  const [namePlaceholder, setNamePlaceholder] = useState("Name");
  const [emailPlaceholder, setEmailPlaceholder] = useState("Email");
  const [messagePlaceholder, setMessagePlaceholder] = useState("Message");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false); // New state for sending

  const handleInputChange = (e, setPlaceholder, defaultText) => {
    if (e.target.value === "") {
      setPlaceholder(defaultText);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true); // Set sending state to true when form is submitted

    // EmailJS sendForm function
    emailjs
      .sendForm(
        "service_ysjloyg", // Replace with your EmailJS service ID
        "template_5cqgwii", // Replace with your EmailJS template ID
        e.target,
        "ZpEyrDNb8PEKt0-98" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
          setIsSending(false); // Reset sending state
        },
        (error) => {
          console.log(error.text);
          alert("Form submission failed. Please try again.");
          setIsSending(false); // Reset sending state if submission fails
        }
      );
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
            {isSending ? "Sending..." : "SEND"}{" "}
            {/* Change text during sending */}
          </button>
        </form>
      ) : (
        <div className="success-message">
          <h2>✔ Thank you!</h2> {/* Add checkmark */}
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

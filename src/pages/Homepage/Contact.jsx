import React, { useState, useEffect } from "react";
import { app, db } from 'config/firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import "firebase/firestore";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.querySelector(".contact-section");

      if (contactSection) {
        const contactTop = contactSection.getBoundingClientRect().top;
        const isVisible = contactTop <= window.innerHeight * 0.75;
        setContactVisible(isVisible);      
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const fields = [
    { label: "Name", type: "text", key: "name" },
    { label: "Email", type: "email", key: "email" },
    { label: "Message", type: "textarea", key: "message" }
  ];

  const handleChange = (e, key) => {
    setFormData(prev => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "contacts"), {
      ...formData,
      timestamp: serverTimestamp(),
    });

    setFormData({
      name: "",
      email: "",
      message: ""
    });
    setSubmitted(true);
  };

  return (
    <div className={`contact_wrapper ${contactVisible ? 'fade-in-section is-visible' : 'fade-in-section'}`}>
      <div className="contact-box">
        <div className="contact_right">
          <h1>Contact</h1>
          {submitted ? (
            <p>Thanks for reaching out! I'll get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              {fields.map((field) => (
                <fieldset key={field.key}>
                  <div className="contact_grid-35">
                    <label>{field.label}:</label>
                  </div>
                  <div className="contact_grid-65">
                    {field.type === "textarea" ? (
                      <textarea
                        value={formData[field.key]}
                        onChange={(e) => handleChange(e, field.key)}
                        required
                      />
                    ) : (
                      <input
                        type={field.type}
                        value={formData[field.key]}
                        onChange={(e) => handleChange(e, field.key)}
                        required
                      />
                    )}
                  </div>
                </fieldset>
              ))}
              <div className="contact_buttons">
                <button type="submit" className="contact_Btn">Submit</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

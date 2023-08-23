
import React, { useState } from "react";
import { app, db } from 'config/firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import "firebase/firestore";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

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
    <div>
      <h1>Contact</h1>
      {submitted ? (
        <p>Thanks for reaching out! I'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div key={field.key}>
              <label>
                {field.label}:
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
              </label>
              <br />
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Contact;

import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({ name: '', lastname: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', form);
      alert('Message sent!');
      setForm({ name: '', lastname: '', email: '', message: '' });
    } catch (err) {
      alert('Error sending message');
    }
  };

  return (
    <div className="reachme" id="contact">
      <h1>I’d love to hear your feedback!</h1>
      <p>
        Your thoughts and suggestions mean a lot to me, and I’d be honored to hear from you.
        Whether it’s feedback, questions, or just a hello — feel free to drop a message below.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="lastname"
          placeholder="Your Last Name"
          value={form.lastname}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;

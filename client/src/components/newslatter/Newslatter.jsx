// Newslatter.jsx
import React, { useState } from 'react';
import classes from './newslatter.module.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://foodorder-changeto-ajouinvest.onrender.com/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setMessage('Successfully subscribed to the newsletter!');
      setEmail('');
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div id="newslatter" className={classes.newsletterContainer}>
      <h2>Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubscribe} className={classes.form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={classes.input}
          required
        />
        <button type="submit" className={classes.submitBtn}>
          Subscribe
        </button>
      </form>
      {message && <p className={classes.message}>{message}</p>}
    </div>
  );
};

export default Newsletter;

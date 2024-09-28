// models/NewsletterSubscriber.js
const mongoose = require('mongoose');

const newsletterSubscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  subscribedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('NewsletterSubscriber', newsletterSubscriberSchema);

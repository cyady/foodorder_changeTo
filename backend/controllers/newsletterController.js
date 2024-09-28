// controllers/newsletterController.js
const router = require('express').Router();
const NewsletterSubscriber = require('../models/NewsletterSubscriber');

// POST: /newsletter/subscribe
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    // 이메일 중복 체크
    const existingSubscriber = await NewsletterSubscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ message: 'You are already subscribed to the newsletter.' });
    }

    // 새 구독자 저장
    const newSubscriber = new NewsletterSubscriber({ email });
    await newSubscriber.save();

    res.status(201).json({ message: 'Successfully subscribed to the newsletter!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to subscribe to the newsletter.' });
  }
});

module.exports = router;

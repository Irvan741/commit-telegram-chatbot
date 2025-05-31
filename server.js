const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Ganti ini sesuai bot kamu
const TELEGRAM_BOT_TOKEN = '7613399653:AAEwDYmJMbfKHdQ366DZhnzMMUhbt7ORdqc';
const TELEGRAM_CHAT_ID = '1344179305'; // Misal: -123456789

app.use(bodyParser.json());

app.post('/github-webhook', async (req, res) => {
  const payload = req.body;

  if (!payload.commits) return res.sendStatus(200);

  const repo = payload.repository?.name || 'unknown';
  const pusher = payload.pusher?.name || 'someone';
  const commits = payload.commits;

  let message = `🟢 *${pusher}* pushed to *${repo}*:\n`;

  commits.forEach(commit => {
    const shortId = commit.id.substring(0, 7);
    const url = commit.url;
    const msg = commit.message;
    message += `\n• [${shortId}](${url}) ${msg}`;
  });

  try {
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'Markdown'
    });

    res.status(200).send('✅ Commit sent to Telegram');
  } catch (err) {
    console.error('Telegram error:', err.response?.data || err.message);
    res.status(500).send('❌ Failed to send to Telegram');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

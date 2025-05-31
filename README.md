# 📦 GitHub to Telegram Commit Notifier (Express.js)

A simple webhook service built with Express.js that listens to GitHub push events and sends formatted commit messages to a Telegram group via bot.

## ✨ Features

- Instant commit notifications to Telegram group
- Supports multiple commits in one push
- Formatted messages with commit links
- Lightweight and easy to deploy

## ⚙️ Tech Stack

- Node.js
- Express.js
- GitHub Webhooks
- Telegram Bot API
- Ngrok (for local development)

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Irvan741/commit-telegram-chatbot.git
cd commit-telegram-chatbot
npm install
```

### 2. Edit Configuration
Open `server.js`, and replace the following placeholders with your actual values:

```js
const TELEGRAM_BOT_TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN';
const TELEGRAM_CHAT_ID = 'YOUR_GROUP_CHAT_ID';
```

You can get `TELEGRAM_CHAT_ID` by adding the bot to your group and visiting:
```
https://api.telegram.org/bot<YOUR_TELEGRAM_BOT_TOKEN>/getUpdates
```

### 3. Run Server
```bash
node server.js
```

### 4. Start Ngrok (for local testing)
```bash
npx ngrok http 3000
```
Copy the generated public URL (e.g., `https://abcd1234.ngrok.io`)

### 5. Setup GitHub Webhook
- Go to your GitHub repo → **Settings → Webhooks → Add Webhook**
- **Payload URL:**  
  `https://your-ngrok-url/github-webhook`
- **Content Type:**  
  `application/json`
- **Which events:**  
  Select **Just the push event**
- Click **Add webhook**

## ✅ Example Message
```
🟢 irvan741 pushed to commit-telegram-chatbot:

• [abc1234](https://github.com/Irvan741/commit-telegram-chatbot/commit/abc1234) Fix typo in README
• [def5678](https://github.com/Irvan741/commit-telegram-chatbot/commit/def5678) Add webhook route
```

## 📄 License
MIT

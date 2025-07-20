# 🤖 AI Code Reviewer

An AI-powered code review tool that helps developers get instant feedback on their code using OpenAI's GPT-based API.

## ✨ Features

- 📥 Paste code in any major programming language
- 💡 Get intelligent code reviews and suggestions
- 🚀 Built with React + Node.js + OpenAI API
- 🎨 Clean and responsive UI using Tailwind CSS
- ❌ Handles long input errors and OpenAI token limits

## ⚙️ Tech Stack

| Frontend | Backend   | AI Integration | Styling       |
|----------|-----------|----------------|----------------|
| React    | Node.js   | OpenAI API     | Tailwind CSS   |


## 🧑‍💻 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/RodrigueDaniel/CODE-REVIEW.git
cd CODE-REVIEW
```

### 2. Set up the backend (API key required)
```bash
cd BackEnd
npm install
touch .env
```
Inside .env, add your OpenAI key:
```bash
OPENAI_API_KEY=your_openai_key_here
```
Run the backend (runs in port 5000)
```bash
node server.js
```

### 3. Start the frontend
```bash
cd ../Frontend
npm install
npm run dev
```

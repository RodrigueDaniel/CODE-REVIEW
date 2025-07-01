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
git clone https://github.com/your-username/ai-code-reviewer.git
cd ai-code-reviewer
```

### 2. Set up the backend (API key required)
```bash
cd server
npm install
touch .env
```
In .env
```bash
OPENAI_API_KEY=your_openai_key_here
```
Run
```bash
node index.js
```

### 3. Start the frontend
```bash
cd ../client
npm install
npm run dev
```

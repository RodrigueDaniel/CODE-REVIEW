require("dotenv").config();
console.log("GOOGLE GEMINI API KEY:", process.env.GOOGLE_GEMINI_API_KEY);
const app = require("./src/app");

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
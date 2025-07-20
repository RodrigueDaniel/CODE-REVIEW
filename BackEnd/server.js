const dotenv = require("dotenv");
dotenv.config();

const app = require("./src/app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Backend server running on http://localhost:${PORT}`);
});
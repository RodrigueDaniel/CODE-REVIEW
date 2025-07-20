const { getReviewFromOpenAI } = require("../services/ai.service");

const reviewCode = async (req, res) => {
  const { code, language } = req.body;

  if (!code || !language) {
    return res.status(400).json({ error: "Code and language are required" });
  }

  try {
    const review = await getReviewFromOpenAI(code, language);
    res.json({ review });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { reviewCode };

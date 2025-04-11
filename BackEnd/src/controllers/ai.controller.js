const generateContentT = require("../services/ai.service.js");
// const generateContent = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).send("Prompt is required");
  }

  try {
    const response = await generateContentT(code);
    res.send(response);
  } catch (error) {
    console.error("Error generating content:", error);
    res.status(500).send("Internal Server Error");
  }
};

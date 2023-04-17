const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
const openai = new OpenAI("PASTE-YOUR-KEY-HERE");

app.use(cors());
app.use(express.json());

app.post("/summarize", async (req, res) => {
  try {  const { url } = req.body;
    const result = await openai.Completion.create({
      engine: "text-davinci-002",
      prompt: `Please provide a 250-word summary of the following article: ${url}`,
      max_tokens: 50,
      n: 1,
      stop: null,
      temperature: 0.8,
    });

    const summary = result.choices[0].text.trim();
    res.json({ summary });
  } catch (error) {
    console.error("Error generating summary:", error);
    res.status(500).json({ error: "Failed to generate summary" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

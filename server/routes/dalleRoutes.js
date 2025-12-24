import express from "express";
import fetch from "node-fetch";
import * as dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ message: "Prompt is required" });
    }

    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(
        prompt
      )}&per_page=1`,
      {
        headers: {
          Authorization: process.env.PEXELS_API_KEY,
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    const data = await response.json();

    if (!data.photos || data.photos.length === 0) {
      return res.status(404).json({ message: "No image found" });
    }

    const imageUrl = data.photos[0].src.large;

    // Convert image to base64
    const imageResponse = await fetch(imageUrl);
    const buffer = await imageResponse.arrayBuffer();
    const base64Image = Buffer.from(buffer).toString("base64");

    res.status(200).json({ photo: base64Image });
  } catch (error) {
    console.error("PEXELS ERROR:", error.message);
    res.status(500).json({ message: "Pexels fetch failed" });
  }
});

export default router;

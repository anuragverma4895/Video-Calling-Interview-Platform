import express from "express";

const router = express.Router();

const PISTON_API = "https://emkc.org/api/v2/piston";

router.post("/", async (req, res) => {
  try {
    const { language, version, files } = req.body;

    const response = await fetch(`${PISTON_API}/execute`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ language, version, files }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ message: "Error from Piston API", details: data });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Error executing code via proxy:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;

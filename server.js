const express = require('express');
const fetch = require('node-fetch'); // For Node <18; Node 18+ has a global fetch

const app = express();
app.use(express.json());

// Set your deployed Google Apps Script URL as an environment variable
// OR replace the fallback URL below with your actual deployment URL.
const googleAppsScriptURL = process.env.GOOGLE_APPS_SCRIPT_URL || "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec";

// POST endpoint to receive form data and forward it to Google Apps Script
app.post('/MultiStepForm', async (req, res) => {
  const formData = req.body;

  try {
    const response = await fetch(googleAppsScriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    res.status(200).json(result);
  } catch (error) {
    console.error("Error forwarding data to Google Apps Script:", error);
    res.status(500).json({ status: "error", message: error.message });
  }
});

// Start the server on the specified port (default: 3001)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
}); 
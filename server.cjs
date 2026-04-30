const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// Serve React build
app.use(express.static(path.join(__dirname, "dist")));

// Payment route (FIXED: shows a webpage instead of JSON)
app.get("/pay/:id", (req, res) => {
  const payId = req.params.id;

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Payment Success</title>
      </head>
      <body style="font-family: Arial; text-align: center; padding-top: 100px;">
        <h1>Payment Successful ✔</h1>
        <p>Payment ID: ${payId}</p>
        <a href="/" style="display:inline-block;margin-top:20px;">Back to Home</a>
      </body>
    </html>
  `);
});

// React fallback (MUST stay last)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("running on port " + PORT);
});

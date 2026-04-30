const express = require("express");
const path = require("path");

const app = express();

// parse JSON bodies if needed
app.use(express.json());

// Serve Vite/React build
app.use(express.static(path.join(__dirname, "dist")));

// --- ADD THIS BEFORE the catch-all ---
// API route to return JSON
app.get("/pay/:id", (req, res) => {
  const payId = req.params.id;

  // Example: return JSON
  res.json({
    success: true,
    paymentId: payId,
    message: "This is your payment info"
  });
});

// Catch-all: send index.html for all other React routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("running on port " + PORT);
});

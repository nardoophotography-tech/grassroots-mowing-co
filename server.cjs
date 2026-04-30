const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// Serve React build
app.use(express.static(path.join(__dirname, "dist")));

// IMPORTANT API ROUTE (must be above "*")
app.get("/pay/:id", (req, res) => {
  const payId = req.params.id;

  res.json({
    success: true,
    paymentId: payId
  });
});

// React fallback (MUST stay last)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("running on port " + PORT);
});

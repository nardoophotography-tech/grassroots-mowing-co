const express = require("express");
const path = require("path");

const app = express();

// IMPORTANT: serve Vite build folder
app.use(express.static(path.join(__dirname, "dist")));

// always send index.html for React routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("running on port " + PORT);
});

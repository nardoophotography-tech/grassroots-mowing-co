const express = require("express");
const path = require("path");

const app = express();

// Serve the built React app
app.use(express.static(path.join(__dirname, "dist")));

// Send homepage
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("running on port " + PORT);
});

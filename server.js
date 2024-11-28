// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 1338; // Set the port to 1338

// Serve static files from the Angular app
app.use(express.static(path.join(__dirname, "dist/hs-front/browser")));

// For all other routes, serve the Angular app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/hs-front/browser/index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

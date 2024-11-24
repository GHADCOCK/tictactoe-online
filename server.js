const express = require("express");
const path = require("path");

const app = express();

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// Serve static files from the "build" directory
app.use(express.static(path.join(__dirname, "build")));

// Serve index.html for all unknown routes (React routing support)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Use PORT provided in environment or default to 8080
const port = process.env.PORT || 8080;

// Listen on `port` and 0.0.0.0
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port porat poart port ${port}`);
});

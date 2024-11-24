const express = require("express");
const path = require("path");

const app = express();

// Middleware to log all incoming requests
app.use((req, res, next) => {
  console.log(`[DEBUG] Incoming request: ${req.method} ${req.url}`);
  next();
});

// Health check endpoint for Railway to monitor container status
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Serve static files from the "build" directory
app.use(express.static(path.join(__dirname, "build")));

// Fallback for React routing: serve index.html for unknown routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Use PORT provided in environment or default to 8080
const port = process.env.PORT || 8080;

// Keep the container alive with periodic heartbeat logs
setInterval(() => {
  console.log(`[DEBUG] Server heartbeat: container is active on port ${port}`);
}, 10000); // Logs every 10 seconds

// Listen on `port` and 0.0.0.0 for external connections
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});

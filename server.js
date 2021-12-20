// Import Modules
const express = require('express');
const app = express();
const db = require('./db');

// Allow CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Create HTTP Server and Listen for Requests
app.listen(3000, async function(req, res) {
  console.log(`[OK] = HTTP Web Server Running On Port ${3000}`);

  // register API Endpoints
  app.get('/api/v1/students', async (req, res) => {
    const results = await db.select('*').from('students');
    return res.json(results)
  });
});
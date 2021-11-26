// Import Modules
const express = require('express');
const app = express();
const db = require('./db');

// Parse request bodies in middleware before handlers
const bodyParser  = require('body-parser');
app.use(bodyParser.json());

// Allow CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Create HTTP Server and Listen for Requests
app.listen(3000, async (req, res) => {
  console.log(`[OK] = HTTP Web Server Running On Port ${3000}`);

  // register API Endpoints
  app.get('/api/v1/students', async (req, res) => {
    const knexResults = await db.select('*').from('students');
    return res.json(knexResults)
  });
});
// Import Modules
const express = require('express');
const app = express();
const db = require('./db');
const { v4 } = require('uuid');

// Handle POST requests with JSON payloads in request body
app.use(express.json());


// Create HTTP Server and Listen for Requests
app.listen(3000, async function(req, res) {
  console.log(`[OK] = HTTP Web Server Running On Port ${3000}`);

  // Endpoint to create new student
  app.post('/api/v1/students', async (req, res) => {
    const newStudent = {
      id: v4(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      major: req.body.major,
    };
    const studentRecord = await db('students').insert(newStudent).returning('*');
    return res.json(studentRecord);
  });

  // Endpoint to get all students
  app.get('/api/v1/students', async (req, res) => {
    console.log('GET endpoint')
    const results = await db.select('*').from('students');
    return res.json(results)
  });
});
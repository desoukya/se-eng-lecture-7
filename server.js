// Import Modules
const express = require('express');
const app = express();
const db = require('./db');
const { v4 } = require('uuid');

// Configuration setup to parse JSON payloads from HTTP POST request body
app.use(express.json());

// Register HTTP endpoint to create new student
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

// Register HTTP endpoint to get all students
app.get('/api/v1/students', async (req, res) => {
  console.log('GET endpoint')
  const results = await db.select('*').from('students');
  return res.json(results)
});

// Create HTTP Server and Listen for Requests
app.listen(3000);
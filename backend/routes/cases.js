const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM support_cases');
  res.json(rows);
});

router.post('/', async (req, res) => {
  const { customer_name, issue, status } = req.body;
  await db.query(
    'INSERT INTO support_cases (customer_name, issue, status) VALUES (?, ?, ?)',
    [customer_name, issue, status]
  );
  res.status(201).send('Support case created');
});

module.exports = router;

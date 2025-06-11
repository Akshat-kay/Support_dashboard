const express = require('express');
const db = require('../db');
const router = express.Router();

// GET all FAQs
router.get('/', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM faqs');
  res.json(rows);
});

// GET search FAQs by query string
router.get('/search', async (req, res) => {
  const query = `%${req.query.q}%`;
  const [rows] = await db.query(
    'SELECT * FROM faqs WHERE question LIKE ? OR answer LIKE ?',
    [query, query]
  );
  res.json(rows);
});

module.exports = router;

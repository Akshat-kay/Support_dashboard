const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/cases-by-status', async (req, res) => {
  const [rows] = await db.query(
    'SELECT status, COUNT(*) AS count FROM support_cases GROUP BY status'
  );
  res.json(rows);
});

module.exports = router;

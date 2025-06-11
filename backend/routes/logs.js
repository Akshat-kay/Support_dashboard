const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const upload = multer({ dest: 'logs/' });

router.post('/upload', upload.single('logFile'), (req, res) => {
  const filePath = path.join(__dirname, '..', 'logs', req.file.filename);
  const logContent = fs.readFileSync(filePath, 'utf-8');
  res.send({ content: logContent });
});

module.exports = router;

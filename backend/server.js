const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const logRoutes = require('./routes/logs');
const caseRoutes = require('./routes/cases');
const faqRoutes = require('./routes/faqs');
const reportRoutes = require('./routes/reports');

app.use('/logs', logRoutes);
app.use('/cases', caseRoutes);
app.use('/faqs', faqRoutes);
app.use('/reports', reportRoutes);

app.get('/', (req, res) => {
  res.send('Support Dashboard API Running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

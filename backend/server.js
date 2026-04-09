const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

/* API ENDPOINTS GO HERE */
app.get('/api/exhibits', (req, res) => {
  const exhibits = db.prepare('SELECT * FROM exhibits').all();
  res.json(exhibits);
});

/* SERVER */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
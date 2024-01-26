const express = require('express');
const router = express.Router();
const pool = require("../modules/pool");

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
});

// GET /gallery
router.get('/', (req, res) => {
  // code here
  const queryText = `SELECT * FROM "gallery"`;
  pool.query(queryText)
  .then((response) => {
    res.send(response.rows);
  })
  .catch((error) => {
    console.error("Error in server GET:", error);
  });
  
});

module.exports = router;

const express = require('express');
const router = express.Router();
const pool = require("../modules/pool");

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
  const picId = req.params.id;
  const queryText = `UPDATE "gallery" SET "likes" = "likes" + 1 WHERE "id" = $1;`;
  pool.query(queryText, [picId])
  .then((response) => {
    res.sendStatus(200);
  })
  .catch((error) => {
    console.error("Error in server PUT:", error);
    res.sendStatus(500);
  });

});

// GET /gallery
router.get('/', (req, res) => {
  // code here
  const queryText = `SELECT * FROM "gallery;"`;
  pool.query(queryText)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error) => {
    console.error("Error in server GET:", error);
    res.sendStatus(500);
  });
  
});

module.exports = router;

const express = require('express');
const router = express.Router();
const pool = require("../modules/pool");

// GET /gallery
router.get('/', (req, res) => {
  // code here
  const queryText = `SELECT * FROM "gallery" ORDER BY "id" ASC;`;
  pool.query(queryText)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error) => {
    console.error("Error in server GET:", error);
    res.sendStatus(500);
  });
  
});

// POST /gallery
router.post("/", (req, res) => {
  const pic = req.body;
  const queryText = `
  INSERT INTO "gallery" ("url", "title", "description")
  VALUES ($1, $2, $3)
  `; 
  pool.query(queryText, [pic.url, pic.title, pic.description])
  .then(() => {
    res.sendStatus(201);
  })
  .catch((error) => {
    console.error("Error in server POST:", error);
    res.sendStatus(500);
  });
})

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

module.exports = router;

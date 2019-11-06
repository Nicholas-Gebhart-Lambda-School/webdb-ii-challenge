const router = require("express").Router();
const db = require("../data/dbConfig");

router.get("/", (req, res) => {
  db.select("*")
    .from("cars")
    .then(cars => {
      res.status(200).json(cars);
    });
});

module.exports = router;

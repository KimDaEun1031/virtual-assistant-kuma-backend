const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
  res.json({ title: "Hello" });
});

module.exports = router;

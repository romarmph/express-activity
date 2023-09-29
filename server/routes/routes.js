const express = require("express");
const router = express.Router();

router.get("/biography", (req, res) => {
  res.sendFile("biography.html", { root: __dirname + "../../../public/views" });
});

router.get("/legacy", (req, res) => {
  res.sendFile("legacy.html", { root: __dirname + "../../../public/views" });
});

module.exports = router;

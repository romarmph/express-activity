const express = require("express");
const router = express.Router();

router.get("/biography", (req, res) => {
  res.send("biography");
});

router.get("/legacy", (req, res) => {
  res.send("legacy");
});

router.get("/gallery", (req, res) => {
  res.send("gallery");
});

router.get("/contact", (req, res) => {
  res.send("contact");
});

module.exports = router;

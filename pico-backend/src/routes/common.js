const express = require("express");
const router = express.Router();

router.post("/getip", (req, res) => {
  const ip = req.ip;
  res.send(ip);
});

module.exports = router;

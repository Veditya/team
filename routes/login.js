const express = require("express");
const router = express.Router();
const { checkUser } = require("../functions");

router.post("/", (req, res) => {
  checkUser(req, res);
});

module.exports = router;

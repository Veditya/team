const express = require("express");
const router = express.Router();
const { getTeams, deleteMember } = require("../functions");

router.get("/", (req, res) => {
  getTeams(req, res);
});

router.delete("/", (req, res) => {
  deleteMember(req, res);
});

module.exports = router;

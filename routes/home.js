const express = require("express");
const router = express.Router();
const { getEmployees, addMember } = require("../functions");

router.get("/", (req, res) => {
  getEmployees(req, res);
});
router.post("/", (req, res) => {
  addMember(req, res);
});

module.exports = router;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamListSchema = new Schema({
  teamA: Array,
  teamB: Array,
  teamC: Array,
  teamD: Array,
});

const teamList = mongoose.model("teamList", teamListSchema);

module.exports = { teamList };

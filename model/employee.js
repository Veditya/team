const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  id: Number,
  fullName: String,
  designation: String,
  gender: String,
  teamName: String,
});

const employee = mongoose.model("employee", employeeSchema);

module.exports = { employee };

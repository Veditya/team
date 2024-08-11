const mongoose = require("mongoose");
const modelEmployee = require("./model/employee");
const modelTeamList = require("./model/teamList");
const modelUser = require("./model/user");
const employees = modelEmployee.employee;
const teamLists = modelTeamList.teamList;
const users = modelUser.user;

async function deleteMember(req, res) {
  const { id, type } = req.query;
  const Id = Number(id);
  try {
    const teamList = await teamLists.findOne();
    if (type === "A") {
      const list = teamList.teamA.filter((item) => item.id !== Id);
      console.log(list);
      const rs = await teamLists.findOneAndUpdate(
        { _id: new mongoose.Types.ObjectId("661189b8ce255a9c05607054") }, // Filter by the specified _id
        { $set: { teamA: list } }
      );
    } else if (type === "B") {
      const list = teamList.teamB.filter((item) => item.id !== Id); // Use !== to filter out the item with the specified id
      const rs = await teamLists.findOneAndUpdate(
        { _id: new mongoose.Types.ObjectId("66099bf1a8bccdd614dcb59a") }, // Filter by the specified _id
        { $set: { teamB: list } }
      );
    } else if (type === "C") {
      const list = teamList.teamC.filter((item) => item.id !== Id); // Use !== to filter out the item with the specified id
      const rs = await teamLists.findOneAndUpdate(
        { _id: new mongoose.Types.ObjectId("66099bf1a8bccdd614dcb59a") }, // Filter by the specified _id
        { $set: { teamC: list } }
      );
    } else if (type === "D") {
      const list = teamList.teamD.filter((item) => item.id !== Id); // Use !== to filter out the item with the specified id
      const rs = await teamLists.findOneAndUpdate(
        { _id: new mongoose.Types.ObjectId("66099bf1a8bccdd614dcb59a") }, // Filter by the specified _id
        { $set: { teamD: list } }
      );
    }
    console.log("Member removed successfully");
    res.status(201).send("member removed successfully");
  } catch (error) {
    console.error("Error removing member from Team:", error);
    res.status(500).send("Failed to remove employee");
  }
}

async function getTeams(req, res) {
  try {
    const teamList = await teamLists.find();
    res.json(teamList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve teams" });
  }
}
async function checkUser(req, res) {
  const user = req.body;
  console.log(user);
  try {
    const result = await users.findOne({ password: user.password });
    if (result === null) {
      console.log("user not found");
      res.status(200).send("no user");
    } else {
      console.log("user logged in");
      res.status(201).send("logged in");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("error in logging in");
  }
}
async function getEmployees(req, res) {
  try {
    const employeeList = await employees.find();
    res.json(employeeList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve employees" });
  }
}
async function addMember(req, res) {
  const member = req.body;
  const newMember = {
    id: member.id,
    fullName: member.fullName,
    designation: member.designation,
    gender: member.gender,
  };
  try {
    let teamList = await teamLists.findOne();
    if (member.teamName === "A") {
      teamList.teamA.push(newMember);
    } else if (member.teamName === "B") {
      teamList.teamB.push(newMember);
    } else if (member.teamName === "C") {
      teamList.teamC.push(newMember);
    } else {
      teamList.teamD.push(newMember);
    }

    await teamList.save();
    console.log("Member added successfully");
    res.status(201).send("Employee added successfully");
  } catch (error) {
    console.error("Error adding member to Team:", error);
    res.status(500).send("Failed to add employee");
  }
}
module.exports = { addMember, getEmployees, checkUser, getTeams, deleteMember };

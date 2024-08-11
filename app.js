const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Home = require("./routes/home");
const Login = require("./routes/login");
const Teams = require("./routes/teams");
require("dotenv").config();

main().catch((err) => console.error("MongoDB connection error:", err));

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// Routes
app.use("/", Home);
app.use("/login", Login);
app.use("/teams", Teams);

//app.use("/", (req, res) => {
//  res.sendFile(path.resolve(__dirname, "build", "index.html"));
//});

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}...`);
});

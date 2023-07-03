require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

const router = new express.Router();

// sample DB userData
const userData = [
  {
    userId: 1, // PK
    username: "geraldgoh@gmail.com", // PK
  },
];

router.post("/", (req, res) => {
  const username = req.body.username;
  if (!username) return res.json({ code: 403 });

  //TODO: authenticate user and password with database

  // Get userId from db
  const userRecord = userData.filter((user) => user.username === username);
  console.log("userRecord ", userRecord);

  if (!userRecord.length) {
    res.status(404);
    res.send("User not found");
    return res;
  }
  const userId = userRecord[0].userId;

  const userDetails = { userId: userId, username: username };
  const jwtToken = jwt.sign(userDetails, process.env.JWT_PRIVATE_KEY);

  res.json({ jwtToken: jwtToken, userDetails: userDetails });
});

router.get("/verify", auth, (req, res) => {
  const userDetails = req.user;
  res.json({ userDetails: userDetails });
});

module.exports = router;

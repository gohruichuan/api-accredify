require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

const router = new express.Router();

// sample DB careerGoals
const careerGoals = [
  {
    id: 1,
    userId: 1,
    name: "Account Manager",
    description:
      "Manage maintain and grow the sales and relationships with a specific customer or set of accounts. This includes in-depth customer engagement relationship-building and provision of quality solutions and service to address customers' needs efficiently and generate revenue",
    category: "Sales and Marketing",
    type: "technical", // or "core"
    progress: 35, // integer ranging from 0 to 100
  },
];

router.get("/", auth, (req, res) => {
  // userId from JWT auth.js (required)
  const userDetails = req.user;
  console.log("userDetails ", userDetails);
  // retreive documents from db
  const careerGoalsRes = careerGoals.filter(
    (doc) => doc.userId === userDetails.userId
  );

  if (!careerGoalsRes.length) {
    res.status(404);
    res.send(`No records found`);
    return res;
  }
  res.json(careerGoalsRes);
});

module.exports = router;

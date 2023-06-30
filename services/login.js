const express = require("express");
const router = new express.Router();

const userData = [
  {
    username: "geraldgoh@gmail.com",
  },
];

router.get("/", (req, res) => {
  console.log("entered login");
  res.json(userData[0].username);
});

module.exports = router;

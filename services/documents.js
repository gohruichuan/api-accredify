require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

const router = new express.Router();

// sample DB docsData
const docsData = [
  {
    userId: 1,
    docCategory: 1,
    docName: "1",
  },
  {
    userId: 1,
    docCategory: 1,
    docName: "2",
  },
  {
    userId: 1,
    docCategory: 1,
    docName: "3",
  },
  {
    userId: 1,
    docCategory: 1,
    docName: "4",
  },
  {
    userId: 1,
    docCategory: 1,
    docName: "5",
  },
  {
    userId: 1,
    docCategory: 1,
    docName: "6",
  },
  {
    userId: 1,
    docCategory: 1,
    docName: "7",
  },
  {
    userId: 1,
    docCategory: 1,
    docName: "8",
  },
  {
    userId: 1,
    docCategory: 1,
    docName: "9",
  },
  {
    userId: 1,
    docCategory: 1,
    docName: "10",
  },
  {
    userId: 1,
    docCategory: 1,
    docName: "11",
  },
  {
    userId: 1,
    docCategory: 1,
    docName: "12",
  },
  {
    userId: 1,
    docCategory: 1,
    docName: "13",
  },
  {
    userId: 1,
    docCategory: 1,
    docName: "14",
  },
  {
    userId: 1,
    docCategory: 1,
    docName: "15",
  },
  {
    userId: 1,
    docCategory: 1,
    docName: "16",
  },
  {
    userId: 1,
    docCategory: 1,
    docName: "17",
  },
  {
    userId: 1,
    docCategory: 1,
    docName: "18",
  },
  {
    userId: 1,
    docCategory: 1,
    docName: "19",
  },
  {
    userId: 1,
    docCategory: 1,
    docName: "20",
  },
];

router.get("/:docCategory/documents", auth, (req, res) => {
  const queryLimit = 5;
  // userId from JWT auth.js (required)
  const userDetails = req.user;
  console.log("userDetails ", userDetails);
  // docCategory path param (required)
  let docCategory = req.params.docCategory;

  // pageNo query param (optional)
  const pageNo = parseInt(req.query.page);
  console.log("pageNo ", pageNo);

  if (!docCategory) {
    res.status(401);
    res.send(`Missing params: docCategory`);
    return res;
  }
  docCategory = parseInt(docCategory);
  // retreive documents from db
  const docsDataRes = docsData.filter(
    (doc) =>
      doc.userId === userDetails.userId && doc.docCategory === docCategory
  );
  console.log("docsDataRes ", docsDataRes);

  const pageIndexTo = pageNo === 1 ? 0 : (pageNo - 1) * queryLimit;
  console.log("pageIndexTo ", pageIndexTo);

  const pageIndexFrom =
    pageIndexTo === 0 ? queryLimit : pageIndexTo + queryLimit;

  console.log("pageIndexFrom ", pageIndexFrom);

  const test = docsDataRes.slice(pageIndexTo, pageIndexFrom);
  console.log("test ", test);

  res.json(test);
});

module.exports = router;

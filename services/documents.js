require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

const router = new express.Router();

// sample DB docsData
const docsData = [
  {
    id: 1, // Primary Key
    userId: 1, // Foreign Key
    docCategory: 1,
    status: "issued",
    document_name: "SWAB Test Result - 12 JAN 2022",
    issuer_name: "ISSUER NAME",
    issuer_logo_url: "https://placehold.co/600x400.png",
    recipient_name: "John Frusciante",
    received_on: "2022-01-12T17:58:25.000000Z",
    expire_at: "2023-01-12T00:00:00.000000Z",
    created_at: "2022-01-12T10:45:10.000000Z",
    updated_at: "2022-01-12T17:58:25.000000Z",
    archived_at: null,
    deleted_at: null,
  },
  {
    id: 2, // Primary Key
    userId: 1, // Foreign Key
    docCategory: 1,
    status: "approved",
    document_name: "SWAB Test Result - 12 JAN 2022",
    issuer_name: "ISSUER NAME",
    issuer_logo_url: "https://placehold.co/600x400.png",
    recipient_name: "John Frusciante",
    received_on: null,
    expire_at: null,
    created_at: "2022-01-12T10:45:10.000000Z",
    updated_at: "2022-01-12T17:58:25.000000Z",
    archived_at: null,
    deleted_at: null,
  },
  {
    id: 3,
    userId: 1,
    docCategory: 1,
    status: "approved",
    document_name: "SWAB Test Result - 11 JAN 2022",
    issuer_name: "ISSUER NAME",
    issuer_logo_url: "https://placehold.co/600x400.png",
    recipient_name: "John Frusciante",
    received_on: null,
    expire_at: null,
    created_at: "2022-01-11T10:45:10.000000Z",
    updated_at: "2022-01-11T17:58:25.000000Z",
    archived_at: null,
    deleted_at: null,
  },
  {
    id: 4,
    userId: 1,
    docCategory: 1,
    status: "approved",
    document_name: "SWAB Test Result - 10 JAN 2022",
    issuer_name: "ISSUER NAME",
    issuer_logo_url: "https://placehold.co/600x400.png",
    recipient_name: "John Frusciante",
    received_on: null,
    expire_at: null,
    created_at: "2022-01-10T10:45:10.000000Z",
    updated_at: "2022-01-10T17:58:25.000000Z",
    archived_at: null,
    deleted_at: null,
  },
  {
    id: 5,
    userId: 1,
    docCategory: 1,
    status: "approved",
    document_name: "SWAB Test Result - 09 JAN 2022",
    issuer_name: "ISSUER NAME",
    issuer_logo_url: "https://placehold.co/600x400.png",
    recipient_name: "John Frusciante",
    received_on: null,
    expire_at: null,
    created_at: "2022-01-09T10:45:10.000000Z",
    updated_at: "2022-01-09T17:58:25.000000Z",
    archived_at: null,
    deleted_at: null,
  },
  {
    id: 6,
    userId: 1,
    docCategory: 1,
    status: "approved",
    document_name: "SWAB Test Result - 08 JAN 2022",
    issuer_name: "ISSUER NAME",
    issuer_logo_url: "https://placehold.co/600x400.png",
    recipient_name: "John Frusciante",
    received_on: null,
    expire_at: null,
    created_at: "2022-01-08T10:45:10.000000Z",
    updated_at: "2022-01-08T17:58:25.000000Z",
    archived_at: null,
    deleted_at: null,
  },
  {
    id: 7,
    userId: 1,
    docCategory: 1,
    status: "approved",
    document_name: "SWAB Test Result - 07 JAN 2022",
    issuer_name: "ISSUER NAME",
    issuer_logo_url: "https://placehold.co/600x400.png",
    recipient_name: "John Frusciante",
    received_on: null,
    expire_at: null,
    created_at: "2022-01-07T10:45:10.000000Z",
    updated_at: "2022-01-07T17:58:25.000000Z",
    archived_at: null,
    deleted_at: null,
  },
  {
    id: 8,
    userId: 1,
    docCategory: 1,
    status: "approved",
    document_name: "SWAB Test Result - 06 JAN 2022",
    issuer_name: "ISSUER NAME",
    issuer_logo_url: "https://placehold.co/600x400.png",
    recipient_name: "John Frusciante",
    received_on: null,
    expire_at: null,
    created_at: "2022-01-06T10:45:10.000000Z",
    updated_at: "2022-01-06T17:58:25.000000Z",
    archived_at: null,
    deleted_at: null,
  },
  {
    id: 9,
    userId: 1,
    docCategory: 1,
    status: "approved",
    document_name: "SWAB Test Result - 05 JAN 2022",
    issuer_name: "ISSUER NAME",
    issuer_logo_url: "https://placehold.co/600x400.png",
    recipient_name: "John Frusciante",
    received_on: null,
    expire_at: null,
    created_at: "2022-01-05T10:45:10.000000Z",
    updated_at: "2022-01-05T17:58:25.000000Z",
    archived_at: null,
    deleted_at: null,
  },
  {
    id: 10,
    userId: 1,
    docCategory: 1,
    status: "approved",
    document_name: "SWAB Test Result - 04 JAN 2022",
    issuer_name: "ISSUER NAME",
    issuer_logo_url: "https://placehold.co/600x400.png",
    recipient_name: "John Frusciante",
    received_on: null,
    expire_at: null,
    created_at: "2022-01-04T10:45:10.000000Z",
    updated_at: "2022-01-04T17:58:25.000000Z",
    archived_at: null,
    deleted_at: null,
  },
  {
    id: 11,
    userId: 1,
    docCategory: 1,
    status: "approved",
    document_name: "SWAB Test Result - 03 JAN 2022",
    issuer_name: "ISSUER NAME",
    issuer_logo_url: "https://placehold.co/600x400.png",
    recipient_name: "John Frusciante",
    received_on: null,
    expire_at: null,
    created_at: "2022-01-03T10:45:10.000000Z",
    updated_at: "2022-01-03T17:58:25.000000Z",
    archived_at: null,
    deleted_at: null,
  },
  {
    id: 12,
    userId: 1,
    docCategory: 1,
    status: "approved",
    document_name: "SWAB Test Result - 02 JAN 2022",
    issuer_name: "ISSUER NAME",
    issuer_logo_url: "https://placehold.co/600x400.png",
    recipient_name: "John Frusciante",
    received_on: null,
    expire_at: null,
    created_at: "2022-01-02T10:45:10.000000Z",
    updated_at: "2022-01-02T17:58:25.000000Z",
    archived_at: null,
    deleted_at: null,
  },
  {
    id: 13,
    userId: 1,
    docCategory: 1,
    status: "approved",
    document_name: "SWAB Test Result - 01 JAN 2022",
    issuer_name: "ISSUER NAME",
    issuer_logo_url: "https://placehold.co/600x400.png",
    recipient_name: "John Frusciante",
    received_on: null,
    expire_at: null,
    created_at: "2022-01-01T10:45:10.000000Z",
    updated_at: "2022-01-01T17:58:25.000000Z",
    archived_at: null,
    deleted_at: null,
  },
  {
    id: 14,
    userId: 1,
    docCategory: 1,
    status: "approved",
    document_name: "SWAB Test Result - 30 DEC 2021",
    issuer_name: "ISSUER NAME",
    issuer_logo_url: "https://placehold.co/600x400.png",
    recipient_name: "John Frusciante",
    received_on: null,
    expire_at: null,
    created_at: "2021-12-30T10:45:10.000000Z",
    updated_at: "2021-12-30T17:58:25.000000Z",
    archived_at: null,
    deleted_at: null,
  },
  {
    id: 15,
    userId: 1,
    docCategory: 1,
    status: "approved",
    document_name: "SWAB Test Result - 29 DEC 2021",
    issuer_name: "ISSUER NAME",
    issuer_logo_url: "https://placehold.co/600x400.png",
    recipient_name: "John Frusciante",
    received_on: null,
    expire_at: null,
    created_at: "2021-12-29T10:45:10.000000Z",
    updated_at: "2021-12-29T17:58:25.000000Z",
    archived_at: null,
    deleted_at: null,
  },
  {
    id: 16,
    userId: 1,
    docCategory: 1,
    status: "approved",
    document_name: "SWAB Test Result - 28 DEC 2021",
    issuer_name: "ISSUER NAME",
    issuer_logo_url: "https://placehold.co/600x400.png",
    recipient_name: "John Frusciante",
    received_on: null,
    expire_at: null,
    created_at: "2021-12-28T10:45:10.000000Z",
    updated_at: "2021-12-28T17:58:25.000000Z",
    archived_at: null,
    deleted_at: null,
  },
  {
    id: 17,
    userId: 1,
    docCategory: 1,
    status: "approved",
    document_name: "SWAB Test Result - 27 DEC 2021",
    issuer_name: "ISSUER NAME",
    issuer_logo_url: "https://placehold.co/600x400.png",
    recipient_name: "John Frusciante",
    received_on: null,
    expire_at: null,
    created_at: "2021-12-27T10:45:10.000000Z",
    updated_at: "2021-12-27T17:58:25.000000Z",
    archived_at: null,
    deleted_at: null,
  },
  {
    id: 18,
    userId: 1,
    docCategory: 1,
    status: "approved",
    document_name: "SWAB Test Result - 26 DEC 2021",
    issuer_name: "ISSUER NAME",
    issuer_logo_url: "https://placehold.co/600x400.png",
    recipient_name: "John Frusciante",
    received_on: null,
    expire_at: null,
    created_at: "2021-12-26T10:45:10.000000Z",
    updated_at: "2021-12-26T17:58:25.000000Z",
    archived_at: null,
    deleted_at: null,
  },
  {
    id: 19,
    userId: 1,
    docCategory: 1,
    status: "approved",
    document_name: "SWAB Test Result - 25 DEC 2021",
    issuer_name: "ISSUER NAME",
    issuer_logo_url: "https://placehold.co/600x400.png",
    recipient_name: "John Frusciante",
    received_on: null,
    expire_at: null,
    created_at: "2021-12-25T10:45:10.000000Z",
    updated_at: "2021-12-25T17:58:25.000000Z",
    archived_at: null,
    deleted_at: null,
  },
  {
    id: 20,
    userId: 1,
    docCategory: 1,
    status: "approved",
    document_name: "SWAB Test Result - 24 DEC 2021",
    issuer_name: "ISSUER NAME",
    issuer_logo_url: "https://placehold.co/600x400.png",
    recipient_name: "John Frusciante",
    received_on: null,
    expire_at: null,
    created_at: "2021-12-24T10:45:10.000000Z",
    updated_at: "2021-12-24T17:58:25.000000Z",
    archived_at: null,
    deleted_at: null,
  },
];

router.get("/:docCategory/documents", auth, (req, res) => {
  const queryLimit = 5;
  // userId from JWT auth.js (required)
  const userDetails = req.user;
  console.log("userDetails ", userDetails);
  // docCategory path param (required)
  let docCategory = req.params.docCategory;

  // query param (optional)
  const pageNo = parseInt(req.query.page);
  const sortBy = req.query.sortBy;

  if (!docCategory) {
    res.status(401);
    res.send(`Missing params: docCategory`);
    return res;
  }
  docCategory = parseInt(docCategory);
  // retreive documents from db
  let docsDataRes = docsData.filter(
    (doc) =>
      doc.userId === userDetails.userId && doc.docCategory === docCategory
  );

  if (!docsDataRes.length) {
    res.status(404);
    res.send(`No records found`);
    return res;
  }

  console.log("sortBy ", sortBy);
  // sort order
  if (sortBy === "ASC") {
    docsDataRes = docsDataRes.sort((a, b) => {
      if (a.updated_at < b.updated_at) return -1;
      else return 1;
    });
  } else {
    docsDataRes = docsDataRes.sort((a, b) => {
      if (a.updated_at > b.updated_at) return -1;
      else return 1;
    });
  }
  console.log("docsDataRes ", docsDataRes);

  // calculate page indexes
  const pageIndexFrom = pageNo === 1 ? 0 : (pageNo - 1) * queryLimit;
  const pageIndexTo =
    pageIndexFrom === 0 ? queryLimit : pageIndexFrom + queryLimit;

  const resData = docsDataRes.slice(
    pageIndexFrom ? pageIndexFrom : 0,
    pageIndexTo ? pageIndexTo : queryLimit
  );

  res.json(resData);
});

module.exports = router;

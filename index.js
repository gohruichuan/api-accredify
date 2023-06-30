const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const login = require("./services/login");
const documents = require("./services/documents");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/login", login);
app.use("/document-module/identities", documents);

app.listen(4000);

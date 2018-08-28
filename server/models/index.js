const express = require("express");
const router = express.Router();
const blog = require("./blog/"),
  effects = require("./effects/"),
  replications = require("./replications/"),
  users = require("./users/"),
  invitations = require("./invitations/"),
  profiles = require("./profiles/"),
  reports = require("./reports/"),
  server = require("./server/"),
  search = require("./search/");

const errorHandler = function(err, req, res, next) {
  if (err["type"] === "API") {
    let error = { name: err["name"], message: err["message"] };
    res.status(400).send({ error });
  } else {
    console.log(err);
    res.status(500).send(err);
  }
};


router
  .use("/blog", blog)
  .use("/effects", effects)
  .use("/replications", replications)
  .use("/users", users)
  .use("/invitations", invitations)
  .use("/profiles", profiles)
  .use("/reports", reports)
  .use("/server", server)
  .use("/search", search)

  .use(errorHandler);


module.exports = router;

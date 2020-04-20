const router = require("express").Router();
let user = require("../models/user");

router.route("/").get((req, res) => {
  user
    .find()
    .then((user) => res.json(user))
    .catch((err) => {
      res.status(400).json("Error" + err);
    });
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const newUser = new user({ username });

  newUser
    .save()
    .then(() => res.json("User Added"))
    .catch((err) => {
      res.status(400).json("Error" + err);
    });
});

module.exports = router;

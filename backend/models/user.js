const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
      minlength: 3,
    },
  },
  { timestamps: true }
);

const user = mongoose.model("user", userSchema);

module.exports = user;

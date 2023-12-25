const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, require: true },
    surname: { type: String, require: true },
    age: { type: Number },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

const mongoose = require("mongoose");
const {Schema} = mongoose;
const userSchema = new Schema({

    firstname: String,
    lastname: String,
    email: { type: String, unique: true, required: true },
    password: String,
},
  {
    timestamps: true,
    versionKey: false,
  }
  );

  const User = mongoose.model("Users", userSchema);

module.exports = User;
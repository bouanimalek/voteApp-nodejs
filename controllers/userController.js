const User = require("../models/userSchema");


//get all users
exports.getAllUsers = async (req, res) => {
    try {
     
        const users = await User.find({});
        res.json(users);
      
    } catch (error) {
      res.status(500).json({ message: "Internal server error!" });
    }
  };

// get user by id
exports.getUserById = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Internal server error!" });
    }
  };
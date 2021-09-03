const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const passport = require("passport");

// get all users
router.get(
    "/users",
    passport.authenticate("bearer", { session: false }),
    userController.getAllUsers
  );
  
// get user by id
router.get(
    "/users/:id",
    passport.authenticate("bearer", { session: false }),
    userController.getUserById
  );

  module.exports = router;
const express = require("express");
const router = express.Router();
const voteController = require("../controllers/voteController");
const passport = require("passport");


// get vote by user
router.get(
  "/votes/getVoteByUser/:id/:subjectId",
  passport.authenticate("bearer", { session: false }),
  voteController.getVoteByUser
);

// add vote
router.post(
    "/votes/addYesVote/:id",
    passport.authenticate("bearer", { session: false }),
    voteController.addYesVote
  );

  module.exports = router;
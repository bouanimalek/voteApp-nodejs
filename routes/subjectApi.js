const express = require("express");
const router = express.Router();
const subjectController = require("../controllers/subjectController");
const passport = require("passport");

// get all subjects
router.get(
  "/subjects",
  passport.authenticate("bearer", { session: false }),
  subjectController.getAllSubjects
);

// get subject by id
router.get(
  "/subjects/:id",
  passport.authenticate("bearer", { session: false }),
  subjectController.getSubjectById
);

// create subject
router.post(
  "/subjects",
  passport.authenticate("bearer", { session: false }),
  subjectController.createSubject
);

module.exports = router;
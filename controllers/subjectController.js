const Subject = require("../models/subjectSchema");
const Vote = require("../models/voteSchema");

// get all subjects
exports.getAllSubjects = async (req, res) => {
    try {
      const subjects = await Subject.find({})
      .populate({
        path: "vote",
        select: "yesVote noVote -_id",
      });
      res.json(subjects);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error!" });
    }
  };
  
  // create new subject
  exports.createSubject = async (req, res) => {
    try {
      const subject = await Subject.create(req.body);
      const vote = await Vote.create({ subject: subject._id, yesVote: 0, noVote: 0});
      const subjectAffectedVote = await Subject.findByIdAndUpdate(
        subject._id,
        { vote: vote._id},
        { new: true }
      );
      res.json(subjectAffectedVote);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error!" });
    }
  };
  
  // get subject by id
  exports.getSubjectById = async (req, res) => {
    try {
      const subject = await Subject.findById(req.params.id)
      .populate({
        path: "vote",
        select: "yesVote noVote -_id",
      });
      res.json(subject);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error!" });
    }
  };
  
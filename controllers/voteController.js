const Vote = require("../models/voteSchema");

// get all votes
exports.getAllVotes = async (req, res) => {
    try {
      const votes = await Vote.find({});
      res.json(votes);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error!" });
    }
  };

  // add yes vote
  exports.addYesVote = async (req, res) => {
    try {
      const vote = await Vote.findOne({subject: req.params.id});
      console.log(vote);
      const voteAdded = await Vote.findByIdAndUpdate(
        vote._id,
        { $inc: { yesVote: +1 } },
        { new: true }
      );
      const voteAddedUser = await Vote.findByIdAndUpdate(
        vote._id,
        {
            $push: { user: req.user._id },
        },
        { new: true }
      );
   
      res.json(voteAddedUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error!" });
    }
  };

  //get vote by user
  exports.getVoteByUser = async (req, res) => {
    try {
      const vote = await Vote.findOne({user: req.params.id, subject: req.params.subjectId});
      if(vote){

          res.json(true);
      }else{
          res.json(false);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error!" });
    }
  };

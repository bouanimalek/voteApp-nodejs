const mongoose = require("mongoose");
const { Schema } = mongoose;


const voteSchema = new Schema({
    yesVote: {
        type: Number,
        default: 0,
      },
    noVote: {
        type: Number,
        default: 0,
      },
    subject: { type: Schema.Types.ObjectId, ref: "Subjects" },
    user:  [{ type: Schema.Types.ObjectId, ref: "Users" , unique: true,}]
}
,
  {
    timestamps: true,
    versionKey: false,
  }
);

const Vote = mongoose.model("Votes", voteSchema);

module.exports = Vote;
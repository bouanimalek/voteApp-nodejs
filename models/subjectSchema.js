const mongoose = require("mongoose");
const { Schema } = mongoose;


const subjectSchema = new Schema({
    title: String,
    description: String,
    vote: { type: Schema.Types.ObjectId, ref: "Votes" },
}
,
  {
    timestamps: true,
    versionKey: false,
  }
);

const Subject = mongoose.model("Subjects", subjectSchema);

module.exports = Subject;
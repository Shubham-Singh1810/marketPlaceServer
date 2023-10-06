const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    projectLinks: [
        {
            name:{
                type:String,
            },
            link:{
                type :String,
            }
        }
    ],
    requiredSkills : [
        {type: String}
    ],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    postImg:{
        type:String,
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
    comments:[
        {
            message:{
                type :String
            },
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "users",
            },
        }
    ],
    collaborators:[{ type: mongoose.Schema.Types.ObjectId, ref: "users" }]
  },
  { timestamps: { createdAt: "createdAt" } }
);

let Project = mongoose.model("projects", projectSchema);
module.exports = Project;

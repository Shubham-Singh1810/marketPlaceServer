const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
    },
    userType: {
      type: String,
    },
    bio: {
      type: String,
    },
    skills: [
      {
        name: {
          type: String,
        },
        experience: {
          type: String,
        },
      },
    ],
    intrest: [{ type: String }],
    addres: {
      city: {
        type: String,
      },
      country: {
        type: String,
      },
      state: {
        type: String,
      },
      pincode: {
        type: String,
      },
    },
    userName: {
      type: String,
    },
    phone: {
      type: Number,
    },
  },
  { timestamps: { createdAt: "createdAt" } }
);

let User = mongoose.model("users", userSchema);
module.exports = User;

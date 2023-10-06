const mongoose = require("mongoose");

const tempUserSchema = mongoose.Schema(
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
    otp: {
      type: Number,
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

let tempUser = mongoose.model("tempUsers", tempUserSchema);
module.exports = tempUser;

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const mentorSchema = new Schema(
  {
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: Number,
    zipCode: Number,
    imageUrl: String,
    educationLevel: {
      type: String,
      enum: [" ", "High School", "Some College", "Bachelor's Degree", "Bootcamp Grad", "Master's Degree", "PhD", "Other Post-Grad" ]
       },
    skillsAndKnowledge: Array,
    languagesSpoken: Array,
    students: [{ type: Schema.Types.ObjectId, ref: "Student" }],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Mentor", mentorSchema);

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const studentSchema = new Schema(
  {
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: Number,
    zipCode: Number,
    imageUrl: String,
    interests: Array,
    languagesSpoken: Array,
    quizzesTaken: [{ type: Schema.Types.ObjectId, ref: "Quiz" }],
    scoreAverage: Number,
    mentors: [{ type: Schema.Types.ObjectId, ref: "Mentor" }],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Student", studentSchema);

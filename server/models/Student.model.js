const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const studentSchema = new Schema(
  {
    userName: String,
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: {
      type: Number,
      required: true},
    zipCode: {
      type: Number,
      required: true},
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

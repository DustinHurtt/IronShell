const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const quizSchema = new Schema(
  {
    question: String,
    question1Answers: {
      answer1: String,
      answer2: String,
      answer3: String,
      correctAnswer: String,
      answeredCorrectly: Boolean,
    },
    question2Answers: {
      answer1: String,
      answer2: String,
      answer3: String,
      correctAnswer: String,
      answeredCorrectly: Boolean,
    },
    question3Answers: {
      answer1: String,
      answer2: String,
      answer3: String,
      correctAnswer: String,
      answeredCorrectly: Boolean,
    },
    question4Answers: {
      answer1: String,
      answer2: String,
      answer3: String,
      correctAnswer: String,
      answeredCorrectly: Boolean,
    },
    question5Answers: {
      answer1: String,
      answer2: String,
      answer3: String,
      correctAnswer: String,
      answeredCorrectly: Boolean,
    },
    question6Answers: {
      answer1: String,
      answer2: String,
      answer3: String,
      correctAnswer: String,
      answeredCorrectly: Boolean,
    },
    question7Answers: {
      answer1: String,
      answer2: String,
      answer3: String,
      correctAnswer: String,
      answeredCorrectly: Boolean,
    },
    question8Answers: {
      answer1: String,
      answer2: String,
      answer3: String,
      correctAnswer: String,
      answeredCorrectly: Boolean,
    },
    question9Answers: {
      answer1: String,
      answer2: String,
      answer3: String,
      correctAnswer: String,
      answeredCorrectly: Boolean,
    },
    question10Answers: {
      answer1: String,
      answer2: String,
      answer3: String,
      correctAnswer: String,
      answeredCorrectly: Boolean,
    },
    student: { type: Schema.Types.ObjectId, ref: "Student", required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Quiz", quizSchema);

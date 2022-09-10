var express = require("express");
var router = express.Router();

const Student = require("../models/Student.model");
const Quiz = require("../models/Quiz.model");

require("dotenv/config");

const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/", function (req, res, next) {
    res.send("respond with a resource");
  });

router.post("/:id/add-quiz", isLoggedIn, (req, res, next) => {
  Quizzes.create({
    user: req.user._id,
    difficulty: req.body.difficulty,
    question: req.body.question,
    question1Answers: {
      answer1: req.body.question1.answer1,
      answer2: req.body.question1.answer2,
      answer3: req.body.question1.answer3,
      correctAnswer: req.body.question1.correctAnswer,
      answeredCorrectly: req.body.question1.answeredCorrectly,
    },
    question2Answers: {
      answer1: req.body.question1.answer1,
      answer2: req.body.question1.answer2,
      answer3: req.body.question1.answer3,
      correctAnswer: req.body.question1.correctAnswer,
      answeredCorrectly: req.body.question1.answeredCorrectly,
    },
    question3Answers: {
      answer1: req.body.question1.answer1,
      answer2: req.body.question1.answer2,
      answer3: req.body.question1.answer3,
      correctAnswer: req.body.question1.correctAnswer,
      answeredCorrectly: req.body.question1.answeredCorrectly,
    },
    question4Answers: {
      answer1: req.body.question1.answer1,
      answer2: req.body.question1.answer2,
      answer3: req.body.question1.answer3,
      correctAnswer: req.body.question1.correctAnswer,
      answeredCorrectly: req.body.question1.answeredCorrectly,
    },
    question5Answers: {
      answer1: req.body.question1.answer1,
      answer2: req.body.question1.answer2,
      answer3: req.body.question1.answer3,
      correctAnswer: req.body.question1.correctAnswer,
      answeredCorrectly: req.body.question1.answeredCorrectly,
    },
    question6Answers: {
      answer1: req.body.question1.answer1,
      answer2: req.body.question1.answer2,
      answer3: req.body.question1.answer3,
      correctAnswer: req.body.question1.correctAnswer,
      answeredCorrectly: req.body.question1.answeredCorrectly,
    },
    question7Answers: {
      answer1: req.body.question1.answer1,
      answer2: req.body.question1.answer2,
      answer3: req.body.question1.answer3,
      correctAnswer: req.body.question1.correctAnswer,
      answeredCorrectly: req.body.question1.answeredCorrectly,
    },
    question8Answers: {
      answer1: req.body.question1.answer1,
      answer2: req.body.question1.answer2,
      answer3: req.body.question1.answer3,
      correctAnswer: req.body.question1.correctAnswer,
      answeredCorrectly: req.body.question1.answeredCorrectly,
    },
    question9Answers: {
      answer1: req.body.question1.answer1,
      answer2: req.body.question1.answer2,
      answer3: req.body.question1.answer3,
      correctAnswer: req.body.question1.correctAnswer,
      answeredCorrectly: req.body.question1.answeredCorrectly,
    },
    question10Answers: {
      answer1: req.body.question1.answer1,
      answer2: req.body.question1.answer2,
      answer3: req.body.question1.answer3,
      correctAnswer: req.body.question1.correctAnswer,
      answeredCorrectly: req.body.question1.answeredCorrectly,
    }
  })
    .then(function (newQuiz) {
      Student.findByIdAndUpdate(
        { _id: req.params.id },
        { $addToSet: { quizzes: newQuiz } }
      ).then(function (result) {
        res.json(newQuiz);
      });
    })
    .catch(function (error) {
      res.json(error);
    });
});


module.exports = router;
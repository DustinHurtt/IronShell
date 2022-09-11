import React, { useEffect, useState } from "react";
import axios from "axios";

const Quiz = () => {
  const [quiz, setQuiz] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [tested, setTested] = useState(false);

  const fixChars = (str) => {
    return str.replace(
      /&quot;|&#039;|&Uuml;|&amp;|&apos;|amp;|&eacute|&Eacute;|&rsquo;|&oacute;|&ocirc;|&ntilde;|&uuml;|&ouml;|&oacute;|&shy;(\d+);/g,
      (match, dec) => String.fromCharCode(dec)
    );
  };

  useEffect(() => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple"
      )
      .then((apiResponse) => {
        setQuiz(
          apiResponse && apiResponse.data ? apiResponse.data.results : null
        );
        setCorrectAnswers(
          apiResponse && apiResponse.data
            ? apiResponse.data.results.map((eachQuestion) => {
                eachQuestion.incorrect_answers.push(
                  eachQuestion.correct_answer
                );
                eachQuestion.incorrect_answers = shuffle(
                  eachQuestion.incorrect_answers
                );
                return fixChars(eachQuestion.correct_answer);
              })
            : null
        );
      });
  }, []);

  const handleSelection = (e) => {
    let currentElement = e.target.id.slice(-1);
    if (currentElement > userAnswers.length) {
      for (let i = userAnswers.length - 1; i < currentElement; i++) {
        userAnswers[i + 1] = "";
      }
      userAnswers[currentElement] = e.target.value;
    } else if (
      userAnswers[currentElement] === undefined ||
      currentElement === userAnswers.length
    ) {
      setUserAnswers([...userAnswers, e.target.value]);
    } else {
      userAnswers[currentElement] = e.target.value;
    }
  };

  const calculateQuiz = (userAnswers, correctAnswers) => {
    let score = 0;
    for (let i = 0; i < userAnswers.length; i++) {
      if (userAnswers[i] === correctAnswers[i]) {
        score++;
      }
    }
    setScore(score);
    setTested(true);
  };

  const shuffle = (arr) => {
    const newArr = arr.slice();
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr;
  };

  return (
    <div id="container">
      <h1>Quiz Page</h1>
      {quiz.map((eachQuestion, mainindex) => {
        return (
          <form type="submit">
            <h3>{fixChars(eachQuestion.question)}</h3>
            {eachQuestion.incorrect_answers.map((incorrect_answer, index) => {
              return (
                <>
                  <input
                    type="radio"
                    id={mainindex}
                    name="answer"
                    value={fixChars(incorrect_answer)}
                    onChange={handleSelection}
                  />
                  <label htmlFor={mainindex}>
                    {fixChars(incorrect_answer)}
                  </label>
                </>
              );
            })}
          </form>
        );
      })}
      <button onClick={() => calculateQuiz(userAnswers, correctAnswers)}>
        Check Your Score!
      </button>
      {tested && <h3>{score * 10 + "%"}</h3>}
    </div>
  );
};

export default Quiz;

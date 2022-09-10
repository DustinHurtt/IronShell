import React, { useEffect, useState } from "react";
import axios from "axios";

const Quiz = () => {
  const [quiz, setQuiz] = useState([]);

  const unescape = (str) => {
    return str.replace(
      /&quot;|&#039;|&Uuml;|&amp;|&apos;|amp;|&eacute|&Eacute;|&rsquo;|&oacute;(\d+);/g,
      (match, dec) => String.fromCharCode(dec)
    );
  };

  console.log(quiz);

  useEffect(() => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple"
      )
      .then((apiResponse) => {
        setQuiz(
          apiResponse && apiResponse.data ? apiResponse.data.results : null
        );
      });
  }, []);

  return (
    <div id="container">
      <h1>Quiz Page</h1>
      <form type="submit">
        {quiz.map((eachQuestion, index) => {
          return (
            <>
              <h3>{unescape(eachQuestion.question)}</h3>
              <input type="radio" id="correct_answer" />
              <label htmlFor="correct_answer">
                {unescape(eachQuestion.correct_answer)}
              </label>
              {eachQuestion.incorrect_answers.map((incorrect_answer, index) => {
                return (
                  <>
                    <input type="radio" id="incorrect_answer" />
                    <label htmlFor="incorrect_answer">
                      {unescape(incorrect_answer)}
                    </label>
                  </>
                );
              })}
            </>
          );
        })}
      </form>
    </div>
  );
};

export default Quiz;

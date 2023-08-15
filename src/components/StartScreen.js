import React from "react";

const StartScreen = ({ noOfQuestions, dispatch }) => {
  const startQuiz = () => {
    dispatch({ type: "start" });
  };

  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{noOfQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={startQuiz}>
        Start Quiz
      </button>
    </div>
  );
};

export default StartScreen;

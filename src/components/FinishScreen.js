import React from "react";

const FinishScreen = ({ points, maxPossiblePoints, highScore, dispatch }) => {
  const percentage = (points / maxPossiblePoints) * 100;
  let backgroundColor;
  if (percentage <= 40) {
    backgroundColor = "#961316";
  } else {
    backgroundColor = "#228b22";
  }
  return (
    <>
      <p className="result" style={{ backgroundColor: backgroundColor }}>
        You Scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(High Score: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Play Again
      </button>
    </>
  );
};

export default FinishScreen;

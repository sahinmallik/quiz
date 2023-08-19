import React, { useEffect } from "react";

const Timer = ({ dispatch, secondRemaining }) => {
  const minutes = Math.floor(secondRemaining / 60);
  const seconds = secondRemaining % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {minutes < 10 && "0"}
      {minutes} : {seconds < 10 && "0"}
      {seconds}
    </div>
  );
};

export default Timer;

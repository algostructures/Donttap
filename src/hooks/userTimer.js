import { useState, useEffect } from "react";

const useTimer = () => {
  const [seconds, setSeconds] = useState(30);
  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds("Over");
    }
  });
  return seconds;
};

export default useTimer;

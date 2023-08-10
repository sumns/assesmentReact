import React, { useState, useEffect } from 'react';

const Timer = ({ duration, clockwise, every30 }) => {
  const [time, setTime] = useState(clockwise ? 0 : duration);

  useEffect(() => {
    const interval = setInterval(() => {
      if (clockwise) {
        if (time < duration) {
          setTime(time + 1);
        } else {
          clearInterval(interval);
        }
      } else {
        if (time > 0) {
          setTime(time - 1);
        } else {
          clearInterval(interval);
        }
      }

      if (every30 && time % 30 === 0) {
        console.log('Hello');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time, duration, clockwise, every30]);

  return (
    <div>
      <p>{time} seconds</p>
      {every30 && time % 30 === 0 && <p>Hello</p>}
    </div>
  );
};

export default Timer;

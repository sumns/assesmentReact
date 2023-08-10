import React from "react";
import "./App.css";
import Timer from './Timer';

const App = () => {
  return (
    <div>
      <Timer duration={60} clockwise={true} every30={true} />
    </div>
  );
};

export default App;

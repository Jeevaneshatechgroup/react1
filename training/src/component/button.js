import React, { useState } from 'react';
import './app.css';

const App = () => {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    alert('Button clicked!!');
  };

  return (
    <div className="App">
      <button
        className={`interactive-button ${isClicked ? 'clicked' : ''}`}
        onClick={handleClick}
      >
        {isClicked ? 'Clicked!' : 'Click Me'}
      </button>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import './App.css';

function Tab({ children }){

  const [highlightStyle, setHighlightStyle] = useState({ left: 0, opacity: 0 });

  function moveHighLight(e) {
   //update highlight style to move the highlight
   setHighlightStyle({ left: e.nativeEvent.layerX -150 });
  }

  function hideHightlight(e) {
   setHighlightStyle({ left: e.nativeEvent.layerX -150, opacity: 0 });
  }

  return (
    <div className="tab" onMouseOut={hideHightlight} onMouseMove={moveHighLight}>
      <div className="highlight" style={highlightStyle} />
      {children}
    </div>
  );
}

function App() {

  return (
    <div className="app">
      <div className="browser">
        <div className="tabs">
          <Tab>
              <a>Home</a>
          </Tab>
          <Tab>
              <a>About</a>
          </Tab>
          <Tab>
              <a>Contact</a>
          </Tab>
        </div>

        <div className="viewport">Pages Go Here</div>
      </div>
    </div>
  );
}

export default App;

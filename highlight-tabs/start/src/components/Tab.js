import React, { useState } from 'react';

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


  export default Tab;
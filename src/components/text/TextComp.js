import React from 'react';

const TextComp = ({ txt, styleTxt, styleDiv, firstTxt, styleFirstTxt }) => {
  return (
    <div>
      <div style={styleDiv}>
        <p style={styleFirstTxt}>{firstTxt}</p> <p style={styleTxt}>{txt}</p>
      </div>
    </div>
  );
};

export default TextComp;

import React from 'react';

const TextComp = ({ txt, styleTxt }) => {
  return (
    <div>
      <div>
        {' '}
        <p style={styleTxt}>{txt}</p>
      </div>
    </div>
  );
};

export default TextComp;

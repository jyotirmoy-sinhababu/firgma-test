import React from 'react';
import './firstpage.css';

import TextComp from '../../components/text/TextComp';

import grp from '../../images/Group.jpg';

const FirstPage = () => {
  return (
    <>
      <div className='first-div' style={{ backgroundImage: `url(${grp})` }}>
        <TextComp
          txt={'Best Machine and Casting Solution'}
          styleTxt={{
            width: '442px',
            height: '90px',
            fontFamily: 'ITC Avant Garde Gothic Std',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '50px',
            lineHeight: '41px',
            letterSpacing: '-0.01em',
            color: '#FFFFFF',
            border: '1px solid #000000',
          }}
        />
      </div>
    </>
  );
};

export default FirstPage;

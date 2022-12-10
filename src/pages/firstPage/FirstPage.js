import React from 'react';
import './firstpage.css';

import TextComp from '../../components/text/TextComp';

import grp from '../../images/Group.jpg';

const FirstPage = () => {
  return (
    <>
      <div
        className='first-div'
        style={{ backgroundImage: `url(${grp})`, backgroundSize: 'contain' }}
      >
        <TextComp
          txt={'Best Machine and Casting Solution'}
          styleTxt={{
            display: 'flex',
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
          styleDiv={{ display: 'flex', paddingLeft: '40px' }}
        />
      </div>
      <div>
        <div>
          <TextComp
            styleTxt={{
              width: '639px',
              height: '170px',
              fontFamily: 'ITC Avant Garde Gothic Std',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '70px',
              lineHeight: '85px',
              letterSpacing: '-0.02em',
              color: '#222222',
            }}
            styleFirstTxt={{
              position: 'absolute',
              width: '155px',
              height: '18px',
              fontFamily: 'ITC Avant Garde Gothic Std',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '16px',
              lineHeight: '18px',
              letterSpacing: '-0.02em',
              color: '#EC2232',
            }}
            firstTxt={'smart working team'}
            txt={'Some of the best of industry experts'}
          />
        </div>
        <div>
          <TextComp
            txt={
              'amet consectetur adipisicing elit. Numquam minima nam totam consequatur sit saepe, similique maiores earum perferendis animi esse'
            }
            styleTxt={{
              width: '428px',
              height: '137px',
              left: '1072px',
              top: '1297px',
              fontFamily: 'ITC Avant Garde Gothic Std',
              fontStyle: 'normal',
              fontWeight: '300',
              fontSize: '18px',
              lineHeight: '29px',
              color: '#000000',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default FirstPage;

import React from 'react';
import coinbaseLogo from '../icons/coinbaseLogo.svg';

const CoinbaseIcon = () => {
  return (
    <React.Fragment>
      <img
        src={coinbaseLogo}
        alt="Coinbase Logo, click to be redirected to login"
      />
    </React.Fragment>
  );
};

export default CoinbaseIcon;

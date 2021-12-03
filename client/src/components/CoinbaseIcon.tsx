import React, { FC } from 'react';
import coinbaseLogo from '../icons/coinbaseLogo.svg';

const CoinbaseIcon : FC = () => {
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

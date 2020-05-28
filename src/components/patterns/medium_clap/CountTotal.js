import React from 'react';

const CountTotal = ({countTotal}) => {
  return (
    <span className="total" id="clapCountTotal">
      {countTotal}
    </span>
  );
}

export default CountTotal;

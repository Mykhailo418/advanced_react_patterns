import React from 'react';

const CountTotal = ({countTotal, setRef}) => {
  return (
    <span className="total" ref={setRef} data-refkey="clapCountTotal">
      {countTotal}
    </span>
  );
}

export default CountTotal;

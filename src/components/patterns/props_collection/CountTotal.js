import React from 'react';

const CountTotal = ({countTotal, setRef, ...restProps}) => {
  return (
    <span className="total" ref={setRef} {...restProps}>
      {countTotal}
    </span>
  );
}

export default CountTotal;

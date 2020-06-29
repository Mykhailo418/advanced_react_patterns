import React, { useContext } from 'react';
import { MediumClapContext } from './MediumClap';

const CountTotal = () => {
  const {countTotal, setRef} = useContext(MediumClapContext);
  return (
    <span className="total" ref={setRef} data-refkey="clapCountTotal">
      {countTotal}
    </span>
  );
}

export default CountTotal;

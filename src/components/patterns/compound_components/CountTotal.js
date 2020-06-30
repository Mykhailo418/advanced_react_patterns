import React, { useContext } from 'react';
import { MediumClapContext } from './MediumClap';

const CountTotal = ({style: customStyle = {}}) => {
  const {countTotal, setRef} = useContext(MediumClapContext);
  return (
    <span className="total" ref={setRef} data-refkey="clapCountTotal" style={customStyle}>
      {countTotal}
    </span>
  );
}

export default CountTotal;

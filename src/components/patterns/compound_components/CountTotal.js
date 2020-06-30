import React, { useContext } from 'react';
import { MediumClapContext } from './MediumClap';

const CountTotal = ({style: customStyle = {}, className}) => {
  const {countTotal, setRef} = useContext(MediumClapContext);
  const classNames = ["total", className].join(' ').trim();
  return (
    <span className={classNames} ref={setRef} data-refkey="clapCountTotal" style={customStyle}>
      {countTotal}
    </span>
  );
}

export default CountTotal;

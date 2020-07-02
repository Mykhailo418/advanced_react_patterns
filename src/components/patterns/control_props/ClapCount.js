import React, { useContext } from 'react';
import { MediumClapContext } from './MediumClap';

const ClapCount = ({style: customStyle = {}, className}) => {
  const {count, setRef} = useContext(MediumClapContext);
  const classNames = ["count", className].join(' ').trim();
  return (
    <span className={classNames} ref={setRef} data-refkey="clapCount" style={customStyle}>
      + {count}
    </span>
  );
}

export default ClapCount;

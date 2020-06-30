import React, { useContext } from 'react';
import { MediumClapContext } from './MediumClap';

const ClapCount = ({style: customStyle = {}}) => {
  const {count, setRef} = useContext(MediumClapContext);
  return (
    <span className="count" ref={setRef} data-refkey="clapCount" style={customStyle}>
      + {count}
    </span>
  );
}

export default ClapCount;

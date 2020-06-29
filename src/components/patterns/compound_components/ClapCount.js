import React, { useContext } from 'react';
import { MediumClapContext } from './MediumClap';

const ClapCount = () => {
  const {count, setRef} = useContext(MediumClapContext);
  return (
    <span className="count" ref={setRef} data-refkey="clapCount">
      + {count}
    </span>
  );
}

export default ClapCount;

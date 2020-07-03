import React from 'react';

const ClapCount = ({count, setRef}) => {
  return (
    <span className="count" ref={setRef} data-refkey="clapCount">
      + {count}
    </span>
  );
}

export default ClapCount;

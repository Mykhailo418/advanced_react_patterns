import React from 'react';

const ClapCount = ({count, setRef, ...restProps}) => {
  return (
    <span className="count" ref={setRef} {...restProps} >
      + {count}
    </span>
  );
}

export default ClapCount;

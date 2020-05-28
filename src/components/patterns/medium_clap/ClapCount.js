import React from 'react';

const ClapCount = ({count}) => {
  return (
    <span className="count" id="clapCount">
      + {count}
    </span>
  );
}

export default ClapCount;

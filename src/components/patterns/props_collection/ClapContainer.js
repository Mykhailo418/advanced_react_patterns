import React from 'react';

const ClapContainer = ({children, handleClick, setRef, toggleProps, ...restProps}) => {
  return (
    <button ref={setRef} className="clap" onClick={handleClick} {...toggleProps} {...restProps}>
      {children}
    </button>
  );
};

export default ClapContainer;

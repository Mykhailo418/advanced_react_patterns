import React, { useMemo } from 'react';

const ClapContainer = ({children, handleClick, setRef, getToggleProps, ...restProps}) => {
  const extraProps = {
    'aria-pressed': false,
    onClick: e => {
      console.log('clicked');
      handleClick(e);
    }
  };

  return (
    <button ref={setRef} className="clap" {...getToggleProps(extraProps)} {...restProps}>
      {children}
    </button>
  );
};

export default ClapContainer;

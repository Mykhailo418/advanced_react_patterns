import React from 'react';

const extraProps = {
  'aria-pressed': false,
  onClick: () => console.log('clicked')
};

const ClapContainer = ({children, handleClick, setRef, getToggleProps, ...restProps}) => {

  return (
    <button ref={setRef} className="clap" onClick={handleClick} {...getToggleProps(extraProps)} {...restProps}>
      {children}
    </button>
  );
};

export default ClapContainer;

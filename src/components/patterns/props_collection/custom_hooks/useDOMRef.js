import React, { useState, useCallback } from 'react';

const useDOMRef = () => {
  const [DOMRef, setRefState] = useState({});

  const setRef = useCallback(node => {
    setRefState(prevrefState => ({
      ...prevrefState,
      [node.dataset.refkey]: node
    }) );
  }, []);

  return [DOMRef, setRef];
};

export default useDOMRef;

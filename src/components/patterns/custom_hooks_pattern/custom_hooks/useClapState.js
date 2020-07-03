import React, { useState, useCallback } from 'react';

export const MAX_CLAP_COUNT = 50;

const initState = {
  count: 0,
  countTotal: 267,
  isClicked: false
};

const useClapState = () => {
  const [clapState, setClapState] = useState(initState);

  const updateClapState = useCallback(() => {
    setClapState(({count, countTotal}) => ({
      count: Math.min(count + 1, MAX_CLAP_COUNT),
      countTotal: count < MAX_CLAP_COUNT ? countTotal + 1 : countTotal,
      isClicked: true
    }) );
  }, []);

  return [clapState, updateClapState];
};

export default useClapState;

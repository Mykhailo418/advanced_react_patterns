import React, { useState, useCallback } from 'react';

export const MAX_CLAP_COUNT = 50;

const initState = {
  count: 0,
  countTotal: 267,
  isClicked: false
};

const useClapState = () => {
  const [clapState, setClapState] = useState(initState);
  const {count, countTotal} = clapState;

  const updateClapState = useCallback(() => {
    setClapState(({count, countTotal}) => ({
      count: Math.min(count + 1, MAX_CLAP_COUNT),
      countTotal: count < MAX_CLAP_COUNT ? countTotal + 1 : countTotal,
      isClicked: true
    }) );
  }, [count, countTotal]);

  // props collection for 'click'
  const toggleProps = {
    onClick: updateClapState,
    'aria-pressed': clapState.isClicked
  }

  // props collection for 'count'
  const counterProps = {
    count: count,
    // attributes
    'aria-valuemax': MAX_CLAP_COUNT,
    'aria-valuemin': 0,
    'aria-valuenow': count
  }

  return {clapState, updateClapState, toggleProps, counterProps};
};

export default useClapState;

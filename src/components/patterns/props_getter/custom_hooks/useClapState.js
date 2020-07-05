import React, { useState, useCallback } from 'react';

export const MAX_CLAP_COUNT = 50;

const initState = {
  count: 0,
  countTotal: 267,
  isClicked: false
};

const callFnInSequence = (...fns) => (...args) => {
  fns.forEach(fn => fn && fn(...args));
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

  const getToggleProps = ({onClick, ...otherProps} = {}) => ({
    onClick: callFnInSequence(updateClapState, onClick),
    'aria-pressed': clapState.isClicked,
    ...otherProps
  });

  const getCounterProps = ({...otherProps} = {}) => ({
    count: count,
    'aria-valuemax': MAX_CLAP_COUNT,
    'aria-valuemin': 0,
    'aria-valuenow': count,
    ...otherProps
  });

  return {clapState, updateClapState, getToggleProps, getCounterProps};
};

export default useClapState;

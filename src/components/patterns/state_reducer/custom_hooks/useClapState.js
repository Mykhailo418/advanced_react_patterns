import React, { useState, useCallback, useRef, useReducer } from 'react';
import usePrevious from './usePrevious';

export const MAX_CLAP_COUNT = 50;
const INIT_SATATE = {
  count: 0,
  countTotal: 267,
  isClicked: false
};
export const CLAP_ACTION = 'clap';
export const RESET_ACTION = 'reset';

const callFnInSequence = (...fns) => (...args) => {
  fns.forEach(fn => fn && fn(...args));
};

export const internalReducer = (state, action) => {
  const { type, payload } = action;
  const { count, countTotal } = state;

  switch (type) {
    case CLAP_ACTION:
      return {
        count: Math.min(count + 1, MAX_CLAP_COUNT),
        countTotal: count < MAX_CLAP_COUNT ? countTotal + 1 : countTotal,
        isClicked: true
      };
    case RESET_ACTION:
      return payload;
    default:
      return state;
  }
};

const useClapState = (initState = INIT_SATATE, reducer = internalReducer) => {
  const initStateRef = useRef(initState);
  const [clapState, dispatch] = useReducer(reducer, initState);
  const {count, countTotal} = clapState;
  const resetRef = useRef(0);

  const updateClapState = () => dispatch({type: CLAP_ACTION});

  const prevCount = usePrevious(count);
  const reset = useCallback(() => {
    if (prevCount !== count) {
      dispatch({type: RESET_ACTION, payload: initStateRef.current});
      resetRef.current ++;
    }
  }, [count]);

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

  return {clapState, getToggleProps, getCounterProps, reset, resetDep: resetRef.current};
};

export default useClapState;

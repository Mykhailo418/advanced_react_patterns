import React, { useState, useCallback } from 'react';
import ClapIcon from './ClapIcon';
import ClapCount from './ClapCount';
import CountTotal from './CountTotal';
import ClapContainer from './ClapContainer';
import useClapAnimation from './custom_hooks/useClapAnimation';
import useDOMRef from './custom_hooks/useDOMRef';
import useClapState, { CLAP_ACTION, RESET_ACTION, MAX_CLAP_COUNT, internalReducer } from './custom_hooks/useClapState';
import useEffectAfterMount from './custom_hooks/useEffectAfterMount';

const  userInitState = {
  count: 0,
  countTotal: 3000,
  isClicked: false
};

// State Reducer
const Usage = () => {
  const [timesClapped, setTimeClapped] = useState(0);
  const isClappedTooMuch = timesClapped >= 7;
  const handleClick = useCallback(() => {
    setTimeClapped(prevState => prevState + 1);
  }, []);
  
  const reducer = (state, action) => {
    if (action.type === CLAP_ACTION && isClappedTooMuch) {
      return state;
    }
    return internalReducer(state, action);

  };
  const {clapState, getToggleProps, getCounterProps, reset,
    resetDep} = useClapState(userInitState, reducer);
  const [DOMRef, setRef] = useDOMRef();
  const animateTimeLine = useClapAnimation(DOMRef);
  const {count, countTotal, isClicked} = clapState;

  useEffectAfterMount(() => {
    animateTimeLine.replay();
  }, [count]);

  const [uploadingReset, setUpload] = useState(false);
  useEffectAfterMount(() => {
    setUpload(true);
    setTimeClapped(0);

    const id = setTimeout(() => {
      setUpload(false);
    }, 3000);

    return () => clearTimeout(id);
  }, [resetDep]);

  return (
    <React.Fragment>
      <ClapContainer handleClick={handleClick} getToggleProps={getToggleProps} setRef={setRef} data-refkey="clapBtn">
        <ClapIcon isClicked={isClicked} />
        <ClapCount setRef={setRef} data-refkey="clapCount" {...getCounterProps()} />
        <CountTotal countTotal={countTotal} setRef={setRef} data-refkey="clapCountTotal" />
      </ClapContainer>
      <br /><br />
      <div>
        {uploadingReset && <p>uploading reset {resetDep} ...</p>}
        <button onClick={reset}>Reset</button>
        <p>Clapped: {timesClapped} {isClappedTooMuch && 'to much clappes'}</p>
      </div>
    </React.Fragment>
  );
}

export default Usage;

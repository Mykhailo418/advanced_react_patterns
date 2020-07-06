import React, { useState, useCallback } from 'react';
import ClapIcon from './ClapIcon';
import ClapCount from './ClapCount';
import CountTotal from './CountTotal';
import ClapContainer from './ClapContainer';
import useClapAnimation from './custom_hooks/useClapAnimation';
import useDOMRef from './custom_hooks/useDOMRef';
import useClapState from './custom_hooks/useClapState';
import useEffectAfterMount from './custom_hooks/useEffectAfterMount';

const  userInitState = {
  count: 0,
  countTotal: 3000,
  isClicked: false
};

// State Initializer
const Usage = () => {
  const {clapState, updateClapState, getToggleProps, getCounterProps, reset,
    resetDep} = useClapState(userInitState);
  const [DOMRef, setRef] = useDOMRef();
  const animateTimeLine = useClapAnimation(DOMRef);
  const {count, countTotal, isClicked} = clapState;

  useEffectAfterMount(() => {
    animateTimeLine.replay();
  }, [count]);

  const [uploadingReset, setUpload] = useState(false);
  useEffectAfterMount(() => {
    setUpload(true);

    const id = setTimeout(() => {
      setUpload(false);
    }, 3000);

    return () => clearTimeout(id);
  }, [resetDep]);

  return (
    <React.Fragment>
      <ClapContainer getToggleProps={getToggleProps} handleClick={updateClapState} setRef={setRef} data-refkey="clapBtn">
        <ClapIcon isClicked={isClicked} />
        <ClapCount setRef={setRef} data-refkey="clapCount" {...getCounterProps()} />
        <CountTotal countTotal={countTotal} setRef={setRef} data-refkey="clapCountTotal" />
      </ClapContainer>
      <br /><br />
      <div>
        {uploadingReset && <p>uploading reset {resetDep} ...</p>}
        <button onClick={reset}>Reset</button>
      </div>
    </React.Fragment>
  );
}

export default Usage;

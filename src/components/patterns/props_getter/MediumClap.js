import React, { useState, useCallback } from 'react';
import ClapIcon from './ClapIcon';
import ClapCount from './ClapCount';
import CountTotal from './CountTotal';
import ClapContainer from './ClapContainer';
import useClapAnimation from './custom_hooks/useClapAnimation';
import useDOMRef from './custom_hooks/useDOMRef';
import useClapState from './custom_hooks/useClapState';
import useEffectAfterMount from './custom_hooks/useEffectAfterMount';

const Usage = () => {
  const {clapState, updateClapState, getToggleProps, getCounterProps} = useClapState();
  const [DOMRef, setRef] = useDOMRef();
  const animateTimeLine = useClapAnimation(DOMRef);
  const {count, countTotal, isClicked} = clapState;

  useEffectAfterMount(() => {
    animateTimeLine.replay();
  }, [count]);

  return (
    <ClapContainer getToggleProps={getToggleProps} handleClick={updateClapState} setRef={setRef} data-refkey="clapBtn">
      <ClapIcon isClicked={isClicked} />
      <ClapCount setRef={setRef} data-refkey="clapCount" {...getCounterProps()} />
      <CountTotal countTotal={countTotal} setRef={setRef} data-refkey="clapCountTotal" />
    </ClapContainer>
  );
}

export default Usage;

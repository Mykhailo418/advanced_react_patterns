import React, { useState, useCallback } from 'react';
import ClapIcon from './ClapIcon';
import ClapCount from './ClapCount';
import CountTotal from './CountTotal';
import useClapAnimation from './custom_hooks/useClapAnimation';
import useDOMRef from './custom_hooks/useDOMRef';
import useClapState from './custom_hooks/useClapState';
import useEffectAfterMount from './custom_hooks/useEffectAfterMount';

const MediumClapCustomHooks = () => {
  const [clapState, setClapState] = useClapState();
  const [DOMRef, setRef] = useDOMRef();
  const animateTimeLine = useClapAnimation(DOMRef);
  const {count, countTotal, isClicked} = clapState;

  useEffectAfterMount(() => {
    animateTimeLine.replay();
    console.log('useEffectAfterMount');
  }, [count]);

  console.log('render');
  return (
    <button ref={setRef} data-refkey="clapBtn" className="clap" onClick={setClapState}>
      <ClapIcon isClicked={isClicked} />
      <ClapCount count={count} setRef={setRef} />
      <CountTotal countTotal={countTotal} setRef={setRef} />
    </button>
  );
}

export default MediumClapCustomHooks;

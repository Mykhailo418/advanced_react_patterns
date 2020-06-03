import React, { useState, useCallback } from 'react';
import ClapIcon from './ClapIcon';
import ClapCount from './ClapCount';
import CountTotal from './CountTotal';
import useClapAnimation from './custom_hooks/useClapAnimation';

const initState = {
  count: 0,
  countTotal: 267,
  isClicked: false
};
const MAX_CLAP_COUNT = 50;

const MediumClapWithHooks = () => {
  const [clapState, setClapState] = useState(initState);
  const [refs, setRefState] = useState({});
  const animateTimeLine = useClapAnimation(refs);
  const {count, countTotal, isClicked} = clapState;

  const setRef = useCallback(node => {
    setRefState(prevrefState => ({
      ...prevrefState,
      [node.dataset.refkey]: node
    }) );
  }, []);

  const handleClick = e => {
    animateTimeLine.replay();
    setClapState(prevState => ({
      ...prevState,
      count: Math.min(prevState.count + 1, MAX_CLAP_COUNT),
      countTotal: prevState.count < MAX_CLAP_COUNT ?
        prevState.countTotal + 1 :
        prevState.countTotal,
      isClicked: true
    }) );
  };

  return (
    <button ref={setRef} data-refkey="clapBtn" className="clap" onClick={handleClick}>
      <ClapIcon isClicked={isClicked} />
      <ClapCount count={count} setRef={setRef} />
      <CountTotal countTotal={countTotal} setRef={setRef} />
    </button>
  );
}

export default MediumClapWithHooks;

import React, { useState, useCallback, createContext, useMemo } from 'react';
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
export const MediumClapContext = createContext();

const MediumClapCompound = ({children}) => {
  const [clapState, setClapState] = useState(initState);
  const [refs, setRefState] = useState({});
  const animateTimeLine = useClapAnimation(refs);

  const setRef = useCallback(node => {
    setRefState(prevrefState => ({
      ...prevrefState,
      [node.dataset.refkey]: node
    }) );
  }, []);

  const memoizedValue = useMemo(() => ({...clapState, setRef}), [clapState, setRef]);

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
    <MediumClapContext.Provider value={memoizedValue}>
      <button ref={setRef} data-refkey="clapBtn" className="clap" onClick={handleClick}>
        {children}
      </button>
    </MediumClapContext.Provider>
  );
}

const Usage = () => {
  return <MediumClapCompound>
    <ClapIcon />
    <ClapCount />
    <CountTotal />
  </MediumClapCompound>;
}

export default Usage;

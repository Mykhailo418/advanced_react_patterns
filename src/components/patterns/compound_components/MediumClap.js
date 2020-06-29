import React, { useState, useCallback, createContext, useMemo , useEffect, useRef} from 'react';
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

const MediumClapCompound = ({children, onClap}) => {
  const [clapState, setClapState] = useState(initState);
  const [refs, setRefState] = useState({});
  const animateTimeLine = useClapAnimation(refs);
  const {count} = clapState;
  const componentMounted = useRef(true);

  const setRef = useCallback(node => {
    setRefState(prevrefState => ({
      ...prevrefState,
      [node.dataset.refkey]: node
    }) );
  }, []);

  const memoizedValue = useMemo(() => ({...clapState, setRef}), [clapState, setRef]);

  useEffect(() => {
    if (!componentMounted.current) {
      console.log('useEffect invoked ', count)
      onClap && onClap(clapState)
    }
    componentMounted.current = false;
  }, [count]);

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

MediumClapCompound.Icon = ClapIcon;
MediumClapCompound.Count = ClapCount;
MediumClapCompound.Total = CountTotal;

const Usage = () => {
  const [count, setCount] = useState(0);
  const handleClap = clapState => {
    setCount(clapState.count);
  }

  return (
    <div style={{width: '100%'}}>
      <MediumClapCompound onClap={handleClap}>
        <MediumClapCompound.Icon />
        <MediumClapCompound.Count />
        <MediumClapCompound.Total />
      </MediumClapCompound>
      {!!count && <p>You have clapped {count}</p>}
    </div>
  );
}

export default Usage;

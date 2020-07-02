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

const MediumClapControlProps = ({children, onClap, values = null, style: customStyle = {}, className}) => {
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

  const isControlled = !!values && !!onClap;

  const getState = useCallback(() => isControlled ? values : clapState, [isControlled, values, clapState]);
  const memoizedValue = useMemo(() => ({...getState(), setRef}), [getState, setRef]);

  useEffect(() => {
    if (!componentMounted.current && !isControlled) {
      console.log('useEffect invoked ', count)
      onClap && onClap(clapState)
    }
    componentMounted.current = false;
  }, [count, onClap, isControlled]);

  const handleClick = e => {
    animateTimeLine.replay();
    isControlled
      ? onClap()
      : setClapState(prevState => ({
          ...prevState,
          count: Math.min(prevState.count + 1, MAX_CLAP_COUNT),
          countTotal: prevState.count < MAX_CLAP_COUNT ?
            prevState.countTotal + 1 :
            prevState.countTotal,
          isClicked: true
        }) );
  };

  const classNames = ["clap", className].join(' ').trim();

  return (
    <MediumClapContext.Provider value={memoizedValue}>
      <button ref={setRef} data-refkey="clapBtn" className={classNames} onClick={handleClick} style={customStyle}>
        {children}
      </button>
    </MediumClapContext.Provider>
  );
}

MediumClapControlProps.Icon = ClapIcon;
MediumClapControlProps.Count = ClapCount;
MediumClapControlProps.Total = CountTotal;

const Usage = () => {
  const [state, setState] = useState(initState);
  const handleClap = () => {
    setState(prevState => ({
        ...prevState,
        count: Math.min(prevState.count + 1, MAX_CLAP_COUNT),
        countTotal: prevState.count < MAX_CLAP_COUNT ?
          prevState.countTotal + 1 :
          prevState.countTotal,
        isClicked: true
      }) );
  }

  return (
    <div style={{width: '100%'}}>
      <MediumClapControlProps values={state} onClap={handleClap} >
        <MediumClapControlProps.Icon />
        <MediumClapControlProps.Count />
        <MediumClapControlProps.Total />
      </MediumClapControlProps>
      <MediumClapControlProps values={state} onClap={handleClap} >
        <MediumClapControlProps.Icon />
        <MediumClapControlProps.Count />
        <MediumClapControlProps.Total />
      </MediumClapControlProps>
    </div>
  );
}

export default Usage;

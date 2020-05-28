import React, { useState } from 'react';
import ClapIcon from './ClapIcon';
import ClapCount from './ClapCount';
import CountTotal from './CountTotal';
import withClapAnimation from './hoc/WithClapAnimation';

const initState = {
  count: 0,
  countTotal: 267,
  isClicked: false
};
const MAX_CLAP_COUNT = 50;

const MediumClap = ({animateTimeLine}) => {
  const [clapState, setClapState] = useState(initState);
  const {count, countTotal, isClicked} = clapState;

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
    <button id="clapBtn" className="clap" onClick={handleClick}>
      <ClapIcon isClicked={isClicked} />
      <ClapCount count={count} />
      <CountTotal countTotal={countTotal} />
    </button>
  );
}

const Usage = () => {
  const Comp = withClapAnimation(MediumClap);
  return <Comp />;
}

export default Usage;
